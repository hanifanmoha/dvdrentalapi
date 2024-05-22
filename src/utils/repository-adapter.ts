import _ from 'lodash';

export class RepositoryAdapter<T> {
  list: T[];
  primaryKey: keyof T;
  searchKeys: (keyof T)[];

  constructor(_list: T[], _primaryKey: keyof T, _searchKeys: (keyof T)[]) {
    this.list = _list;
    this.primaryKey = _primaryKey;
    this.searchKeys = _searchKeys;
  }

  getAll(): T[] {
    return this.list;
  }

  getFiltered(search: string): T[] {
    const filtered = _.filter(this.list, (t: T) => {
      for (let key of this.searchKeys) {
        const val = t[key];
        if (_.includes((val as string).toLowerCase(), search.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return filtered;
  }

  getByID(id: number): T | undefined {
    const res = this.list.find((f) => f[this.primaryKey] === id);

    return res;
  }

  getByKey(key: keyof T, search: T[keyof T]) {
    const x = this.list[0][key];
    return this.list.filter((item) => item[key] === search);
  }
}

export class RepositoryAdapterRelation<R, S, Pivot> {
  pivots: Pivot[];
  listA: R[];
  listB: S[];
  primaryKeyA: keyof R & keyof Pivot;
  primaryKeyB: keyof S & keyof Pivot;

  constructor(
    _pivots: Pivot[],
    _listA: R[],
    _listB: S[],
    _primaryKeyA: keyof R & keyof Pivot,
    _primaryKeyB: keyof S & keyof Pivot
  ) {
    this.pivots = _pivots;
    this.listA = _listA;
    this.listB = _listB;
    this.primaryKeyA = _primaryKeyA;
    this.primaryKeyB = _primaryKeyB;
  }

  getByA(id: number): S[] {
    const filteredKeys = this.pivots
      .filter((item) => item[this.primaryKeyA] === id)
      .map((item) => item[this.primaryKeyB]);
    return this.listB.filter((item) =>
      _.includes(
        filteredKeys,
        item[this.primaryKeyB] as unknown as Pivot[keyof S & keyof Pivot]
      )
    );
  }

  getByB(id: number): R[] {
    const filteredKeys = this.pivots
      .filter((item) => item[this.primaryKeyB] === id)
      .map((item) => item[this.primaryKeyA]);
    return this.listA.filter((item) =>
      _.includes(
        filteredKeys,
        item[this.primaryKeyA] as unknown as Pivot[keyof R & keyof Pivot]
      )
    );
  }
}

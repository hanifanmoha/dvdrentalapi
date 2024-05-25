import _ from 'lodash';

export class RepositoryAdapter<T> {
  list: T[];
  searchKeys: (keyof T)[];

  constructor(_list: T[], _searchKeys: (keyof T)[] = []) {
    this.list = _list;
    this.searchKeys = _searchKeys;
  }

  getAll(): T[] {
    return this.list;
  }

  getOne(key: keyof T, value: T[keyof T]): T | undefined {
    return this.list.find((f) => f[key] === value);
  }

  getListBySearch(search: string): T[] {
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

  getListByKey<K extends keyof T>(key: K, value: T[K] | T[K][]) {
    if (_.isArray(value)) {
      return this.list.filter((item) => _.includes(value, item[key]));
    } else {
      return this.list.filter((item) => item[key] === value);
    }
  }

  getListByFilter(filter: Partial<T>): T[] {
    return _.filter(this.list, filter) as T[];
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

import _ from 'lodash';

export function filterSearch<T>(
  array: T[],
  search: string,
  keys: (keyof T)[]
): T[] {
  const filtered = _.filter(array, (t: T) => {
    const values = keys.map((key) => t[key]);
    for (let val of values) {
      if (_.includes((val as string).toLowerCase(), search)) {
        return true;
      }
    }
    return false;
  });
  return filtered;
}

import _ from 'lodash';

export function filterSearch<T>(
  array: T[],
  search: string,
  keys: (keyof T)[]
): T[] {
  const filtered = _.filter(array, (t: T) => {
    for (let key of keys) {
      const val = t[key];
      if (_.includes((val as string).toLowerCase(), search.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
  return filtered;
}

// export function pivot<Main,Pivot,Target>(pivot:Pivot[], target: Target[], keyMain: keyof Pivot, keyTarget: keyof Pivot) : Target[] {
//   const filteredPivot = pivot.filter(p => p[keyMain] === keyMain)
//   return filteredPivot.filter(p => (...target.filter))
// }

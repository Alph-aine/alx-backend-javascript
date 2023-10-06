export default function cleanSet(set, startString) {
  const resultArray = [];
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') return '';
  set.forEach((value) => {
    if (value.startsWith(startString)) resultArray.push(value.slice(startString.length));
  });
  return resultArray.join('-');
}

const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object') return '';
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 1);
  else {
    const count = weakMap.get(endpoint);
    if (count >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, count + 1);
  }
  return undefined;
}

export { weakMap, queryAPI };

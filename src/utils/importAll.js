let cache = [];

function importAll(resource) {
  resource.keys().forEach(key => (cache.push({[key.replace('./', '')]: resource(key)})));
  return cache;
}

export default importAll;

const _ = require('lodash');

const createNullMap = function(elm) {
  return {
    "NULL": true
  };
}

module.exports = function(data) {
  const convertedMap = {};
  _.each(data, function(elm, key) {
    if (elm === undefined) {
      return;
    }
    if (_.isNull(elm)) {
      convertedMap[key] = createNullMap(elm);
    }

    const type = typeof elm;
  });

  return convertedMap;
};

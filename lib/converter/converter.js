const _ = require('lodash');

const createNullMap = function(elm) {
  return {
    "NULL": true
  };
}

const createNumMap = function(elm) {
  return {
    "N": String(elm)
  }
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
    switch(type) {
      case 'number':
        convertedMap[key] = createNumMap(elm);
    }
  });

  return convertedMap;
};

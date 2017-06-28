const assert = require('power-assert');

const util = require('../../lib/util');
console.error('-----util', util);
const getDataType = util.getDataType;
describe('getDataType', () => {
  it('should return string if value type is string', (done) => {
    const result = util.getDataType('test');
    assert.equal(result, 'string');
    done();
  });
});

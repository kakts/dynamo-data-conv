const assert = require('power-assert');

const converter = require('../../lib/converter/converter');
console.error("---converter", converter);
describe('converter', () => {
  it('should return string if value type is string', (done) => {
    const result = util.getDataType('test');
    assert.equal(result, 'string');
    done();
  });
});

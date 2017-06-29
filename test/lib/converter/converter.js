const assert = require('power-assert');

const converter = require('../../../lib/converter/converter');
console.error("---converter", converter);
describe('converter', () => {
  it('should return string if value type is string', function(done) {
    const data = {
      a: null
    };
    const result = converter(data)
    assert.eql(result, {
      a: {
        NULL: true
      }
    });
    done();
  });
});

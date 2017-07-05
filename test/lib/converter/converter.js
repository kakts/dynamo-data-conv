const assert = require('power-assert');

const converter = require('../../../lib/converter/converter');
describe('converter', () => {
  it('should return string if value type is string', function(done) {
    const data = {
      a: null
    };
    const result = converter(data)
    assert.deepEqual(result, {
      a: {
        NULL: true
      }
    });
    done();
  });

  it('should return integer if value type is integer', function(done) {
    const data = {
      a: 10,
      b: 20
    };
    const result = converter(data);
    assert.deepEqual(result, {
      a: {
        N: '10'
      },
      b: {
        N: '20'
      }
    });
    done();
  });
});

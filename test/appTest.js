const assert   = require('chai').assert;
const compress = require('../app').compressWord;
const rearrange = require('../app').rearrange;

//=================== Compress Word Testing ====================//
describe('CompressWord', function() {
    it('should return kk', function() {
        let result = compress('kdabbcccbaaddk', 3);
        assert.equal(result, 'kk');
    });
});

describe('CompressWord', function() {
    it('should return kkaa', function() {
        let result = compress('kdbbcccbaaddk', 3);
        assert.equal(result, 'kkaa');
    });
});

describe('CompressWord', function() {
    it('should return caa', function() {
        let result = compress('kkdbdbcbaadk', 3);
        assert.equal(result, 'caa');
    });
});

describe('CompressWord', function() {
    it('should return k', function() {
        let result =compress('dbdbccbaadk', 2);
        assert.equal(result, 'k');
    });
});

//======================= Rearrange Testing ========================//
describe('Rearrange', function() {
    it('should return [3,5,10,7]', function(){
        let result = rearrange([5,3,7,10]);
        assert.deepEqual(result, [3, 5,10,7]);
    })
});

describe('Rearrange', function() {
    it('should return [64, 3, 5, 10, 65, 7]', function(){
        let result = rearrange([3,5,65,10,64,7]);
        assert.deepEqual(result, [ 64, 3, 5, 10, 65, 7]);
    })
});

describe('Rearrange', function() {
    it('should return [64, 128, 3, 5, 10, 65, 7, 15]', function(){
        let result = rearrange([3,5,65,128,10,64,7,15]);
        assert.deepEqual(result, [64, 128, 3, 5, 10, 65, 7, 15]);
    })
});
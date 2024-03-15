import { describe } from 'mocha'
import { add } from '../logic.js' // Added import statement for the 'add' function
import { assert } from 'chai';

describe('test add', () => {
    it('test 1 på add med 1 + 2', () => {
        const result = add(1, 2)
        assert.equal(result, 3)
    })
    it('test 2 på add med 2 + 2', () => {
        const result = add(2, 2)
        assert.equal(result, 4)
    })
});

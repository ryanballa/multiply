import index from '../index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('0 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);
});

test('1 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[1], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);
});

test('2 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[2], [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,]);
});

test('3 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[3], [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30,]);
});

test('4 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[4], [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40,]);
});

test('5 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[5], [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,]);
});

test('6 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[6], [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60,]);
});

test('7 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[7], [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70,]);
});

test('8 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[8], [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80,]);
});

test('9 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[9], [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90,]);
});

test('10 multiple table', () => {
    const result = index.multiply();
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[10], [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,]);
});

// Dynamic N Primes
test('11 multiple table', () => {
    const result = index.multiply(11);
    const resultJSON = JSON.parse(result);
    assert.equal(resultJSON[11], [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110,]);
});

test.run();
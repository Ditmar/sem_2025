import { describe, it, expect } from 'vitest';
import { fizzBuzzFazz } from './fizzbuzzfazz';

describe('fizzBuzzFazz', () => {
    it('should return "fizz" for multiples of 3', () => {
        expect(fizzBuzzFazz(3)).toBe('Fizz');
        expect(fizzBuzzFazz(6)).toBe('Fizz');
    });

    it('should return "Buzz" for multiples of 5', () => {
        expect(fizzBuzzFazz(5)).toBe('Buzz');
    });

    it('should return "Buzz" for multiples of 7', () => {
        expect(fizzBuzzFazz(7)).toBe('Fazz');
    });

    it('should return "FizzBuzz" for mulitples of 3 and 5', () => {
        expect(fizzBuzzFazz(15)).toBe('FizzBuzz');
    })

    it('should return "FizzFazz" for mulitples of 3 and 7', () => {
        expect(fizzBuzzFazz(21)).toBe('FizzFazz');
    })

    it('should return "BuzzFazz" for mulitples of 5 and 7', () => {
        expect(fizzBuzzFazz(5 * 7)).toBe('BuzzFazz');
    })

    it('should return "FizzBuzzFazz" for mulitples of 5 and 7', () => {
        expect(fizzBuzzFazz(3 * 5 * 7)).toBe('FizzBuzzFazz');
    })

    it('should return a number ', () => {
        expect(fizzBuzzFazz(2)).toBe('2');
    })

    it('should return a number ', () => {
        expect(fizzBuzzFazz(1)).toBe('1');
    })

});
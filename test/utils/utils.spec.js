import React from 'react';
import { generateUniqueKey, toNumber, formatCurrency } from './../../src/App/utils/index.js';
import expect from 'expect';

describe('Utilities', () => {
    describe('Generate unique key', () => {
        it('should return ID with unique timestamp', () => {
            const prefix = 'tableUniqueKey';

            expect(generateUniqueKey(prefix)).toContain(prefix + '__');
        });

        it('should return undefined if no prefix is defined', () => {
            expect(generateUniqueKey()).toBe(undefined);
        });

        it('should return undefined if prefix is not a string', () => {
            expect(generateUniqueKey(false)).toBe(undefined);
            expect(generateUniqueKey(null)).toBe(undefined);
            expect(generateUniqueKey(234.324)).toBe(undefined);
        });
    });
    describe('To Number', () => {
        it('should return a number if given a string with no numbers', () => {
            const value = 'tableUniqueKey';

            expect(toNumber(value)).toBe(0);
        });

        it('should return a number if given a string with a number', () => {
            const value = 'asd345345asd';

            expect(toNumber(value)).toBe(345345);
        });

        it('should return only numbers if given a string with numbers, characters and letters', () => {
            const value = 'asd345345.1s@234asd';

            expect(toNumber(value)).toBe(345345.1234);
        });

        it('should return undefined if no value is parsed', () => {
            expect(toNumber(undefined)).toBe(undefined);
        });

        it('should return number if value is a number', () => {
            expect(toNumber(-234.234234)).toBe(-234.234234);
        });
    });

    describe('Format currency', () => {
        it('should return $0.00 if given a string with no numbers', () => {
            const value = 'tableUniqueKey';

            expect(formatCurrency(value)).toBe('$0.00');
        });

        it('should return a number if given a string with a number', () => {
            const value = 'asd345345asd';

            expect(formatCurrency(value)).toBe('$345345.00');
        });

        it('should return a number if given a string with a number', () => {
            const value = 'asd345345asd';

            expect(formatCurrency(value)).toBe('$345345.00');
        });

        it('should return a number if given a negative number', () => {
            const value = '-asd345345asd';

            expect(formatCurrency(value)).toBe('$-345345.00');
        });
    });
});

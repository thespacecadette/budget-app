import React from 'react';
import { calculateTotal } from './../../../src/App/Budget/functions.js';
import expect from 'expect';

describe('Budget functions', () => {
    let item = {
        name: 'test',
        amount: 10.511,
        desc: 'test',
        frequency: 'ongoing',
        type: 'income'
    };

    afterEach(() => {
        item = {
            name: 'test',
            amount: 10.511,
            desc: 'test',
            frequency: 'ongoing',
            type: 'income'
        };
    });

    describe('Calculate total', () => {
        describe('Income', () => {

            it('should return total amount', () => {
                const total = 10;

                expect(calculateTotal(item, total)).toBe(20.511);
            });

            it('should return a negative total amount if total is less than income amount', () => {
                const total = -20;

                expect(calculateTotal(item, total)).toBe(-9.489);
            });

            it('should return total amount if amount parsed is string', () => {
                const total = 10;
                item.amount = '10.511';

                expect(calculateTotal(item, total)).toBe(20.511);
            });

            it('should return total amount if total parsed is string', () => {
                const total = '10';

                expect(calculateTotal(item, total)).toBe(20.511);
            });

        });

        describe('Expenses', () => {
            it('should return total amount', () => {
                item.type = 'expense';
                const total = 15;

                expect(calculateTotal(item, total)).toBe(4.489000000000001);
            });

            it('should return a negative total amount if total is less than expenses amount', () => {
                item.type = 'expense';
                const total = 9.511;

                expect(calculateTotal(item, total)).toBe(-1);
            });

            it('should return total amount if amount parsed is string', () => {
                item.type = 'expense';
                const total = 15.511;
                item.amount = '10.511';

                expect(calculateTotal(item, total)).toBe(5);
            });

            it('should return total amount if total parsed is string', () => {
                item.type = 'expense';
                const total = '11.511';

                expect(calculateTotal(item, total)).toBe(1);
            });

        });

    });
});

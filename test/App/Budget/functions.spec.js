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

    describe('Calculate total', () => {
        describe('Income', () => {

            it('should return total amount', () => {
                const total = 10;

                expect(calculateTotal(item, total)).toBe(20.511);
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

        // describe('Expenses', () => {
        //     item.type = 'expense'

        //     it('should return total of expenses and previous total as NUMBER', () => {
        //         const total = 11.511;

        //         expect(calculateTotal(item, total)).toBe(1.00);
        //     });

        //     it('should return total of expenses and previous total as NUMBER', () => {
        //         const total = 11.511;

        //         expect(calculateTotal(item, total)).toBe(1.00);
        //     });
        // });

    });
});

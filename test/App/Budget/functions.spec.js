import React from 'react';
import { removeIncomeExpenseItem, calculateTotal, removeItemFromTotal } from './../../../src/App/Budget/functions.js';
import expect from 'expect';

describe('Budget functions', () => {

    describe('Remove item from income and expenses', () => {
        let incomeExpenses = [{
            incomeExpenseId: 'expense_groceries_09as0d98asd',
            name: 'Groceries',
            amount: 150,
            frequency: 'ongoing',
            type: 'expense',
            desc: 'Vegan goodies, household things and cat food.'
        },
        {
            incomeExpenseId: 'income_salary_09as0d98asd',
            name: 'Salary',
            amount: 2150,
            frequency: 'ongoing',
            type: 'income',
            desc: 'Income from Acme Inc'
        }];

        it('should return incomeExpenses array without item', () => {
            const itemToRemove = 'income_salary_09as0d98asd';

            expect(removeIncomeExpenseItem(incomeExpenses, itemToRemove)).toEqual([
                {
                    incomeExpenseId: 'expense_groceries_09as0d98asd',
                    name: 'Groceries',
                    amount: 150,
                    frequency: 'ongoing',
                    type: 'expense',
                    desc: 'Vegan goodies, household things and cat food.'
                }
            ]);
        });

        it('should return empty incomeExpenses array if all items removed', () => {            
            removeIncomeExpenseItem(incomeExpenses, 'expense_groceries_09as0d98asd');
            removeIncomeExpenseItem(incomeExpenses, 'income_salary_09as0d98asd');
            
            expect(incomeExpenses).toEqual([]);
        });
    });

    describe('Calculate total', () => {
        let item;

        beforeEach(() => {
            item = {
                name: 'test',
                amount: 10.511,
                desc: 'test',
                frequency: 'ongoing',
                type: 'income',
                incomeExpenseId: 'expense__test__234234',
            };
        });

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
            let props;

            beforeEach(() => {
                item = {
                    name: 'test',
                    amount: 10.511,
                    desc: 'test',
                    frequency: 'ongoing',
                    type: 'income',
                    incomeExpenseId: 'expense__test__234234',
                };
            });

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

    describe('Remove item from total', () => {
        let itemToBeRemoved;

        beforeEach(() => {
            itemToBeRemoved = {
                name: 'test',
                amount: 120.50,
                desc: 'test',
                frequency: 'ongoing',
                type: 'income',
                incomeExpenseId: 'expense__test__234234',
            };
        });

        describe('Income', () => {
            it('should return total amount minus removed income', () => {
                const total = 1200;

                expect(removeItemFromTotal(itemToBeRemoved, total)).toBe(1079.5);
            });
        });

        describe('Expenses', () => {
            it('should return total amount removed added expense', () => {
                itemToBeRemoved.type = 'expense';
                const total = 1020;

                expect(removeItemFromTotal(itemToBeRemoved, total)).toBe(1140.5);
            });
        });

    });
});

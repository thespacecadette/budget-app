import React from 'react';
import renderer from 'react-test-renderer';
import Summary from './../../../src/App/Budget/components/summary.jsx';
import { SUMMARY_TEXT } from './../../../src/App/Budget/constants';
import expect from 'expect';
import { render, shallow } from 'enzyme';
import enzymify from 'expect-enzyme';
import sinon from 'sinon';
expect.extend(enzymify);

describe('Summary', () => {
    let props = {
        data: [],
        total: 0,
        isHidden: false,
        removeIncomeExpense: () => { },
    };

    afterEach(() => {
        // Teardown
        props = {
            data: [],
            total: 0,
            isHidden: false,
            removeIncomeExpense: () => { },
        };
    });

    it('should not render if isHidden is true', () => {
        props.isHidden = true;
        const summary = shallow(<Summary {...props} />);

        expect(summary.type()).toBe(null);
    });

    describe('Data', () => {
        it('should render with error if empty data', () => {
            const summary = render(<Summary {...props} />);

            expect(summary.find('.well').text()).toBe(SUMMARY_TEXT.NO_DATA);
        });

        it('should render 2 items if data parsed is valid', () => {
            props.data = [
                {
                    name: 'Groceries',
                    amount: 902.30,
                    desc: 'Description of food',
                    frequency: 'oneoff',
                    type: 'expense',
                    incomeExpenseId: 'expense__test__234234',
                },
                {
                    name: 'Rent',
                    amount: 2000,
                    desc: 'Roof over head',
                    frequency: 'reoccuring',
                    type: 'income',
                    incomeExpenseId: 'income__test__234234',
                }
            ];

            const summary = render(<Summary {...props} />);

            expect(summary.find('.budgetSummaryItem__item').length).toEqual(2);
        });
    });

    describe('Total', () => {
        it('should render total if more than 2 floating point decimals', () => {
            props.data = [
                {
                    name: 'Groceries',
                    amount: 902.30,
                    desc: 'Description of food',
                    frequency: 'oneoff',
                    type: 'expense',
                    incomeExpenseId: 'expense__test__234234',
                }
            ];
            props.total = 234.923;
            const summary = render(<Summary {...props} />);

            expect(summary.find('.budgetSummary__totalAmount').text()).toBe('$234.92');
        });

        it('should render total if 0', () => {
            props.data = [
                {
                    name: 'Groceries',
                    amount: 0,
                    desc: 'Description of food',
                    frequency: 'oneoff',
                    type: 'expense',
                    incomeExpenseId: 'expense__test__234234',
                }
            ];
            props.total = 0;
            const summary = render(<Summary {...props} />);

            expect(summary.find('.budgetSummary__totalAmount').text()).toBe('$0.00');
        });

        it('should render total if a negative value', () => {
            props.data = [
                {
                    name: 'Groceries',
                    amount: 0,
                    desc: 'Description of food',
                    frequency: 'oneoff',
                    type: 'expense',
                    incomeExpenseId: 'expense__test__234234',
                }
            ];
            props.total = -234.923;
            const summary = render(<Summary {...props} />);

            expect(summary.find('.budgetSummary__totalAmount').text()).toBe('$-234.92');
        });

        it('should render total to two decimal places', () => {
            props.data = [
                {
                    name: 'Groceries',
                    amount: 0,
                    desc: 'Description of food',
                    frequency: 'oneoff',
                    type: 'expense',
                    incomeExpenseId: 'expense__test__234234',
                }
            ];
            props.total = -234.3;
            const summary = render(<Summary {...props} />);

            expect(summary.find('.budgetSummary__totalAmount').text()).toBe('$-234.30');
        });
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import SummaryItem from './../../../src/App/Budget/components/summaryItem.jsx';
import expect from 'expect';
import { render, shallow } from 'enzyme';
import enzymify from 'expect-enzyme';
import sinon from 'sinon';
expect.extend(enzymify);

describe('Summary item', () => {
    let props = {
        incomeExpenseId: 'expense__test__234234',
        name: 'Test',
        dateTimeAdded: 'dateTimeRecorded',
        amount: '234.234',
        frequency: 'oneoff',
        desc: 'Some texty pants',
        total: 0,
        totalExpenses: 0,
        type: 'expense',
        removeIncomeExpense: () => { },
    };

    afterEach(() => {
        // Teardown
        props = {
            incomeExpenseId: 'expense__test__234234',
            name: 'Test',
            dateTimeAdded: 'dateTimeRecorded',
            amount: '234.234',
            frequency: 'oneoff',
            desc: 'Some texty pants',
            total: 0,
            totalExpenses: 0,
            type: 'expense',
            removeIncomeExpense: () => { },
        };
    });

    it('should render', () => {
        props.isHidden = true;
        const summary = shallow(<SummaryItem {...props} />);

        expect(summary).toExist();
    });

    describe('Item Amount', () => {
        it('should render formatted amount', () => {
            const summary = render(<SummaryItem {...props} />);

            expect(summary.find('.budgetSummaryItem__amount').text()).toBe('$234.23');
        });

        it('should render formatted amount if negative value', () => {
            props.amount = '-234.234';
            const summary = render(<SummaryItem {...props} />);

            expect(summary.find('.budgetSummaryItem__amount').text()).toBe('$-234.23');
        });

        it('should render formatted amount if 0 value', () => {
            props.amount = '-0';
            const summary = render(<SummaryItem {...props} />);

            expect(summary.find('.budgetSummaryItem__amount').text()).toBe('$0.00');
        });
    });
});

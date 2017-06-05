import React from 'react';
import renderer from 'react-test-renderer';
import Budget from './../../../src/App/Budget/index.js';
import expect from 'expect';
import { render } from 'enzyme';
import enzymify from 'expect-enzyme'
expect.extend(enzymify);
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('Budget', () => {
    let props = {
        budget: {
            status: null,
            total: 0,
            totalExpenses: 0,
            incomeExpenses: [],
            budgetId: '',
        },
    };
    let state = {
        addState: false,
    };
    const initialState = {
        budget: {
            budgetId: '',
            status: null,
            incomeExpenses: [],
            total: 0,
            totalExpenses: 0,
        }
    };
    const store = mockStore(initialState);

    it('should render with title', () => {
        const budget = render(<Budget state={state} {...props} store={store} />);

        expect(budget).toExist();
        expect(budget.find('h2').text()).toBe('Budget');
    });

    // it('should not render initially with notification, 2 add buttons and no add form', () => {
    //     const budget = render(<Budget state={state} {...props} store={store} />);

    //     expect(budget.html()).toEqual('<div class="budget"><h2 class="">Budget</h2><button class="budget__addExpense btn btn-default btn-lg" type="button" name="expense">Add expense</button><button class="budget__addIncome btn btn-default btn-lg" type="button" name="income">Add income</button><div class="clear"></div></div>');
    // });

});

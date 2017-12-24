import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './../../../src/App/Settings/index.js';
import expect from 'expect';
import { render } from 'enzyme';
import enzymify from 'expect-enzyme'
expect.extend(enzymify);
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('Settings', () => {
    let props = {
        settings: {
            status: null,
            frequency: 'monthly',
        },
    };
    const initialState = {
        settings: {
            status: null,
            frequency: 'monthly',

        }
    };
    const store = mockStore(initialState);

    it('should render with title', () => {
        const settings = render(<Settings {...props} store={store} />);

        expect(settings).toExist();
        expect(settings.find('h2').text()).toBe('Budget settings');
    });

    // it('should not render initially with notification, 2 add buttons and no add form', () => {
    //     const budget = render(<Budget state={state} {...props} store={store} />);

    //     expect(budget.html()).toEqual('<div class="budget"><h2 class="">Budget</h2><button class="budget__addExpense btn btn-default btn-lg" type="button" name="expense">Add expense</button><button class="budget__addIncome btn btn-default btn-lg" type="button" name="income">Add income</button><div class="clear"></div></div>');
    // });

});

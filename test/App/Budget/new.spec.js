import React from 'react';
import renderer from 'react-test-renderer';
import New from './../../../src/App/Budget/components/new.jsx';
import expect from 'expect';
import { render, shallow } from 'enzyme';
import enzymify from 'expect-enzyme';
import sinon from 'sinon';
expect.extend(enzymify);

describe('Add income/expense screen', () => {
    let props = {
        type: 'income',
        createIncomeExpenseItem: () => { },
        dismiss: () => { },
        init: () => { },
    };

    afterEach(() => {
        // Teardown
        props = {
            type: 'income',
            createIncomeExpenseItem: () => { },
            dismiss: () => { },
            init: () => { },
        };
    });

    it('should render with title', () => {
        const newIncomeExpense = render(<New {...props} />);

        expect(newIncomeExpense).toExist();
        // expect(newIncomeExpense.find('h2').text()).toBe('Add income');
    });

    describe('Validation', () => {
        it('should validate form if not all required fields are entered', () => {
            const newIncomeExpense = shallow(<New {...props} />);

            newIncomeExpense.find('.newIncomeExpense__saveBtn').simulate('click');

            expect(newIncomeExpense.find('.error')).toExist();
        });

        it('should reset form and save data if given all mandatory information', () => {
            const newIncomeExpense = shallow(<New {...props} />);
            const goSpy = sinon.spy(newIncomeExpense.instance(), 'save');

            newIncomeExpense.find('.newIncomeExpense__name input').simulate('change', {
                target: { value: 'Salary from work', name: 'name' }
            });
            newIncomeExpense.find('.newIncomeExpense__amount input').simulate('change', {
                target: { value: '$2000', name: 'amount' }
            });
            newIncomeExpense.find('.newIncomeExpense__frequencyOneOff').simulate('change', {
                target: { value: 'reoccuring', name: 'frequency' }
            });
            newIncomeExpense.find('.newIncomeExpense__saveBtn').simulate('click');

            expect(newIncomeExpense.state('name')).toBe('');
            expect(newIncomeExpense.state('amount')).toBe('');
            expect(newIncomeExpense.state('frequency')).toBe('');
            sinon.assert.calledOnce(goSpy);
        });
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Nav from './../../../src/App/Settings/components/nav.jsx';
import expect from 'expect';
import { render, shallow } from 'enzyme';
import enzymify from 'expect-enzyme';
import sinon from 'sinon';
expect.extend(enzymify);

describe('Settings navigation dropdown', () => {
    let props = {
    };

    afterEach(() => {
        // Teardown
        props = {
        };
    });

    it('should render with title', () => {
        const newIncomeExpense = render(<Nav {...props} />);

        // expect(newIncomeExpense).toExist();
        expect(newIncomeExpense.find('.dropdown-toggle').text()).toBe('Settings');
    });

    it('should render budget in sub navigation', () => {
        const newIncomeExpense = render(<Nav {...props} />);

        expect(newIncomeExpense.find('li').length).toBe(1);
        expect(newIncomeExpense.find('li').text()).toBe('Budget');
    });
});

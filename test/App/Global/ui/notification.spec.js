import React from 'react';
import renderer from 'react-test-renderer';
import notification from './../../../../src/App/Global/ui/notification.jsx';
import expect from 'expect';
import { render, shallow } from 'enzyme';
import enzymify from 'expect-enzyme';
import sinon from 'sinon';
expect.extend(enzymify);

describe('Notification component', () => {
    let props = {
        message: null,
        type: 'success'
    };

    it('should not render if no message is provided', () => {
        const Notification = render(<notification {...props} />);

        expect(Notification).toExist();
    });

    // FIXME: Rename and move component
    // it('should render if a message is provided', () => {
    //     props.message = 'This is a notification message';

    //     const Notification = shallow(<notification {...props} />);

    //     expect(Notification.html()).toExist();
    // });

});

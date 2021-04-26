// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import React from 'react';
import ReactDOM from 'react-dom';

import '@testing-library/jest-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInput from './components/TextInput/TextInput';
configure({ adapter: new Adapter() });

describe('basic input component', () => {
    it("should render without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should render a placeholder", () => {
        const placeholder_text = "What's popping up?";
        const wrapper = shallow(<TextInput placeholder={placeholder_text} />);
        expect(wrapper.prop("placeholder")).toEqual(placeholder_text);
    });
});
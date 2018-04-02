import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Anchor from './index'
describe('The anchor',()=>{
    it('It renders the anchor tag correctly',()=>{
        const wrapper = shallow(<Anchor href="test.com" conternt="test content"/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
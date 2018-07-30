import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Failure} from './index'
describe('The main app',()=>{
    it('It renders the failure page correctly',()=>{
        const wrapper = shallow(<Failure/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
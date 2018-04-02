import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Result} from './index'
describe('The result entry screen',()=>{
    it('It renders the result screen correctly',()=>{
        const wrapper = shallow(<Result status="Great" reset={()=>{} } />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {App} from './index'
describe('The main app',()=>{
    it('It renders the main page correctly',()=>{
        const wrapper = shallow(<App/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
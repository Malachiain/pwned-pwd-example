import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './index'
describe('The Header ',()=>{
    it('It renders the header correctly',()=>{
        const wrapper = shallow(<Header/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
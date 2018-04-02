import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './index'
describe('The Footer ',()=>{
    it('It renders the footer correctly',()=>{
        const wrapper = shallow(<Footer/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
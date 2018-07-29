import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Password} from './index'
describe('The pasword entry screen',()=>{
    it('It renders the password screen correctly',()=>{
        const wrapper = shallow(<Password password="abc123" updatePassword={()=>{} } checkStatus={()=>{} } />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from './index'
describe('The Loading page ',()=>{
    it('It renders the loading page',()=>{
        const wrapper = shallow(<Loading/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
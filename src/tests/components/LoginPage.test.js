import React from 'react';
import {shallow} from 'enzyme';
import { wrap } from 'module';
import {LoginPage} from '../../components/LoginPage';

test('should render Login Page component',()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})

test('should call startLoginPAge on button click',()=>{
    //creating a spy
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})



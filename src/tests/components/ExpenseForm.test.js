import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { wrap } from 'module';

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})
//mocking moment to a specific point in time if no point in time 
// is provided

test('should render expense form with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense= {expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    //faking (event) passed in onSubmit handler
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toEqual('Please provide description and amount.');
    expect(wrapper).toMatchSnapshot();

});

test('should set description on input change',()=>{
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        //e will be here an object with target defined n it with its value as'value'
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change',()=>{
    const value='New note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input',()=>{
    const value="23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input',()=>{
    const value="23.501";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
})

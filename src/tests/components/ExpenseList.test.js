import React from 'react';
//importing the uncconnected compoenet
import {ExpenseList} from '../../components/ExpenseList';
import  {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render expense list with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})

test('should rendere expense list with empty messsage',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})




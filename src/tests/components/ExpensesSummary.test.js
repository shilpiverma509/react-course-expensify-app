import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import React from 'react';


test('should correctly display total of 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly display total of multiple expenses',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {23} expenseTotal={12345} />);
    expect(wrapper).toMatchSnapshot();
})
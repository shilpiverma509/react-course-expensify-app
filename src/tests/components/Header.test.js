//react-test-renderer
import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';



test('should render Header correctlt',()=>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    //expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});


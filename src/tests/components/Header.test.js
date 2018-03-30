//react-test-renderer
import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';



test('should render Header correctlt',()=>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={()=>{

    }} />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    //expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click',()=>{
    //creating a spy
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled();
});


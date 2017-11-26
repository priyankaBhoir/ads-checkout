import React from 'react'
import { shallow, mount, unmount } from 'enzyme';
import renderer from 'react-test-renderer';
import {MemoryRouter } from 'react-router-dom'
import CartContainer from '../src/app/containers/CartContainer';

import Dispatcher from '../src/app/dispatcher/Dispatcher';
import AppConstants from '../src/app/constants/Constants';
import CartStore from '../src/app/stores/CartStore';
import CartAction from '../src/app/actions/CartActions';


jest.mock('react-router-dom');


const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>);

// Snapshot for Home React Component
describe('CartContainer --- Snapshot',()=>{
    it('+++capturing Snapshot of Container', () => {
        const renderedValue =  renderer.create(<CartContainer />).toJSON()
        expect(renderedValue).toMatchSnapshot();

    });
});

///*******************************************************************************************************
describe('Shallow Render REACT [SMART] Container :: CartContainer',()=>{
    let wrapper
    beforeEach(()=>{
      if(wrapper) wrapper.unmount();
       wrapper = mountWithRouter(<CartContainer/>);     
    })
    

    it('+++ Smart component render even if nothinng is in cart', () => {
      wrapper = mountWithRouter(<CartContainer />)
      expect(wrapper.length).toEqual(1)
    });

    //Does not pass, because it is enclosed in router.
    //@todo: https://github.com/ReactTraining/react-router/issues/5059
    /*it('+++ Smart component render, link to shopping should be present', () => {
      wrapper = mountWithRouter(<CartContainer />)
      console.log(wrapper.props().children);
      expect(wrapper.props().children.find('.link').length).toEqual(1)
    });*/

   
    
});

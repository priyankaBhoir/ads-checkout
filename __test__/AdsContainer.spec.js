import React from 'react'
import { shallow, mount, unmount } from 'enzyme';
import renderer from 'react-test-renderer';
import {MemoryRouter } from 'react-router-dom'
import AdsContainer from '../src/app/containers/AdsContainer';

import Dispatcher from '../src/app/dispatcher/Dispatcher';
import AppConstants from '../src/app/constants/Constants';
import AdsStore from '../src/app/stores/AdsStore';

let componentDidMount = jest.fn();
let updateAllAds = jest.fn();
AdsContainer.prototype.updateAllAds = updateAllAds;

AdsContainer.prototype.componentDidMount = jest.fn(() => {
  AdsStore.addChangeListner(AppConstants.EVENT_CONSTANT.ADS_LOADED, updateAllAds)
});


jest.mock('react-router-dom');


const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>);

// Snapshot for Home React Component
describe('AdShelf --- Snapshot',()=>{
    it('+++capturing Snapshot of Container', () => {
        const renderedValue =  renderer.create(<AdsContainer />).toJSON()
        expect(renderedValue).toMatchSnapshot();

    });
});

///*******************************************************************************************************
describe('Shallow Render REACT [SMART] Container :: AdsContainer',()=>{
    let wrapper
    beforeEach(()=>{
        if(wrapper) wrapper.unmount();
       wrapper = mountWithRouter(<AdsContainer/>);     
    })
    
    let spy

    afterEach(() => {
      spy.mockClear()
    })

    it('+++ Smart component should invoke method to load data', () => {
       
       if(wrapper) wrapper.unmount();
       spy = jest.spyOn(AdsContainer.prototype, 'componentDidMount');
        // wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}  initialIndex={0}> <AdsContainer/> </MemoryRouter>);
        wrapper = mountWithRouter(<AdsContainer />)
        // expect(componentDidMount).toBeCalled();
        expect(spy).toHaveBeenCalled();
    });

   it('+++ SMART Component should listen to changes from store', () => {
        // dispatch action ( store is listening for action )
        spy = jest.spyOn(AdsContainer.prototype, 'updateAllAds');
        Dispatcher.dispatch({
            type: AppConstants.API_CONSTANT.LOAD_DATA,
            data: [{
              id: 'classic',
              title: 'Classic',
              price: 299,
              description: ["Basic Ad"]
          }]
        });
        
        expect(spy).toHaveBeenCalled();
    });
    
});

import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import AdShelf from '../src/app/components/AdShelf'
import AdPackage from '../src/app/components/AdPackage'

// Snapshot for Home React Component
describe('AdShelf --- Snapshot',()=>{
    it('+++capturing Snapshot of AdShelf', () => {
        const ad = {
            id: 'classic',
            title: 'Classic',
            price: 299,
            description: ["Basic Ad"]
        };
        const renderedValue =  renderer.create(<AdShelf key={ad.id} ad={ad} addToCart={() => {}}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

///*******************************************************************************************************
describe('Shallow Render REACT COMPONENTS :: AdShelf',()=>{
    let wrapper
    const ad = {
        id: 'classic',
        title: 'Classic',
        price: 299,
        description: ["Basic Ad"]
    };
    beforeEach(()=>{
        wrapper = shallow(<AdShelf key={ad.id} ad={ad} addToCart={() => {}}/>)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains header - AdPackage', () => {
        expect(wrapper.find(AdPackage).length).toEqual(1);
    });
    it('+++ contains a input initial value is 1 - AdPackage', () => {
        expect(wrapper.find('input').at(0).prop('value')).toEqual(1);
    });
    it('+++ Component calls addtoCart when buy is clicked', () => {
      const addtoCart = jest.fn();
      const wrapper = shallow(<AdShelf key={ad.id} ad={ad} addToCart={addtoCart}/>)

      const p = wrapper.find('button');
      p.simulate('click');
      expect(addtoCart).toBeCalledWith(ad, 1);
    });
});

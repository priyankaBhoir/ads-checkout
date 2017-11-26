import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import AdPackage from '../src/app/components/AdPackage'

// Snapshot for Home React Component
describe('Ad --- Snapshot',()=>{
    it('+++capturing Snapshot of AdPackage', () => {
        const renderedValue =  renderer.create(<AdPackage id="classic"
            title="Classic"
            price={299}
            description={["first", "second"]} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
///*******************************************************************************************************
describe('Shallow Render REACT COMPONENTS :: Ad',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<AdPackage id="classic"
            title="Classic"
            price={299}
            description={['first', 'second']} /> )
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains header - h5', () => {
        expect(wrapper.contains(<h5 className="center">Classic</h5>)).toBe(true)
    });
    it('+++ header value is title given in props', () => {
        expect(wrapper.find('h5').get(0).props.children).toBe("Classic")
    });
    it('+++ Ad blocks displays price for ad', () => {
        expect(wrapper.find('.ad-price').at(0)
                .equals(<div className="ad-price"> $ 299 </div>))
                .toBe(true)
    });
    
});

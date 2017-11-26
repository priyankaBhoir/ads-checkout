import ads from '../src/app/apis/ads';

import Dispatcher from '../src/app/dispatcher/Dispatcher';
import AppConstants from '../src/app/constants/Constants';
import CartStore from '../src/app/stores/CartStore';


describe('Test store:: CartStore', () => {
  let classicAd = ads.Ads[0];
  let standoutAd = ads.Ads[1];
  let premium = ads.Ads[2];

  beforeEach(function() {
    Dispatcher.dispatch({
      type: AppConstants.ACTION_CONSTANT.INIT_CART,
    });

  })

	it('+++ Store inlialize with empty array', () => {
			// dispatch action ( store is listening for action )
			
			let data = CartStore.currentState();
			// assertions
			expect(data).toEqual({
        products: {},
        customerName: "default"
      });
	});

	it('+++ cart should add items to cart', () => {
      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: classicAd,
        quantity: 3
      });
			let data = CartStore.currentState();
			expect(data.products[classicAd.id].quantity).toEqual(3);
	});

  it('+++ cart should total should be correct', () => {
      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: classicAd,
        quantity: 1
      });

      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: standoutAd,
        quantity: 1
      });

      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: premium,
        quantity: 1
      });

      let data = CartStore.getTotalPrice();
      expect(data.actualPrice).toEqual(987.97);
  });

  it('+++ cart should total should be correct', () => {
      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: classicAd,
        quantity: 3
      });

      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
        ad: premium,
        quantity: 1
      });

      Dispatcher.dispatch({
        type: AppConstants.ACTION_CONSTANT.UPDATE_CUSTOMER_NAME,
        name: 'uniliver'
      });

      let data = CartStore.getTotalPrice();
      expect(data.actualPrice).toEqual(1204.96);
      expect(data.discountPrice).toEqual(934.97);
  });
	
})
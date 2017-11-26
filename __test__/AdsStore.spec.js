import Dispatcher from '../src/app/dispatcher/Dispatcher';
import AppConstants from '../src/app/constants/Constants';
import AdsStore from '../src/app/stores/AdsStore';



describe('Test store:: AdsStore', () => {

	it('+++ Store inlialize with empty array', () => {
			// dispatch action ( store is listening for action )
			
			let data = AdsStore.currentState();
			// assertions
			expect(data).toEqual([]);
	});

	it('+++ Store should listen for the actions', () => {
			Dispatcher.dispatch({
            type: AppConstants.API_CONSTANT.LOAD_DATA,
            data: [{
              id: 'classic',
              title: 'Classic',
              price: 299,
              description: ["Basic Ad"]
          }]
        });
			let data = AdsStore.currentState();
			// assertions
			expect(data.length).toEqual(1);
		});
	
})
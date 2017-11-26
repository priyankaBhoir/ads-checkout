'use strict'

import dispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import { createStore } from './Store';
import Constants from '../constants/Constants';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = Constants;

let _allAds = [];

const AdsStore = createStore ({
	currentState () {
		return _allAds;
	}
});

function updateAds (data) {
	_allAds = data;
}

AdsStore.dispatchToken = dispatcher.register (action => {

	switch (action.type) {
		case API_CONSTANT.LOAD_DATA:
			updateAds(action.data);
			AdsStore.emitChange(EVENT_CONSTANT.ADS_LOADED);
			break;
	}
});

export default AdsStore;
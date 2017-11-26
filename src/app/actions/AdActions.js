'use strict'

import AppDispatcher from '../dispatcher/Dispatcher';
import * as AdsApi from '../apis/AdsApi';
import AppConstants from '../constants/Constants';

export function loadAllAds() {
  AdsApi.loadAds();
}

export function AdsLoaded(data) {
  AppDispatcher.dispatch({
    type: AppConstants.API_CONSTANT.LOAD_DATA,
    data: data
  });
}
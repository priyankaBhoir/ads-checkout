'use strict'

import AppDispatcher from '../dispatcher/Dispatcher';
import AppConstants from '../constants/Constants';

export function addToCart(ad, quantity) {
  AppDispatcher.dispatch({
    type: AppConstants.ACTION_CONSTANT.ADD_TO_CART,
    ad,
    quantity
  });
}

export function setCustomerName(name) {
  AppDispatcher.dispatch({
    type: AppConstants.ACTION_CONSTANT.UPDATE_CUSTOMER_NAME,
    name
  });
}


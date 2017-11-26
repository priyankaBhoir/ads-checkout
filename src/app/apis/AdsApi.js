import ads from './ads';
import {AdsLoaded} from '../actions/AdActions';


export function loadAds() {
  setTimeout(() => AdsLoaded(ads.Ads), 200)
  
}
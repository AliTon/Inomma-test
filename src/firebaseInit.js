import firebase from 'firebase';
import { fbConfig } from './constants';

function initConfigs(store) {
  const rrfConfig = {
    userProfile: 'users'
  };
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
  };

  firebase.initializeApp(fbConfig);

  return rrfProps;
}

export default initConfigs;

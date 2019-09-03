import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import schoolApp from './reducers/index';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, schoolApp);

export default () => {
  let store = createStore(persistedReducer)
  store.subscribe(() => 
    console.log(store.getState())
  );
  let persistor = persistStore(store)
  return { store, persistor }
};

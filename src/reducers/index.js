import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import schools from './schools';

const schoolApp = combineReducers({
    schools,
    form: fromReducer
});

export default schoolApp;
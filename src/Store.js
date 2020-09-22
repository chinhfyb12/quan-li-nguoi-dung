import AddUserReducer from './reducers/addUserReducer';
import DeleteUserReducer from './reducers/deleteUserReducer';
import EditUserReducer from './reducers/editUserReducer';
import RangeUserReducer from './reducers/rangeUserReducer';
import SearchUserReducer from './reducers/searchUserReducer';
import StatusAddReducer from './reducers/statusAddReducer';
import StatusEditReducer from './reducers/statusEditReducer';
import dataUserFirebase from './firebase';

const redux = require('redux');

const allReducers = redux.combineReducers({
    addUser: AddUserReducer,
    deleteUser: DeleteUserReducer,
    editUser: EditUserReducer,
    rangeUser: RangeUserReducer,
    searchUser: SearchUserReducer,
    statusAdd: StatusAddReducer,
    statusEdit: StatusEditReducer
})

const store = redux.createStore(allReducers);
store.subscribe(function () {
    if(store.getState().addUser.dataUserItem) {
        dataUserFirebase.push(store.getState().addUser.dataUserItem)
    }
    if(store.getState().deleteUser.deleteUser) {
        dataUserFirebase.child(store.getState().deleteUser.deleteUser).remove()
    }
})

export default store;
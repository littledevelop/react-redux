import {legacy_createStore as createStore  ,combineReducers} from  'redux';
import userReducer from './reducers/userReducer';
import studentReducer from './reducers/studentReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const mainReducer = combineReducers({
    user:userReducer,
    student:studentReducer
})

const commonData = {
    user:{
        items:[
            {
                id:1,name:'demo',email:'demo@gmail.com',phone:'9985963214'
            },
            {
                id:2,name:'test',email:'test@gmail.com',phone:'8824675152'
            }
        ]
    },
    student:{
        studentId:123,
        marks:90
    }
}

const store = createStore(mainReducer,commonData,composeWithDevTools())
export default store
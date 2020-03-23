import React from 'react'
import App from './App';
import {Provider} from 'react-redux';
import { createStore ,applyMiddleware ,compose ,combineReducers } from 'redux';
import countReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';
class Index extends React.Component {
    handleMain=_=>{
        this.props.history.push('/')
    }
    render(){
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const rootReducer=combineReducers({
            ctr:countReducer,   
            res:resultReducer
        })
        const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
        return (
            <div>
                <Provider store={store}><App /></Provider>
                <button onClick={this.handleMain} className="btn btn-dark btn-sm mt-5">Switch to Main</button>
            </div>
        )
    }
}
export default Index;

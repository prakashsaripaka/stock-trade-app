import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
//import {Provider} from "react-redux";
//import Store from './store';
//import registerServiceWorker from './registerServiceWorker';



//window._initialState_ = initialState;

/*class ReduxedApp  extends React.Component{
    render() {
        return (
            <div><p>hi</p></div>
        )
    }
}*/

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

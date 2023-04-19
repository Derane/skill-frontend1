import React from 'react';
import { Provider } from 'react-redux';
import NewBook from './containers/NewBook';
import {store} from "../../app";

export default (props => (
    <Provider store={store}>
        <NewBook {...props} />
    </Provider>
));

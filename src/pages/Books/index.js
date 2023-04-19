import React from 'react';
import { Provider } from 'react-redux';
import withAuthorities from 'decorators/withAuthorities';
import Books from './containers/Books';
import {store} from "../../app";

export default withAuthorities(props => (
    <Provider store={store}>
        <Books {...props} />
    </Provider>
));

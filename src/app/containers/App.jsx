import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route, useParams,
} from 'react-router-dom';
import IntlProvider from 'components/IntlProvider';
import PageBooks from 'pageProviders/Books';
import PageNewBook from 'pageProviders/NewBook';
import Header from 'components/Header';
import * as PAGES from 'constants/pages';
import './app.css';
import {
  fetchUser,
} from '../actions/user';

const App = () => {
  const [state, setState] = useState({
    componentDidMount: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    setState(prevState => ({
      ...prevState,
      componentDidMount: true,
    }));
  }, []);

  // let { slug } = useParams();

  return ( <div className="className">
    <BrowserRouter>
      <IntlProvider>
        <Header />
        {state.componentDidMount && (
            <Switch>
              <Route path={`/${PAGES.NEW_BOOK}`}>
                <PageNewBook />
              </Route>
              {/*<Route path={`/${PAGES.NEW_BOOK}/:slug`}>*/}
              {/*  <PageNewBook bookId={slug} />*/}
              {/*</Route>*/}
              <Route path={`/${PAGES.BOOKS}`}>
                <PageBooks />
              </Route>
              <Redirect from="*" to={`/${PAGES.INITIAL}`} />
            </Switch>
        )}
      </IntlProvider>
    </BrowserRouter>
      </div>
  );
};

export default App;

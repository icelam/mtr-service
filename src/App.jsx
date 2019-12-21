/* Dependencies */
import React, {
  lazy,
  Suspense,
  Fragment,
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

/* Global styles */
import GlobalStyle from '@styles/global';
import themes from '@styles/themes';

/* Components */
import Loading from '@components/Loading';

/* Routes */
import routes from '@routes';

/* Pages */
const StatusSummary = lazy(() => import(/* webpackChunkName: 'StatusSummary' */ '@containers/StatusSummaryContainer'));
const Disclaimer = lazy(() => import(/* webpackChunkName: 'Disclaimer' */ '@pages/Disclaimer'));

const browserHistory = createBrowserHistory();

// Execute when user navigates between routes
const onRouteChange = (history) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });
};

onRouteChange(browserHistory);

const App = ({
  fetchStatus,
  lineCount,
  serviceNormal,
  serviceEnded
}) => {
  const [themeColor, setThemeColor] = useState('grey');

  useEffect(() => {
    fetchStatus === 'success' && lineCount > 0 && !serviceEnded
      ? serviceNormal
        ? setThemeColor('green')
        : setThemeColor('red')
      : setThemeColor('grey');
  }, [fetchStatus, lineCount, serviceNormal, serviceEnded]);

  return (
    <div id="app">
      <Helmet>
        <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/favicon-${themeColor}.ico`} />
      </Helmet>
      <ThemeProvider theme={themes[themeColor]}>
        <Fragment>
          <GlobalStyle />
          <Router history={browserHistory}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path={routes.home} component={StatusSummary} />
                <Route path={routes.disclaimer} component={Disclaimer} />
                <Route component={StatusSummary} />
              </Switch>
            </Suspense>
          </Router>
        </Fragment>
      </ThemeProvider>
    </div>
  );
};

App.propTypes = {
  fetchStatus: PropTypes.oneOf(['success', 'failed']),
  lineCount: PropTypes.number.isRequired,
  serviceNormal: PropTypes.bool.isRequired,
  serviceEnded: PropTypes.bool.isRequired
};

App.defaultProps = {
  fetchStatus: undefined
};

export default App;

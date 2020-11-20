import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { ThemeProvider } from '@material-ui/core/styles';

// import { Provider } from 'react-redux';
// import store from './redux/store';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';
import { Container } from '@material-ui/core';
import { theme } from './styles/theme';
import Appointment from './pages/Appointment';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Container>
			<Router>
				<Switch>
					<Route exact path={['/', '/homepage']} component={Homepage} />
					<Route exact path="/appointment" component={Appointment} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact component={NotFoundPage} />
				</Switch>
			</Router>
		</Container>
	</ThemeProvider>,
	document.getElementById('root')
);

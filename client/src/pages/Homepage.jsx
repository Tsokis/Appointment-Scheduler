import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FancyButton from '../components/FancyButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: 500,
	},
});

export default function Homepage() {
	const classes = useStyles();

	return (
		<Box align="center">
			<Typography align="center" variant="h2" gutterBottom>
				Appointment Scheduler
			</Typography>
			<Link to={'/appointment'} style={{ textDecoration: 'none' }}>
				<FancyButton>RESERVE NOW!</FancyButton>
			</Link>
		</Box>
	);
}

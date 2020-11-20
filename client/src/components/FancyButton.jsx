import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 50,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 40px',
		boxShadow: '5px 5px 15px 5px rgba(255, 105, 135, .3)',
	},
};

function FancyButton(props) {
	return (
		<Button
			variant="contained"
			className={props.classes.button}
			style={{ margin: '2rem' }}
		>
			{props.children ? props.children : 'class names'}
		</Button>
	);
}

FancyButton.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FancyButton);

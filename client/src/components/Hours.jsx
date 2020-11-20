import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';

const styles = {
	hour: {
		background: '#2196f3',
		borderRadius: 50,
		border: 0,
		color: 'white',
		padding: '.5rem 1rem ',
		margin: '.8rem .5rem',
		// boxShadow: '1px 1px 3px 1px rgb(200,200,200)',
		textTransform: 'none',
	},
};

const arr = [
	'08:00',
	'08:30',
	'09:00',
	'09:30',
	'10:00',
	'10:30',
	'11:00',
	'11:30',
	'12:00',
	'12:30',
	'13:00',
	'13:30',
	'14:00',
	'14:30',
	'15:00',
	'15:30',
	'16:00',
	'16:30',
	'17:00',
	'17:30',
];

const Hour = ({ time, timeSelection }) => {
	return (
		<Button
			variant="contained"
			style={{
				...styles.hour,
				backgroundColor: timeSelection === time ? '#ff1744' : '#2196f3',
			}}
		>
			{time}
		</Button>
	);
};

const Hours = ({ timeSelection, onChangeTime }) => {
	useEffect(() => {
		console.log(new Date());
	}, []);

	return (
		<Grid sm={5} style={{ alignSelf: 'center' }}>
			<div style={{ margin: '0 1rem', textAlign: 'center' }}>
				<div>
					{arr.map((x) => (
						<>
							<label onClick={() => onChangeTime(x)}>
								<input
									type="radio"
									id={x}
									name={x}
									value={x}
									style={{ display: 'none' }}
									checked={timeSelection == x}
								/>
								<Hour time={x} timeSelection={timeSelection} />
							</label>
						</>
					))}
				</div>
			</div>
		</Grid>
	);
};

export default Hours;

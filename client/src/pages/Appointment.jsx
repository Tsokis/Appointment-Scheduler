import 'date-fns';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	TimePicker,
	DatePicker,
} from '@material-ui/pickers';
import {
	Box,
	Button as MuiButton,
	Container,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';
import Hours from '../components/Hours';

const useStyles = makeStyles((theme) => ({
	form: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
}));

export default function Appointment() {
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const Button = styled(MuiButton)(spacing);
	const classes = useStyles();
	const [timeSelection, setTimeSelection] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleSubmit = () => {
		console.log(selectedDate.toLocaleDateString());
		console.log(timeSelection);
	};

	function onChangeTime(value) {
		setTimeSelection(value);
	}

	useEffect(() => {
		console.log(selectedDate);
	}, [selectedDate]);

	return (
		<div>
			<Container maxWidth="md">
				<Box m={5}>
					<Typography align="center" gutterBottom variant="h4">
						Schedule the appointment
					</Typography>
				</Box>
				<Box my={5}>
					<form className={classes.form} noValidate autoComplete="off">
						<Container maxWidth="sm">
							<Grid
								container
								spacing={2}
								justify="center"
								alignItems="center"
								wrap
							>
								<Grid
									item
									xs={12}
									sm={6}
									direction="row"
									justify="center"
									alignItems="center"
								>
									<TextField
										id="standard-basic"
										label="Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									direction="row"
									justify="center"
									alignItems="center"
								>
									<TextField
										id="standard-basic"
										label="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									direction="row"
									justify="center"
									alignItems="center"
								>
									<TextField
										id="outlined-multiline-static"
										label="Description"
										multiline
										rows={4}
										variant="outlined"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</Grid>
							</Grid>
						</Container>
					</form>
				</Box>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Box display="flex" flexWrap="wrap" justifyContent="center">
						<div>
							<Paper style={{ width: 'fit-content', display: 'inline-block' }}>
								<DatePicker
									autoOk
									variant="static"
									openTo="date"
									value={selectedDate}
									onChange={handleDateChange}
								/>
							</Paper>
						</div>
						<Hours timeSelection={timeSelection} onChangeTime={onChangeTime} />
					</Box>
				</MuiPickersUtilsProvider>
				<Box m={5} align="right" fontWeight="fontWeightBold">
					<Link to={'/'}>
						<Button mx={2} color="secondary">
							Back
						</Button>
					</Link>
					<Link>
						<Button variant="contained" color="primary" onClick={handleSubmit}>
							Submit
						</Button>
					</Link>
				</Box>
			</Container>
		</div>
	);
}

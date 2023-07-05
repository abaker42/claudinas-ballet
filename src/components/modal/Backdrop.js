import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
	const cssClasses = [
		classes.Backdrop,
		props.show ? classes.BackdropOpen : classes.BackdropClosed,
	];
	return <div className={cssClasses.join(' ')}>Backdrop</div>;
};

export default Backdrop;

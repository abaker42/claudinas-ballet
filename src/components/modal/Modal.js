import React from "react";
import classes from "./Modal.module.css";
import CB from "../../photos/CBC.svg";

const Modal = (props) => {
	const cssClasses = [
		classes.Modal,
		props.show ? classes.ModalOpen : classes.ModalClosed,
	];
	return (
		<div className={cssClasses.join(" ")}>
			<img src={CB} alt='claudinas ballet dance author' className={classes.welcome} />
			<h1>Welcome!</h1>
			<button className='Button' onClick={props.closed}>
				Dismiss
			</button>
		</div>
	);
};

export default Modal;

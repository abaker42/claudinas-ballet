import React, { Fragment } from 'react';
import useInput from '../../hooks/use-input';
import classes from './ContactMe.module.css';
import { send } from 'emailjs-com';

const ContactMe = (props) => {
	const {
		value: nameInput,
		isValid: nameIsValid,
		hasError: nameHasError,
		handleInputChange: handleNameChange,
		handleInputBlur: handleNameBlur,
		reset: resetName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: messageInput,
		isValid: messageIsValid,
		hasError: messageHasError,
		handleInputChange: handleMessageChange,
		handleInputBlur: handleMessageBlur,
		reset: resetMessage,
	} = useInput((value) => value.trim() !== '');

	const {
		value: emailInput,
		isValid: emailIsValid,
		hasError: emailHasError,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		reset: resetEmail,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;

	if (nameIsValid && messageIsValid && emailIsValid) {
		formIsValid = true;
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (formIsValid) {
			send(
				'contact_claudina',
				'template_1ek157a',
				{
					from_name: nameInput,
					email: emailInput,
					message: messageInput,
					reply_to:
						'Thank you for your question we will get back as soon a possible.',
				},
				'ylNLeGYRK11DZFZOE'
			)
				.then((res) => {
					console.log('Success! ' + res.text);
				})
				.catch((err) => {
					console.log('Failed! ' + err);
				});

			alert(
				'Thank you ' + nameInput + '. Please allow up to 24 hrs for a response.'
			);

			resetName();
			resetMessage();
			resetEmail();
		}
	};

	const fNameClass = nameHasError ? 'form-control invalid' : 'form-control';
	const messageClass = messageHasError
		? 'form-control invalid'
		: 'form-control';
	const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<Fragment>
			<div className={classes.card1}>
				<form onSubmit={handleFormSubmit}>
					<div className='control-group1'>
						<div className={fNameClass}>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								onChange={handleNameChange}
								onBlur={handleNameBlur}
								value={nameInput}
							/>
							{nameHasError && <p className='error-text'>Name not valid</p>}
						</div>
						<div className={emailClass}>
							<label htmlFor='name'>Email Address</label>
							<input
								type='email'
								id='name'
								onChange={handleEmailChange}
								onBlur={handleEmailBlur}
								value={emailInput}
							/>
							{emailHasError && <p className='error-text'>Email not valid</p>}
						</div>
						<div className={messageClass}>
							<label htmlFor='name'>Message</label>
							<textarea
								type='text'
								id='name'
								onChange={handleMessageChange}
								onBlur={handleMessageBlur}
								value={messageInput}
							/>
							{messageHasError && (
								<p className='error-text'>Message cannot be empty</p>
							)}
						</div>
					</div>

					<div className='form-actions'>
						<button disabled={!formIsValid}>Submit</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default ContactMe;

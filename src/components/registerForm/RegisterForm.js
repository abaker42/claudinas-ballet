import useInput from '../../hooks/use-input';

const RegisterForm = (props) => {
	const {
		value: fNameInput,
		isValid: fNameIsValid,
		hasError: fNameHasError,
		handleInputChange: handleFNameChange,
		handleInputBlur: handleFNameBlur,
		reset: resetFName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: lNameInput,
		isValid: lNameIsValid,
		hasError: lNameHasError,
		handleInputChange: handleLNameChange,
		handleInputBlur: handleLNameBlur,
		reset: resetLName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: emailInput,
		isValid: emailIsValid,
		hasError: emailHasError,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		reset: resetEmail,
	} = useInput((value) => value.includes('@'));

	const {
		value: phoneInput,
		isValid: phoneIsValid,
		hasError: phoneHasError,
		handleInputChange: handlePhoneChange,
		handleInputBlur: handlePhoneBlur,
		reset: resetPhone,
	} = useInput((value) => value.trim() !== '');

	let formIsValid = false;

	if (fNameIsValid && lNameIsValid && emailIsValid && phoneIsValid) {
		formIsValid = true;
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (formIsValid) {
			console.log('My First Name: ' + fNameInput);
			console.log('My Last Name: ' + lNameInput);
			console.log('My Email: ' + emailInput);
			console.log('My Phone: ' + phoneInput);

			const url =
				//'https://react-http-30b70-default-rtdb.firebaseio.com/students.json';
				'https://claudina-ballet-default-rtdb.firebaseio.com/dancers.json';

			fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					firstName: fNameInput,
					lastName: lNameInput,
					email: emailInput,
					phone: phoneInput,
				}),
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					} else {
						return res.json().then((data) => {
							console.log(data);
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
			alert('Thank you for registering ' + fNameInput + '!');

			resetFName();
			resetLName();
			resetEmail();
			resetPhone();
		}
	};

	const fNameClass = fNameHasError ? 'form-control invalid' : 'form-control';
	const lNameClass = lNameHasError ? 'form-control invalid' : 'form-control';
	const emailClass = emailHasError ? 'form-control invalid' : 'form-control';
	const phoneClass = phoneHasError ? 'form-control invalid' : 'form-control';

	return (
		<div className='card'>
			<form onSubmit={handleFormSubmit}>
				<div className='control-group'>
					<div className={fNameClass}>
						<label htmlFor='name'>First Name</label>
						<input
							type='text'
							id='name'
							onChange={handleFNameChange}
							onBlur={handleFNameBlur}
							value={fNameInput}
						/>
						{fNameHasError && (
							<p className='error-text'>First Name not valid</p>
						)}
					</div>
					<div className={lNameClass}>
						<label htmlFor='name'>Last Name</label>
						<input
							type='text'
							id='name'
							onChange={handleLNameChange}
							onBlur={handleLNameBlur}
							value={lNameInput}
						/>
						{lNameHasError && <p className='error-text'>Last Name not valid</p>}
					</div>
				</div>
				<div className='control-group'>
					<div className={emailClass}>
						<label htmlFor='name'>E-Mail</label>
						<input
							type='email'
							id='name'
							onChange={handleEmailChange}
							onBlur={handleEmailBlur}
							value={emailInput}
						/>
						{emailHasError && <p className='error-text'>Email not valid</p>}
					</div>
					<div className={phoneClass}>
						<label htmlFor='name'>Phone Number</label>
						<input
							type='tel'
							id='name'
							onChange={handlePhoneChange}
							onBlur={handlePhoneBlur}
							value={phoneInput}
						/>
						{phoneHasError && (
							<p className='error-text'>Phone Number not valid</p>
						)}
					</div>
				</div>
				<div className='form-actions'>
					<button disabled={!formIsValid}>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;

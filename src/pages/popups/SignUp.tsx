import EmailField from '@components/fields/EmailField'
import PhoneField from '@components/fields/PhoneField'
import TextField from '@components/fields/TextField'
import { ArrowIcon } from '@components/icons/ArrowIcon'
import { CheckIcon } from '@components/icons/CheckIcon'
import { RoundUpIcon } from '@components/icons/RoundUpIcon'
import { toastAlert } from '@components/tools'
import { axiosInstance } from '@store/axiosInstance'
import {
	listTraslations,
	setEmail,
	setName,
	setPhone,
	setSignUpOpened,
} from '@store/slices/globalsSlice'
import { AppDispatch, RootState } from '@store/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'

const SignUp = () => {
	const dispatch = useDispatch<AppDispatch>()

	const translations = useSelector(listTraslations)

	const name = useSelector((state: RootState) => state.globals.name)
	const [nameError, setNameError] = useState<boolean>(false)
	const email = useSelector((state: RootState) => state.globals.email)
	const [emailError, setEmailError] = useState<boolean>(false)
	const phone = useSelector((state: RootState) => state.globals.phone)
	const [phoneError, setPhoneError] = useState<boolean>(false)

	const [status, setStatus] = useState<string>('idle')
	const [validateAll, setValidateAll] = useState<boolean>(false)

	const submitHandler = async () => {
		if (
			!phone ||
			!name ||
			name.length < 2 ||
			!email ||
			!validator.isEmail(email)
		) {
			setValidateAll(true)
			return false
		}

		setStatus('process')

		const bodyData = new FormData()
		bodyData.append('request_type', 'signup')
		bodyData.append('name', name)
		bodyData.append('email', email)
		bodyData.append('phone', phone)

		try {
			const response = await axiosInstance.post('/callback.php', bodyData)
			console.log('edit provider response.data', response.data)
			setStatus('success')
			toastAlert('Congrats! Your sign up request has been sent', 'success')
		} catch (err) {
			setStatus('idle')
			toastAlert('Error sending request to the server', 'error')
		}

		setTimeout(() => {
			dispatch(setSignUpOpened(false))
		}, 1000)
	}

	return (
		<form className="move_money__form_user">
			<TextField
				value={name}
				onChange={(value) => dispatch(setName(value))}
				setError={(error) => setNameError(error ? true : false)}
				required
				min={2}
				placeholder="Name"
				check={validateAll}
			/>
			<EmailField
				value={email}
				onChange={(value) => dispatch(setEmail(value))}
				setError={(error) => setEmailError(error ? true : false)}
				required
				placeholder="Email"
				check={validateAll}
			/>
			<PhoneField
				value={phone}
				onChange={(value) => dispatch(setPhone(value))}
				setError={(error) => setPhoneError(error ? true : false)}
				required
				placeholder="Phone"
				check={validateAll}
			/>
			<button
				type="button"
				className="btn btn-blue btn-large btn-fullwidth"
				onClick={submitHandler}
			>
				<span>{translations('SignUpPopupSubmit')}</span>
				{status === 'idle' && <ArrowIcon color="#fff" />}
				{status === 'process' && <RoundUpIcon color="#fff" />}
				{status === 'success' && <CheckIcon color="#fff" />}
			</button>
		</form>
	)
}

export default SignUp

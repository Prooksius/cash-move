import React, { useEffect, useState } from 'react'
import validator from 'validator'
import classNames from 'classNames'

interface EmailFieldProps {
	value: string
	onChange: (value: string) => void
	setError: (error: string) => void
	required?: boolean
	placeholder?: string
	check: boolean
}

const EmailField: React.FC<EmailFieldProps> = ({
	value,
	onChange,
	setError,
	required = false,
	placeholder = '',
	check,
}) => {
	const [nameError, setNameError] = useState<string | null>(null)

	const handleValue = (email: string) => {
		onChange(email)
		if (required && !email) {
			return sendError('Email required')
		}
		if (!validator.isEmail(email)) {
			return sendError('Email invalid')
		}
		return sendError('')
	}

	const sendError = (error: string) => {
		setNameError(error)
		setError(error)
	}

	useEffect(() => {
		if (check) {
			handleValue(value)
		}
	}, [check])

	return (
		<div
			className={classNames('form-field', {
				error: nameError,
				valid: nameError === '',
			})}
		>
			<input
				type="email"
				className="form-input"
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleValue(e.target.value)}
			/>
			<span className="error">{nameError}</span>
		</div>
	)
}

export default EmailField

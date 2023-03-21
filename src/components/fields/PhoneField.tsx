import React, { useEffect, useState } from 'react'
import classNames from 'classNames'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

interface PhoneFieldProps {
	value: string
	onChange: (value: string) => void
	setError: (error: string) => void
	required?: boolean
	placeholder?: string
	check: boolean
}

const PhoneField: React.FC<PhoneFieldProps> = ({
	value,
	onChange,
	setError,
	required = false,
	placeholder = '',
	check,
}) => {
	const [nameError, setNameError] = useState<string | null>(null)

	const handlePhone = (phone: string) => {
		onChange(phone ? phone : '')
		if (required && !phone) {
			return sendError('Phone required')
		}
		if (!isValidPhoneNumber(phone)) {
			return sendError('Invalid phone number')
		}
		return sendError('')
	}

	const sendError = (error: string) => {
		setNameError(error)
		setError(error)
	}

	useEffect(() => {
		if (check) {
			handlePhone(value)
		}
	}, [check])

	return (
		<div
			className={classNames('form-field', {
				error: nameError,
				valid: nameError === '',
			})}
		>
			<PhoneInput
				placeholder={placeholder}
				international
				defaultCountry="RU"
				value={value}
				onChange={handlePhone}
			/>
			<span className="error">{nameError}</span>
		</div>
	)
}

export default PhoneField

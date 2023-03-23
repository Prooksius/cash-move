import React, { useEffect, useState } from 'react'
import classNames from 'classNames'
import PhoneInput, {
	Country,
	isValidPhoneNumber,
} from 'react-phone-number-input'
import { translations } from '@store/translations'
import { listLang, listTraslations } from '@store/slices/globalsSlice'
import { useSelector } from 'react-redux'

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
	const translations = useSelector(listTraslations)
	const lang = useSelector(listLang)
	const [nameError, setNameError] = useState<string | null>(null)

	const handlePhone = (phone: string) => {
		onChange(phone ? phone : '')
		if (required && !phone) {
			return sendError(translations('FieldErrorPhoneRequired'))
		}
		if (!isValidPhoneNumber(phone)) {
			return sendError(translations('FieldErrorPhoneError'))
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
				defaultCountry={lang.toUpperCase() as Country}
				value={value}
				onChange={handlePhone}
			/>
			<span className="error">{nameError}</span>
		</div>
	)
}

export default PhoneField

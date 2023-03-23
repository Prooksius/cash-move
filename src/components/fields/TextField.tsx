import React, { useEffect, useState } from 'react'
import classNames from 'classNames'
import { useSelector } from 'react-redux'
import { listTraslations } from '@store/slices/globalsSlice'

interface TextFieldProps {
	value: string
	onChange: (value: string) => void
	setError: (error: string) => void
	min?: number
	max?: number
	required?: boolean
	placeholder?: string
	check: boolean
}

const TextField: React.FC<TextFieldProps> = ({
	value,
	onChange,
	setError,
	min = 0,
	max = 2000,
	required = false,
	placeholder = '',
	check,
}) => {
	const translations = useSelector(listTraslations)
	const [nameError, setNameError] = useState<string | null>(null)

	const handleName = (name: string) => {
		onChange(name)
		if (required && !name) {
			return sendError(translations('FieldErrorRequired'))
		}
		if (name.length < min) {
			return sendError(translations('FieldErrorTooShort'))
		}
		if (name.length > max) {
			return sendError(translations('FieldErrorTooLong'))
		}
		return sendError('')
	}

	const sendError = (error: string) => {
		setNameError(error)
		setError(error)
	}

	useEffect(() => {
		if (check) {
			handleName(value)
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
				type="text"
				className="form-input"
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleName(e.target.value)}
			/>
			<span className="error">{nameError}</span>
		</div>
	)
}

export default TextField

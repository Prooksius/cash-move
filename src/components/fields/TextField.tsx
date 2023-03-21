import React, { useEffect, useState } from 'react'
import classNames from 'classNames'

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
	const [nameError, setNameError] = useState<string | null>(null)

	const handleName = (name: string) => {
		onChange(name)
		if (required && !name) {
			return sendError('Field required')
		}
		if (name.length < min) {
			return sendError('Field too short')
		}
		if (name.length > max) {
			return sendError('Field too long')
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

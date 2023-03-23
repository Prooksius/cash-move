import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
	listTraslations,
	setAgreement,
	setCalcStep,
	setEmail,
	setName,
	setPhone,
} from '@store/slices/globalsSlice'
import TextField from '@components/fields/TextField'
import EmailField from '@components/fields/EmailField'
import PhoneField from '@components/fields/PhoneField'
import ProtectionBlock from '../ProtectionBlock'
import { ArrowIcon } from '@components/icons/ArrowIcon'
import { toastAlert } from '@components/tools'
import validator from 'validator'
import gsap from 'gsap'
import { RoundUpIcon } from '@components/icons/RoundUpIcon'
import { CheckIcon } from '@components/icons/CheckIcon'
import { axiosInstance } from '@store/axiosInstance'

const CalculatorStep3 = () => {
	const dispatch = useDispatch<AppDispatch>()

	const translations = useSelector(listTraslations)

	const stepTL = gsap.timeline()
	const stepBackTL = gsap.timeline()

	const agreement = useSelector((state: RootState) => state.globals.agreement)
	const name = useSelector((state: RootState) => state.globals.name)
	const [nameError, setNameError] = useState<boolean>(false)
	const email = useSelector((state: RootState) => state.globals.email)
	const [emailError, setEmailError] = useState<boolean>(false)
	const phone = useSelector((state: RootState) => state.globals.phone)
	const [phoneError, setPhoneError] = useState<boolean>(false)

	const value_you_give = useSelector(
		(state: RootState) => state.globals.finalGiveSum
	)
	const give_in_cash = useSelector(
		(state: RootState) => state.globals.giveInCash
	)
	const you_give_in_currency = useSelector(
		(state: RootState) => state.globals.giveCurrency.code
	)
	const type_give_payment1 = useSelector(
		(state: RootState) => state.globals.giveBankTransferType
	)
	const type_give_payment2 = useSelector(
		(state: RootState) => state.globals.giveCashTransferType
	)
	const give_country = useSelector(
		(state: RootState) => state.globals.giveCountry?.name
	)
	const give_city = useSelector(
		(state: RootState) => state.globals.cashGiveCity
	)
	const value_you_get = useSelector((state: RootState) => state.globals.getSum)
	const you_get_in_currency = useSelector(
		(state: RootState) => state.globals.getCurrency.code
	)
	const get_in_cash = useSelector((state: RootState) => state.globals.getInCash)
	const type_get_payment1 = useSelector(
		(state: RootState) => state.globals.getBankTransferType
	)
	const type_get_payment2 = useSelector(
		(state: RootState) => state.globals.getCashTransferType
	)
	const get_country = useSelector(
		(state: RootState) => state.globals.getCountry?.name
	)
	const get_city = useSelector((state: RootState) => state.globals.cashGetCity)

	const [status, setStatus] = useState<string>('idle')
	const [validateAll, setValidateAll] = useState<boolean>(false)

	const handleBottomButton = async () => {
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
		bodyData.append('request_type', 'movemoney')
		bodyData.append('name', name)
		bodyData.append('email', email)
		bodyData.append('phone', phone)
		bodyData.append('value_you_give', value_you_give.toString())
		bodyData.append('give_in_cash', give_in_cash ? 'Да' : 'Нет')
		bodyData.append('you_give_in_currency', you_give_in_currency)
		bodyData.append(
			'type_give_payment',
			give_in_cash ? type_give_payment2 : type_give_payment1
		)
		bodyData.append('give_country', give_country ? give_country : '')
		bodyData.append('give_city', give_city)
		bodyData.append('value_you_get', value_you_get)
		bodyData.append('you_get_in_currency', you_get_in_currency)
		bodyData.append('get_in_cash', get_in_cash ? 'Да' : 'Нет')
		bodyData.append(
			'type_get_payment',
			get_in_cash ? type_get_payment2 : type_get_payment1
		)
		bodyData.append('get_country', get_country ? get_country : '')
		bodyData.append('get_city', get_city)

		try {
			const response = await axiosInstance.post('/callback.php', bodyData)
			console.log('edit provider response.data', response.data)
			setStatus('success')
			toastAlert('Congrats! Your request has been sent', 'success')
		} catch (err) {
			setStatus('idle')
			toastAlert('Error sending request to the server', 'error')
		}

		setTimeout(() => {
			processNextStep(0)
		}, 800)
	}

	const handleBackButton = () => {
		processNextStep(2)
	}

	const title_block = '.calculator-step_title'
	const footer_block = '.first-block__footer'
	const center_block = '.calculator-step__content'

	const processNextStep = (page: number) => {
		stepTL
			.to(title_block, {
				duration: 0.25,
				ease: 'power1.in',
				opacity: 0,
				x: -200,
			})
			.to(
				center_block,
				{
					duration: 0.25,
					ease: 'power1.in',
					opacity: 0,
					x: -200,
				},
				0.125
			)
			.to(
				footer_block,
				{
					duration: 0.25,
					ease: 'power1.in',
					opacity: 0,
					x: -200,
					onComplete: () => {
						console.log('finish')
						dispatch(setCalcStep(page))
					},
				},
				0.25
			)
			.play()
	}

	const processThisStep = () => {
		stepBackTL
			.set(title_block, {
				opacity: 0,
				x: -200,
			})
			.set(footer_block, {
				opacity: 0,
				x: -200,
			})
			.set(center_block, {
				opacity: 0,
				x: -200,
			})
			.to(title_block, {
				duration: 0.25,
				ease: 'power1.out',
				opacity: 1,
				x: 0,
			})
			.to(
				center_block,
				{
					duration: 0.25,
					ease: 'power1.out',
					opacity: 1,
					x: 0,
				},
				0.125
			)
			.to(
				footer_block,
				{
					duration: 0.25,
					ease: 'power1.out',
					opacity: 1,
					x: 0,
				},
				0.25
			)
			.play()
	}

	useEffect(() => {
		processThisStep()
		return () => {
			if (stepTL) {
				stepTL.kill()
			}
			if (stepBackTL) {
				stepBackTL.kill()
			}
		}
	}, [])

	return (
		<div className="calculator-first-area">
			<div className="container">
				<div className="calculator-step calculator-step3">
					<h2
						className="calculator-step_title"
						style={{ opacity: 0 }}
						onClick={() => handleBackButton()}
					>
						<svg
							width="16"
							height="28"
							viewBox="0 0 16 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14 26L2 14L14 2"
								stroke="black"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>{translations('CalcBlockCompleteRequest')}</span>
					</h2>
					<div className="calculator-step__content" style={{ opacity: 0 }}>
						<div className="move_money__form_user">
							<div className="move_money__form_user__row_1">
								<TextField
									value={name}
									onChange={(value) => dispatch(setName(value))}
									setError={(error) => setNameError(error ? true : false)}
									required
									min={2}
									placeholder={translations('FieldName')}
									check={validateAll}
								/>
							</div>
							<div className="move_money__form_user__row_2">
								<EmailField
									value={email}
									onChange={(value) => dispatch(setEmail(value))}
									setError={(error) => setEmailError(error ? true : false)}
									required
									placeholder={translations('FieldEmail')}
									check={validateAll}
								/>
								<PhoneField
									value={phone}
									onChange={(value) => dispatch(setPhone(value))}
									setError={(error) => setPhoneError(error ? true : false)}
									required
									placeholder={translations('FieldPhone')}
									check={validateAll}
								/>
							</div>
							<div className="move_money__form_user__row_3">
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										checked={agreement}
										id="move_money__agreement"
										onChange={() => dispatch(setAgreement(true))}
									/>
									<label
										className="form-check-label"
										htmlFor="move_money__agreement"
									>
										{translations('CalcBlockTerms')}
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="first-block__footer" style={{ opacity: 0 }}>
				<div className="container">
					<div className="calculator-block__security">
						<ProtectionBlock />
						<div className="calculator-block__totalsum">
							<button
								type="button"
								disabled={nameError || emailError || phoneError}
								className="btn btn-blue btn-large btn-large btn-fullwidth"
								onClick={() => handleBottomButton()}
							>
								<span>{translations('CalcBlockConfirm')}</span>
								{status === 'idle' && <ArrowIcon color="#fff" />}
								{status === 'process' && <RoundUpIcon color="#fff" />}
								{status === 'success' && <CheckIcon color="#fff" />}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalculatorStep3

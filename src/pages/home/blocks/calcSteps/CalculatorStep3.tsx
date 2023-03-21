import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
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

const CalculatorStep3 = () => {
	const dispatch = useDispatch<AppDispatch>()

	const stepTL = gsap.timeline()
	const stepBackTL = gsap.timeline()

	const agreement = useSelector((state: RootState) => state.globals.agreement)
	const name = useSelector((state: RootState) => state.globals.name)
	const [nameError, setNameError] = useState<boolean>(false)
	const email = useSelector((state: RootState) => state.globals.email)
	const [emailError, setEmailError] = useState<boolean>(false)
	const phone = useSelector((state: RootState) => state.globals.phone)
	const [phoneError, setPhoneError] = useState<boolean>(false)

	const [status, setStatus] = useState<string>('idle')
	const [validateAll, setValidateAll] = useState<boolean>(false)

	const handleBottomButton = () => {
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
		setTimeout(() => {
			setStatus('success')
			setTimeout(() => {
				toastAlert('Congrats! Your request has been sent', 'success')
			}, 1000)
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
						<span>Complete request</span>
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
									placeholder="Name"
									check={validateAll}
								/>
							</div>
							<div className="move_money__form_user__row_2">
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
										Terms and agreement
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
								<span>Confirm</span>
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

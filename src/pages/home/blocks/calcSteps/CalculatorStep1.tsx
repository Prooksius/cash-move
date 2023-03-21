import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCalcStep,
	setCashGetCity,
	setCashGiveCity,
	setGetBankTransferType,
	setGetCashTransferType,
	setGiveBankTransferType,
	setGiveCashTransferType,
} from '@store/slices/globalsSlice'
import ProtectionBlock from '../ProtectionBlock'
import { ArrowIcon } from '@components/icons/ArrowIcon'
import TextField from '@components/fields/TextField'
import gsap from 'gsap'

const CalculatorStep1 = () => {
	const dispatch = useDispatch<AppDispatch>()

	const stepTL = gsap.timeline()
	const stepBackTL = gsap.timeline()

	const giveSum = useSelector((state: RootState) => state.globals.giveSum)
	const getSum = useSelector((state: RootState) => state.globals.getSum)
	const giveCurrency = useSelector(
		(state: RootState) => state.globals.giveCurrency
	)
	const getCurrency = useSelector(
		(state: RootState) => state.globals.getCurrency
	)
	const giveCountry = useSelector(
		(state: RootState) => state.globals.giveCountry
	)
	const getCountry = useSelector((state: RootState) => state.globals.getCountry)
	const giveBankTransferType = useSelector(
		(state: RootState) => state.globals.giveBankTransferType
	)
	const getBankTransferType = useSelector(
		(state: RootState) => state.globals.getBankTransferType
	)
	const giveCashTransferType = useSelector(
		(state: RootState) => state.globals.giveCashTransferType
	)
	const getCashTransferType = useSelector(
		(state: RootState) => state.globals.getCashTransferType
	)
	const cashGiveCity = useSelector(
		(state: RootState) => state.globals.cashGiveCity
	)
	const cashGetCity = useSelector(
		(state: RootState) => state.globals.cashGetCity
	)

	const [giveCityError, setGiveCityError] = useState<boolean>(false)
	const [getCityError, setGetCityError] = useState<boolean>(false)
	const [validateAll, setValidateAll] = useState<boolean>(false)

	const handleForwardButton = () => {
		if (
			(giveCountry && (!cashGiveCity || cashGiveCity.length < 2)) ||
			(getCountry && (!cashGetCity || cashGetCity.length < 2))
		) {
			setValidateAll(true)
			return false
		}
		processNextStep(2)
	}

	const handleBackButton = () => {
		processNextStep(0)
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
				<div className="calculator-step calculator-step1">
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
						<div className="calculator-row">
							<div className="calculator__part calculator__part-left">
								<div className="calculator__sum">
									<label className="move_money__label">You give</label>
									<div className="big-sum">
										{giveSum} {giveCurrency.code}
									</div>
								</div>
								{!giveCountry && (
									<div className="calculator__transfer">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={giveBankTransferType === 'card'}
												value="card"
												id="move_money__type_give_payment_1"
												onChange={() =>
													dispatch(setGiveBankTransferType('card'))
												}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_give_payment_1"
											>
												To card
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={giveBankTransferType === 'account'}
												value="account"
												id="move_money__type_give_payment_2"
												onChange={() =>
													dispatch(setGiveBankTransferType('account'))
												}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_give_payment_2"
											>
												To account
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={giveBankTransferType === 'sbp'}
												value="sbp"
												id="move_money__type_give_payment_3"
												onChange={() =>
													dispatch(setGiveBankTransferType('sbp'))
												}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_give_payment_3"
											>
												SBP
											</label>
										</div>
									</div>
								)}
								{giveCountry && (
									<div className="calculator__cash">
										<div className="calculator__country">
											<span className={'flag flag-' + giveCountry.code.toLowerCase()}></span>
											<span>{giveCountry.name}</span>
										</div>
										<TextField
											value={cashGiveCity}
											onChange={(value) => dispatch(setCashGiveCity(value))}
											setError={(error) =>
												setGiveCityError(error ? true : false)
											}
											required
											min={2}
											placeholder="City"
											check={validateAll}
										/>
										<div className="calculator__transfer">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													checked={giveCashTransferType === 'office'}
													value="office"
													id="move_money__type_give_delivery_1"
													onChange={() =>
														dispatch(setGiveCashTransferType('office'))
													}
												/>
												<label
													className="form-check-label"
													htmlFor="move_money__type_give_delivery_1"
												>
													Office
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													checked={giveCashTransferType === 'courier'}
													value="courier"
													id="move_money__type_give_delivery_2"
													onChange={() =>
														dispatch(setGiveCashTransferType('courier'))
													}
												/>
												<label
													className="form-check-label"
													htmlFor="move_money__type_give_delivery_2"
												>
													Courier
												</label>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="calculator__arrow-cont">
								<ArrowIcon color="#AFAFAF" />
							</div>
							<div className="calculator__part calculator__part-right">
								<div className="calculator__sum">
									<label className="move_money__label">You get</label>
									<div className="big-sum">
										{getSum} {getCurrency.code}
									</div>
								</div>
								{!getCountry && (
									<div className="calculator__transfer">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={getBankTransferType === 'card'}
												value="card"
												id="move_money__type_get_payment_1"
												onChange={() =>
													dispatch(setGetBankTransferType('card'))
												}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_get_payment_1"
											>
												To card
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={getBankTransferType === 'account'}
												value="account"
												id="move_money__type_get_payment_2"
												onChange={() =>
													dispatch(setGetBankTransferType('account'))
												}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_get_payment_2"
											>
												To account
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												checked={getBankTransferType === 'sbp'}
												value="sbp"
												id="move_money__type_get_payment_3"
												onChange={() => dispatch(setGetBankTransferType('sbp'))}
											/>
											<label
												className="form-check-label"
												htmlFor="move_money__type_get_payment_3"
											>
												SBP
											</label>
										</div>
									</div>
								)}
								{getCountry && (
									<div className="calculator__cash">
										<div className="calculator__country">
											<span className={'flag flag-' + getCountry.code.toLowerCase()}></span>
											<span>{getCountry.name}</span>
										</div>
										<TextField
											value={cashGetCity}
											onChange={(value) => dispatch(setCashGetCity(value))}
											setError={(error) =>
												setGetCityError(error ? true : false)
											}
											required
											min={2}
											placeholder="City"
											check={validateAll}
										/>
										<div className="calculator__transfer">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													checked={getCashTransferType === 'office'}
													value="office"
													id="move_money__type_get_delivery_1"
													onChange={() =>
														dispatch(setGetCashTransferType('office'))
													}
												/>
												<label
													className="form-check-label"
													htmlFor="move_money__type_get_delivery_1"
												>
													Office
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													checked={getCashTransferType === 'courier'}
													value="courier"
													id="move_money__type_get_delivery_2"
													onChange={() =>
														dispatch(setGetCashTransferType('courier'))
													}
												/>
												<label
													className="form-check-label"
													htmlFor="move_money__type_get_delivery_2"
												>
													Courier
												</label>
											</div>
										</div>
									</div>
								)}
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
								className="btn btn-blue btn-large btn-large btn-fullwidth"
								onClick={() => handleForwardButton()}
								disabled={giveCityError || getCityError}
							>
								<span>Next</span>
								<ArrowIcon color="#fff" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalculatorStep1

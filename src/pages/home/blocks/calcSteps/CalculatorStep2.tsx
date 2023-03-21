import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCalcStep,
	setGetSum,
	setTransferDuration,
	TBankTransferType,
	TCashTransferType,
	TTransferDuration,
} from '@store/slices/globalsSlice'
import ProtectionBlock from '../ProtectionBlock'
import { ArrowIcon } from '@components/icons/ArrowIcon'
import gsap from 'gsap'

type TBankTransferLabels = Record<TBankTransferType, string>
type TCashTransferLabels = Record<TCashTransferType, string>

const btLabels: TBankTransferLabels = {
	card: 'to card',
	account: 'to account',
	sbp: 'to SPB',
}
const ctLabels: TCashTransferLabels = {
	office: 'office',
	courier: 'courier',
}

const CalculatorStep2 = () => {
	const dispatch = useDispatch<AppDispatch>()

	const stepTL = gsap.timeline()
	const stepBackTL = gsap.timeline()

	const finalGiveSum = useSelector(
		(state: RootState) => state.globals.finalGiveSum
	)

	const [localFinalGiveSum, setLocalFinalGiveSum] =
		useState<number>(finalGiveSum)

	const giveSum = useSelector((state: RootState) => state.globals.giveSum)
	const getSum = useSelector((state: RootState) => state.globals.getSum)
	const giveCurrency = useSelector(
		(state: RootState) => state.globals.giveCurrency
	)
	const getCurrency = useSelector(
		(state: RootState) => state.globals.getCurrency
	)
	const transferDuration = useSelector(
		(state: RootState) => state.globals.transferDuration
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

	let giveLabel = 'You give '
	if (giveCountry) {
		giveLabel +=
			'in ' +
			giveCountry.name +
			(cashGiveCity ? ', ' + cashGiveCity : '') +
			', ' +
			ctLabels[giveCashTransferType]
	} else {
		giveLabel += btLabels[giveBankTransferType]
	}

	let getLabel = 'You get '
	if (getCountry) {
		getLabel +=
			'in ' +
			getCountry.name +
			(cashGetCity ? ', ' + cashGetCity : '') +
			', ' +
			ctLabels[getCashTransferType]
	} else {
		getLabel += btLabels[getBankTransferType]
	}

	const handleTermChange = (term: TTransferDuration) => {
		dispatch(setTransferDuration(term))
	}

	const handleBottomButton = () => {
		processNextStep(3)
	}

	useEffect(() => {
		if (localFinalGiveSum !== finalGiveSum) {
			const changing = {
				value: localFinalGiveSum,
				endValue: finalGiveSum,
			}

			gsap.to(changing, {
				value: changing.endValue,
				duration: 0.5,
				onUpdate: () => {
					setLocalFinalGiveSum(changing.value)
				},
			})
		}
	}, [finalGiveSum])

	const handleBackButton = () => {
		processNextStep(1)
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
				<div className="calculator-step calculator-step2">
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
							<div className="calculator__part">
								<div className="calculator__sum">
									<label className="move_money__label">{giveLabel}</label>
									<div className="big-sum">
										{giveSum} {giveCurrency.code}
									</div>
								</div>
								<div className="calculator__transfer">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											checked={transferDuration === 'immediately'}
											value="immediately"
											id="move_money__terms_1"
											onChange={() => handleTermChange('immediately')}
										/>
										<label
											className="form-check-label"
											htmlFor="move_money__terms_1"
										>
											Immediately
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											checked={transferDuration === 'week'}
											value="week"
											id="move_money__terms_2"
											onChange={() => handleTermChange('week')}
										/>
										<label
											className="form-check-label"
											htmlFor="move_money__terms_2"
										>
											During week (-10% discount)
										</label>
									</div>
								</div>
							</div>
							<div className="calculator__arrow-cont">
								<ArrowIcon color="#AFAFAF" />
							</div>
							<div className="calculator__part">
								<div className="calculator__sum">
									<label className="move_money__label">{getLabel}</label>
									<div className="big-sum">
										{getSum} {getCurrency.code}
									</div>
								</div>
								<div className="move_money__label">Service fee</div>
								<div className="move_money__type_service">2%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="first-block__footer" style={{ opacity: 0 }}>
				<div className="container">
					<div className="calculator-block__security">
						<ProtectionBlock />
						<div className="calculator-block__totalsum toup">
							<p>
								{Math.round(localFinalGiveSum * 1000000) / 1000000}{' '}
								{getCurrency.code}
							</p>
							<button
								type="button"
								className="btn btn-blue btn-large btn-large btn-fullwidth"
								onClick={() => handleBottomButton()}
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

export default CalculatorStep2

import { ArrowIcon } from '@components/icons/ArrowIcon'
import {
	selectCurrencyByCode,
	setGetCountriesOpen,
	setGetCountry,
	setGiveCountriesOpen,
	setGiveCountry,
	setGiveCurrenciesOpen,
	setGiveCurrency,
	setGetCurrenciesOpen,
	setGetCurrency,
	setGiveSum,
	setGetSum,
	setCalcStep,
	setTooltipMounted,
	TCountry,
	TCurrency,
} from '@store/slices/globalsSlice'
import { AppDispatch, RootState } from '@store/store'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classNames'
import gsap from 'gsap'
import { Tooltip } from 'react-tooltip'
import { RoundUpIcon } from '@components/icons/RoundUpIcon'
import {
	сonversionFiatСurrency,
	сonversionCryptoСurrency,
} from '@components/tools'
import ProtectionBlock from './ProtectionBlock'
import Bitcoin from '@assets/img/bitcoin.svg'
import Ether from '@assets/img/ether.svg'
import Usdt from '@assets/img/usdt.svg'

let changeHandler: number | null = null

const cryptoIcons: Record<string, string> = {
	BTC: Bitcoin,
	ETH: Ether,
	USDT: Usdt,
}

const CalculatorBlock = () => {
	const dispatch = useDispatch<AppDispatch>()

	const [countrySearch, setCountrySearch] = useState<string>('')
	const [currencySearch, setCurrencySearch] = useState<string>('')

	const giveSumRef = useRef<HTMLInputElement>(null)
	const getSumRef = useRef<HTMLInputElement>(null)

	const selectGiveCountryRef = useRef<HTMLDivElement>(null)
	const selectGetCountryRef = useRef<HTMLDivElement>(null)
	const selectGiveCurrencyRef = useRef<HTMLDivElement>(null)
	const selectGetCurrencyRef = useRef<HTMLDivElement>(null)

	const stepTL = gsap.timeline()
	const stepBackTL = gsap.timeline()

	const [giveInputValid, setGiveInputValid] = useState<boolean | null>(null)
	const [giveInputError, setGiveInputError] = useState<string>('')
	const [giveInputFocus, setGiveInputFocus] = useState<boolean>(false)
	const [getInputValid, setGetInputValid] = useState<boolean | null>(null)
	const [getInputError, setGetInputError] = useState<string>('')
	const [getInputFocus, setGetInputFocus] = useState<boolean>(false)

	const [pending, setPending] = useState<boolean>(false)

	const giveCountriesOpen = useSelector(
		(state: RootState) => state.globals.giveCountriesOpen
	)
	const getCountriesOpen = useSelector(
		(state: RootState) => state.globals.getCountriesOpen
	)
	const giveCountrySelected = useSelector(
		(state: RootState) => state.globals.giveCountry
	)
	const getCountrySelected = useSelector(
		(state: RootState) => state.globals.getCountry
	)

	const giveCurrencySelected = useSelector(
		(state: RootState) => state.globals.giveCurrency
	)
	const getCurrencySelected = useSelector(
		(state: RootState) => state.globals.getCurrency
	)

	const giveSum = useSelector((state: RootState) => state.globals.giveSum)
	const getSum = useSelector((state: RootState) => state.globals.getSum)

	const giveCurrenciesOpen = useSelector(
		(state: RootState) => state.globals.giveCurrenciesOpen
	)
	const getCurrenciesOpen = useSelector(
		(state: RootState) => state.globals.getCurrenciesOpen
	)

	const countries = useSelector((state: RootState) =>
		state.globals.countries.filter((item) =>
			item.name.toLocaleLowerCase().includes(countrySearch.toLocaleLowerCase())
		)
	)

	const currencies = useSelector((state: RootState) =>
		state.globals.currencies.filter((item) =>
			item.name.toLocaleLowerCase().includes(currencySearch.toLocaleLowerCase())
		)
	)

	const doSetCountry = (type: string, country: TCountry) => {
		if (type === 'give') {
			dispatch(setGiveCountry(country))
			dispatch(setGiveCountriesOpen(false))
		}
		if (type === 'get') {
			dispatch(setGetCountry(country))
			dispatch(setGetCountriesOpen(false))
		}
	}

	const doSetCurrency = (type: string, currency: TCurrency) => {
		if (type === 'give') {
			dispatch(setGiveCurrency(currency))
			dispatch(setGiveCurrenciesOpen(false))
		}
		if (type === 'get') {
			dispatch(setGetCurrency(currency))
			dispatch(setGetCurrenciesOpen(false))
		}
	}

	const handleBottomButton = () => {
		if (!giveSum && !getSum) {
			setGiveInputError('Enter a sum')
			setGiveInputValid(false)
			return false
		}
		if (!getSum || !getSum) {
			return false
		}
		if (window.pageYOffset > 0) {
			const changing = {
				value: window.pageYOffset,
				endValue: 0,
			}

			gsap.to(changing, {
				value: changing.endValue,
				duration: 0.5,
				onUpdate: () => {
					window.scrollTo(0, changing.value)
				},
				onComplete: () => {
					processNextStep()
				},
			})
		} else {
			processNextStep()
		}
	}

	const hero_block = '.first-hero__block'
	const calc_block = '.calculator-first-area'
	const footer_block = '.first-block__footer'

	const processNextStep = () => {
		stepTL
			.to(hero_block, {
				duration: 0.5,
				ease: 'back.in(1.7)',
				opacity: 0,
				x: -500,
			})
			.to(
				calc_block,
				{
					duration: 0.5,
					ease: 'back.in(1.7)',
					opacity: 0,
					x: -500,
				},
				0.25
			)
			.to(
				footer_block,
				{
					duration: 0.5,
					ease: 'back.in(1.7)',
					opacity: 0,
					x: -500,
					onComplete: () => {
						console.log('finish')
						dispatch(setCalcStep(1))
					},
				},
				0.5
			)
			.play()
	}

	const processThisStep = () => {
		stepBackTL
			.set(hero_block, {
				display: 'block',
				opacity: 0,
				x: -500,
			})
			.set(calc_block, {
				display: 'block',
				opacity: 0,
				x: -500,
			})
			.set(footer_block, {
				display: 'block',
				opacity: 0,
				x: -500,
			})
			.to(hero_block, {
				duration: 0.5,
				ease: 'back.out(1.7)',
				opacity: 1,
				x: 0,
			})
			.to(
				calc_block,
				{
					duration: 0.5,
					ease: 'back.out(1.7)',
					opacity: 1,
					x: 0,
				},
				0.25
			)
			.to(
				footer_block,
				{
					duration: 0.5,
					ease: 'back.out(1.7)',
					opacity: 1,
					x: 0,
					onComplete: () => {
						dispatch(setTooltipMounted(true))
					},
				},
				0.5
			)
			.play()
	}

	const toggleCountriesOpen = (type: string) => {
		if (type === 'give') {
			if (giveCountrySelected) {
				dispatch(setGiveCountry(null))
			} else {
				dispatch(setGiveCountriesOpen(true))
			}
		} else if (type === 'get') {
			if (getCountrySelected) {
				dispatch(setGetCountry(null))
			} else {
				dispatch(setGetCountriesOpen(true))
			}
		}
	}

	const openCurrencies = (type: string) => {
		if (type === 'give') {
			dispatch(setGiveCurrenciesOpen(true))
		} else if (type === 'get') {
			dispatch(setGetCurrenciesOpen(true))
		}
	}

	const handleSumInputError = (
		type: string,
		e: ChangeEvent<HTMLInputElement>
	) => {
		const newValue = e.target.value
		if (type == 'give') {
			dispatch(setGiveSum(newValue))
		} else if (type == 'get') {
			dispatch(setGetSum(newValue))
		}

		if (changeHandler) {
			clearTimeout(changeHandler)
			changeHandler = null
		}

		const fromValue = parseFloat(newValue)

		changeHandler = setTimeout(async () => {
			if (!isNaN(fromValue)) {
				setPending(true)

				let toValue = 0
				const fromCurrencyType = giveCurrencySelected.type
				const toCurrencyType = getCurrencySelected.type

				if (fromCurrencyType === 'fiat' && toCurrencyType === 'fiat') {
					if (type == 'give') {
						toValue = await сonversionFiatСurrency(
							giveCurrencySelected.code,
							getCurrencySelected.code,
							fromValue
						)
					} else if (type == 'get') {
						toValue = await сonversionFiatСurrency(
							getCurrencySelected.code,
							giveCurrencySelected.code,
							fromValue
						)
					}
				} else if (fromCurrencyType === 'fiat' && toCurrencyType === 'crypto') {
					if (type == 'give') {
						toValue = await сonversionFiatСurrency(
							giveCurrencySelected.code,
							'USD',
							fromValue
						)
						toValue = await сonversionCryptoСurrency(
							'USDT',
							getCurrencySelected.code,
							toValue
						)
					} else if (type == 'get') {
						toValue = await сonversionCryptoСurrency(
							'USDT',
							getCurrencySelected.code,
							fromValue
						)
						toValue = await сonversionFiatСurrency(
							'USD',
							giveCurrencySelected.code,
							toValue
						)
					}
				} else if (fromCurrencyType === 'crypto' && toCurrencyType === 'fiat') {
					if (type == 'give') {
						toValue = await сonversionCryptoСurrency(
							giveCurrencySelected.code,
							'USDT',
							fromValue
						)
						toValue = await сonversionFiatСurrency(
							'USD',
							getCurrencySelected.code,
							toValue
						)
					} else if (type == 'get') {
						toValue = await сonversionFiatСurrency(
							getCurrencySelected.code,
							'USD',
							fromValue
						)
						toValue = await сonversionCryptoСurrency(
							'USDT',
							giveCurrencySelected.code,
							toValue
						)
					}
				} else if (
					fromCurrencyType === 'crypto' &&
					toCurrencyType === 'crypto'
				) {
					if (giveCurrencySelected === getCurrencySelected) {
						toValue = fromValue
					} else {
						if (type == 'give') {
							toValue = await сonversionCryptoСurrency(
								giveCurrencySelected.code,
								'USDT',
								fromValue
							)
							toValue = await сonversionCryptoСurrency(
								'USDT',
								getCurrencySelected.code,
								toValue
							)
						} else if (type == 'get') {
							toValue = await сonversionCryptoСurrency(
								getCurrencySelected.code,
								'USDT',
								fromValue
							)
							toValue = await сonversionCryptoСurrency(
								'USDT',
								giveCurrencySelected.code,
								toValue
							)
						}
					}
				}

				console.log('toValue', toValue)

				if (type == 'give') {
					dispatch(setGetSum(toValue.toString()))
					setGetInputError('')
					setGetInputValid(true)
				} else if (type == 'get') {
					dispatch(setGiveSum(toValue.toString()))
					setGiveInputError('')
					setGiveInputValid(true)
				}

				setPending(false)
			} else {
				if (type == 'give') {
					dispatch(setGetSum(''))
					setGetInputError('')
					setGetInputValid(true)
				} else if (type == 'get') {
					dispatch(setGiveSum(''))
					setGiveInputError('')
					setGiveInputValid(true)
				}
			}
		}, 1000)
	}

	const handleKeyUpInput = (
		type: string,
		e: KeyboardEvent<HTMLInputElement>
	) => {
		if (type == 'give') {
			setGiveInputValid(giveSumRef.current!.validity.valid)
			setGiveInputError(giveSumRef.current!.validationMessage)
		} else if (type == 'get') {
			setGetInputValid(getSumRef.current!.validity.valid)
			setGetInputError(getSumRef.current!.validationMessage)
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectGiveCountryRef.current &&
				!selectGiveCountryRef.current.contains(event.target as Node)
			) {
				dispatch(setGiveCountriesOpen(false))
			}
			if (
				selectGetCountryRef.current &&
				!selectGetCountryRef.current.contains(event.target as Node)
			) {
				dispatch(setGetCountriesOpen(false))
			}
			if (
				selectGiveCurrencyRef.current &&
				!selectGiveCurrencyRef.current.contains(event.target as Node)
			) {
				dispatch(setGiveCurrenciesOpen(false))
			}
			if (
				selectGetCurrencyRef.current &&
				!selectGetCurrencyRef.current.contains(event.target as Node)
			) {
				dispatch(setGetCurrenciesOpen(false))
			}
		}
		document.addEventListener('click', handleClickOutside, true)

		setTimeout(() => {
			processThisStep()
		}, 200)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)

			if (stepTL) {
				stepTL.kill()
			}
			if (stepBackTL) {
				stepBackTL.kill()
			}
		}
	}, [])

	return (
		<>
			<div className="calculator-first-area" style={{ opacity: 0 }}>
				<div className="container">
					<form className="calculator-block__content">
						<div className="move-money-sum__block give-block">
							<div className="label-checkbox">
								<label htmlFor="giveSumRef" className="move_money__label">
									You give
								</label>
								<div className="form-check">
									<input
										type="checkbox"
										id="giveCountrySelected"
										className="form-check-input"
										checked={giveCountrySelected !== null || giveCountriesOpen}
										onChange={() => toggleCountriesOpen('give')}
									/>
									<label htmlFor="giveCountrySelected">Give in cash</label>
								</div>
							</div>
							<div
								className={classNames(
									'money-move-input__container',
									{ valid: giveInputValid === true },
									{ invalid: giveInputError },
									{ focused: giveInputFocus }
								)}
								id="for-give-block"
							>
								<input
									ref={giveSumRef}
									type="number"
									id="giveSumRef"
									value={giveSum}
									step="any"
									min="0"
									onFocus={() => setGiveInputFocus(true)}
									onBlur={() => setGiveInputFocus(false)}
									onKeyUp={(e) => handleKeyUpInput('give', e)}
									onChange={(e) => handleSumInputError('give', e)}
								/>
								<div className="selected-items">
									{giveCountrySelected && (
										<span
											className={
												'flag flag-' +
												giveCountrySelected.code.toLocaleLowerCase()
											}
											onClick={() => dispatch(setGiveCountriesOpen(true))}
										></span>
									)}
									<span
										className="country-selected"
										onClick={() => openCurrencies('give')}
									>
										{giveCurrencySelected.code}
									</span>
								</div>
								<div className="input-error">{giveInputError}</div>
							</div>
						</div>
						<div className="move-money-process">
							{!pending && <ArrowIcon color="#AFAFAF" />}
							{pending && <RoundUpIcon />}
						</div>
						<div className="move-money-sum__block get-block">
							<div className="label-checkbox">
								<label htmlFor="getSumRef" className="move_money__label">
									You get
								</label>
								<div className="form-check">
									<input
										type="checkbox"
										id="getCountrySelected"
										className="form-check-input"
										checked={getCountrySelected !== null || getCountriesOpen}
										onChange={() => toggleCountriesOpen('get')}
									/>
									<label htmlFor="getCountrySelected">Get in cash</label>
								</div>
							</div>
							<div
								className={classNames(
									'money-move-input__container',
									{ valid: getInputValid === true },
									{ invalid: getInputError },
									{ focused: getInputFocus }
								)}
								id="for-get-block"
							>
								<input
									ref={getSumRef}
									type="number"
									id="getSumRef"
									step="any"
									min="0"
									value={getSum}
									onFocus={() => setGetInputFocus(true)}
									onBlur={() => setGetInputFocus(false)}
									onKeyUp={(e) => handleKeyUpInput('get', e)}
									onChange={(e) => handleSumInputError('get', e)}
								/>
								<div className="selected-items">
									{getCountrySelected && (
										<span
											className={
												'flag flag-' +
												getCountrySelected.code.toLocaleLowerCase()
											}
											onClick={() => dispatch(setGetCountriesOpen(true))}
										></span>
									)}
									<span
										className="country-selected"
										onClick={() => openCurrencies('get')}
									>
										{getCurrencySelected.code}
									</span>
								</div>
								<div className="input-error">{getInputError}</div>
							</div>
						</div>
						<div className="money-move-button__block">
							<button
								type="button"
								disabled={
									pending || giveInputValid === false || getInputValid === false
								}
								className="btn btn-blue btn-large btn-fullwidth"
								onClick={() => handleBottomButton()}
							>
								<span>Move</span>
								<ArrowIcon color="#fff" />
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="first-block__footer" style={{ opacity: 0 }}>
				<div className="container">
					<div className="calculator-block__security">
						<ProtectionBlock />
						<div className="calculator-block__totals">
							1032 exchangers in 89 countries
						</div>
					</div>
				</div>
			</div>
			<Tooltip
				anchorSelect="#for-give-block"
				place="bottom"
				variant="light"
				isOpen={giveCountriesOpen}
			>
				<div className="select" ref={selectGiveCountryRef}>
					<div className="select__search">
						<input
							type="text"
							placeholder="Your country"
							value={countrySearch}
							onChange={(e) => setCountrySearch(e.target.value)}
						/>
					</div>
					{countries.map((country) => (
						<div
							className="select__option"
							key={country.code + '-give'}
							onClick={() => doSetCountry('give', country)}
						>
							<div className="select__text">{country.name}</div>
							<div className="select__value">
								<span
									className={'flag flag-' + country.code.toLowerCase()}
								></span>
							</div>
						</div>
					))}
				</div>
			</Tooltip>
			<Tooltip
				anchorSelect="#for-get-block"
				place="bottom"
				variant="light"
				isOpen={getCountriesOpen}
			>
				<div className="select" ref={selectGetCountryRef}>
					<div className="select__search">
						<input
							type="text"
							placeholder="Your country"
							value={countrySearch}
							onChange={(e) => setCountrySearch(e.target.value)}
						/>
					</div>
					{countries.map((country) => (
						<div
							className="select__option"
							key={country.code}
							onClick={() => doSetCountry('get', country)}
						>
							<div className="select__text">{country.name}</div>
							<div className="select__value">
								<span
									className={'flag flag-' + country.code.toLowerCase()}
								></span>
							</div>
						</div>
					))}
				</div>
			</Tooltip>
			<Tooltip
				anchorSelect="#giveSumRef"
				place="bottom"
				variant="light"
				isOpen={giveCurrenciesOpen}
			>
				<div className="select" ref={selectGiveCurrencyRef}>
					<div className="select__search">
						<input
							type="text"
							placeholder="Your currency"
							value={currencySearch}
							onChange={(e) => setCurrencySearch(e.target.value)}
						/>
					</div>
					<div className="select__options">
						<div className="select__separator">
							<span>Cryptocurrencies</span>
						</div>
						{currencies
							.filter((item) => item.type === 'crypto')
							.map((currency) => (
								<div
									className="select__option"
									key={currency.code}
									onClick={() => doSetCurrency('give', currency)}
								>
									<div className="select__text">{currency.name}</div>
									<div className="select__value">
										<img src={cryptoIcons[currency.code.toUpperCase()]} />
									</div>
								</div>
							))}
						<div className="select__separator">
							<span>Fiat Money</span>
						</div>
						{currencies
							.filter((item) => item.type === 'fiat')
							.map((currency) => (
								<div
									className="select__option"
									key={currency.code}
									onClick={() => doSetCurrency('give', currency)}
								>
									<div className="select__text">{currency.name}</div>
									<div className="select__value">
										<span
											className={'flag flag-' + currency.flag.toLowerCase()}
										></span>
									</div>
								</div>
							))}
					</div>
				</div>
			</Tooltip>
			<Tooltip
				anchorSelect="#getSumRef"
				place="bottom"
				variant="light"
				isOpen={getCurrenciesOpen}
			>
				<div className="select" ref={selectGetCurrencyRef}>
					<div className="select__search">
						<input
							type="text"
							placeholder="Your currency"
							value={currencySearch}
							onChange={(e) => setCurrencySearch(e.target.value)}
						/>
					</div>
					<div className="select__options">
						<div className="select__separator">
							<span>Cryptocurrencies</span>
						</div>
						{currencies
							.filter((item) => item.type === 'crypto')
							.map((currency) => (
								<div
									className="select__option"
									key={currency.code}
									onClick={() => doSetCurrency('get', currency)}
								>
									<div className="select__text">{currency.name}</div>
									<div className="select__value">
										<img src={cryptoIcons[currency.code.toUpperCase()]} />
									</div>
								</div>
							))}
						<div className="select__separator">
							<span>Fiat Money</span>
						</div>
						{currencies
							.filter((item) => item.type === 'fiat')
							.map((currency) => (
								<div
									className="select__option"
									key={currency.code}
									onClick={() => doSetCurrency('get', currency)}
								>
									<div className="select__text">{currency.name}</div>
									<div className="select__value">
										<span
											className={'flag flag-' + currency.flag.toLowerCase()}
										></span>
									</div>
								</div>
							))}
					</div>
				</div>
			</Tooltip>
		</>
	)
}

export default CalculatorBlock

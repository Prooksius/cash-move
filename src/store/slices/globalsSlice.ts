import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/index'
import { translations, TTranslations } from '@store/translations'

export interface TCountry {
	code: string
	name: string
}

export type TCurrencyType = 'fiat' | 'crypto'
export type TBankTransferType = 'card' | 'account' | 'sbp'
export type TCashTransferType = 'office' | 'courier'
export type TTransferDuration = 'immediately' | 'week'

export interface TCurrency {
	code: string
	name: string
	flag: string
	type: TCurrencyType
}

interface GlobalState {
	countries: TCountry[]
	currencies: TCurrency[]
	giveCountry: TCountry | null
	getCountry: TCountry | null
	giveCurrency: TCurrency
	getCurrency: TCurrency
	giveInCash: boolean
	getInCash: boolean
	giveSum: string
	getSum: string
	giveBankTransferType: TBankTransferType
	giveCashTransferType: TCashTransferType
	getBankTransferType: TBankTransferType
	getCashTransferType: TCashTransferType
	cashGiveCity: string
	cashGetCity: string
	transferDuration: TTransferDuration
	agreement: boolean
	finalGiveSum: number
	name: string
	email: string
	phone: string
	phoneCode: string
	giveCountriesOpen: boolean
	getCountriesOpen: boolean
	giveCurrenciesOpen: boolean
	getCurrenciesOpen: boolean
	calcStep: number
	signUpOpened: boolean
	tooltipMounted: boolean
	translations: TTranslations
	lang: string
}

const countriesList: TCountry[] = [
	{ code: 'RU', name: 'Russian Federation' },
	{ code: 'GB', name: 'United Kingdom' },
	{ code: 'ES', name: 'Spain' },
	{ code: 'KR', name: 'South Korea' },
]

const currenciesList: TCurrency[] = [
	{ code: 'BTC', name: 'Bitcoin', flag: '', type: 'crypto' },
	{ code: 'ETH', name: 'Ether', flag: '', type: 'crypto' },
	{ code: 'USDT', name: 'Tether', flag: '', type: 'crypto' },
	{ code: 'RUB', name: 'Russian ruble', flag: 'ru', type: 'fiat' },
	{ code: 'USD', name: 'United state dollar', flag: 'gb', type: 'fiat' },
	{ code: 'EUR', name: 'Euro', flag: 'eu', type: 'fiat' },
	{ code: 'CNY', name: 'Yuan', flag: 'cn', type: 'fiat' },
	{ code: 'KRW', name: 'Korean won', flag: 'kr', type: 'fiat' },
]

const initialState: GlobalState = {
	countries: countriesList,
	giveCountry: null,
	getCountry: null,
	currencies: currenciesList,
	giveCurrency: {
		code: 'RUB',
		name: 'Russian ruble',
		flag: 'ru',
		type: 'fiat',
	},
	getCurrency: { code: 'RUB', name: 'Russian ruble', flag: 'ru', type: 'fiat' },
	giveInCash: false,
	getInCash: false,
	giveSum: '',
	getSum: '',
	giveBankTransferType: 'card',
	giveCashTransferType: 'office',
	getBankTransferType: 'card',
	getCashTransferType: 'office',
	cashGiveCity: '',
	cashGetCity: '',
	transferDuration: 'immediately',
	agreement: true,
	name: localStorage.getItem('user_name') || '',
	email: localStorage.getItem('user_email') || '',
	phone: localStorage.getItem('user_phone') || '',
	phoneCode: 'ru',
	giveCountriesOpen: false,
	getCountriesOpen: false,
	giveCurrenciesOpen: false,
	getCurrenciesOpen: false,
	calcStep: 0,
	finalGiveSum: 0,
	signUpOpened: false,
	tooltipMounted: false,
	translations,
	lang: localStorage.getItem('lang') || 'en',
}

export const globalsSlice = createSlice({
	name: 'globals',
	initialState,
	reducers: {
		setName: (state, { payload }: PayloadAction<string>) => {
			state.name = payload
			localStorage.setItem('user_name', payload)
		},
		setEmail: (state, { payload }: PayloadAction<string>) => {
			state.email = payload
			localStorage.setItem('user_email', payload)
		},
		setPhone: (state, { payload }: PayloadAction<string>) => {
			state.phone = payload
			localStorage.setItem('user_phone', payload)
		},
		setPhoneCode: (state, { payload }: PayloadAction<string>) => {
			state.phoneCode = payload
		},
		setGiveCountriesOpen: (state, { payload }: PayloadAction<boolean>) => {
			state.giveCountriesOpen = payload
		},
		setGetCountriesOpen: (state, { payload }: PayloadAction<boolean>) => {
			state.getCountriesOpen = payload
		},
		setGiveCurrenciesOpen: (state, { payload }: PayloadAction<boolean>) => {
			state.giveCurrenciesOpen = payload
		},
		setGetCurrenciesOpen: (state, { payload }: PayloadAction<boolean>) => {
			state.getCurrenciesOpen = payload
		},
		setGiveCountry: (state, { payload }: PayloadAction<TCountry | null>) => {
			state.giveCountry = payload
		},
		setGetCountry: (state, { payload }: PayloadAction<TCountry | null>) => {
			state.getCountry = payload
		},
		setGiveCurrency: (state, { payload }: PayloadAction<TCurrency>) => {
			state.giveCurrency = payload
		},
		setGetCurrency: (state, { payload }: PayloadAction<TCurrency>) => {
			state.getCurrency = payload
		},
		setGiveSum: (state, { payload }: PayloadAction<string>) => {
			state.giveSum = payload
			let sum = parseFloat(payload)
			if (state.transferDuration === 'week') {
				sum *= 0.9
			}
			state.finalGiveSum = sum * 1.02
		},
		setGetSum: (state, { payload }: PayloadAction<string>) => {
			state.getSum = payload
		},
		setCashGiveCity: (state, { payload }: PayloadAction<string>) => {
			state.cashGiveCity = payload
		},
		setCashGetCity: (state, { payload }: PayloadAction<string>) => {
			state.cashGetCity = payload
		},
		setGiveBankTransferType: (
			state,
			{ payload }: PayloadAction<TBankTransferType>
		) => {
			state.giveBankTransferType = payload
		},
		setGetBankTransferType: (
			state,
			{ payload }: PayloadAction<TBankTransferType>
		) => {
			state.getBankTransferType = payload
		},
		setGiveCashTransferType: (
			state,
			{ payload }: PayloadAction<TCashTransferType>
		) => {
			state.giveCashTransferType = payload
		},
		setGetCashTransferType: (
			state,
			{ payload }: PayloadAction<TCashTransferType>
		) => {
			state.getCashTransferType = payload
		},
		setCalcStep: (state, { payload }: PayloadAction<number>) => {
			state.calcStep = payload
		},
		setAgreement: (state, { payload }: PayloadAction<boolean>) => {
			state.agreement = payload
		},
		setTransferDuration: (
			state,
			{ payload }: PayloadAction<TTransferDuration>
		) => {
			state.transferDuration = payload
			let sum = parseFloat(state.giveSum)
			if (payload === 'week') {
				sum *= 0.9
			}
			state.finalGiveSum = sum * 1.02
		},
		setSignUpOpened: (state, { payload }: PayloadAction<boolean>) => {
			state.signUpOpened = payload
		},
		setTooltipMounted: (state, { payload }: PayloadAction<boolean>) => {
			state.tooltipMounted = payload
		},
		setLang: (state, { payload }: PayloadAction<string>) => {
			state.lang = payload
			localStorage.setItem('lang', payload)
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	setName,
	setEmail,
	setPhone,
	setPhoneCode,
	setGiveCountriesOpen,
	setGetCountriesOpen,
	setGiveCurrenciesOpen,
	setGetCurrenciesOpen,
	setGiveCountry,
	setGetCountry,
	setGiveCurrency,
	setGetCurrency,
	setGiveSum,
	setGetSum,
	setCashGetCity,
	setCashGiveCity,
	setGetBankTransferType,
	setGetCashTransferType,
	setGiveBankTransferType,
	setGiveCashTransferType,
	setCalcStep,
	setTransferDuration,
	setAgreement,
	setSignUpOpened,
	setTooltipMounted,
	setLang,
} = globalsSlice.actions

export default globalsSlice.reducer

export const selectCountryByCode = (state: RootState) => (code: string) => {
	return state.globals.countries.find((country) => country.code === code)
}
export const selectCurrencyByCode = (state: RootState) => (code: string) => {
	return state.globals.currencies.find((currency) => currency.code === code)
}
export const listLang = (state: RootState) => state.globals.lang
export const listTraslations = (state: RootState) => (phrase: string) =>
	state.globals.translations[phrase]
		? state.globals.translations[phrase][state.globals.lang]
		: phrase

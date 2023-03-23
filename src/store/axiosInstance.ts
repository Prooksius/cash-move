import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
})
export const axiosApilayer = axios.create({
	baseURL: 'https://api.apilayer.com/',
	headers: {
		'Content-Type': 'application/json',
		apikey: 'Klb8YRo52Ig7r76U1jbiKyf2xl99TPPd',
	},
})

export const axiosBybit = axios.create({
	baseURL: 'https://api.bybit.com/derivatives/v3/public/tickers',
	headers: {
		'Content-Type': 'application/json',
	},
})

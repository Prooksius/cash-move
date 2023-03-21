import { toast } from 'react-toastify'

export function toastAlert(title: string, type = 'info') {
	if (type === 'info') {
		toast[type](title)
	} else if (type === 'warning') {
		toast[type](title)
	} else if (type === 'error') {
		toast.error(title)
	} else if (type === 'success') {
		toast.success(title)
	}
}

export const сonversionFiatСurrency = async (
	from: string,
	to: string,
	amount: number
) => {
	if (from.toUpperCase() === to.toUpperCase()) {
		return amount
	}

	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append('apikey', 'Klb8YRo52Ig7r76U1jbiKyf2xl99TPPd')

	var requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders,
	}

	try {
		const response = await fetch(
			'https://api.apilayer.com/currency_data/convert?to=' +
				to.toUpperCase() +
				'&from=' +
				from.toUpperCase() +
				'&amount=' +
				amount,
			requestOptions
		)
		const result = await response.text()
		//console.log('parsed result', JSON.parse(result))
		const parsed = JSON.parse(result)
		return Math.round(parsed.result * 100000) / 100000
	} catch (error) {
		toastAlert('Error accessing currency converter', 'error')
		console.error('error', error)
	}
	return 0
}

export const сonversionCryptoСurrency = async (
	from: string,
	to: string,
	amount: number
) => {
	if (from.toUpperCase() === to.toUpperCase()) {
		return amount
	}

	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	var requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders,
	}

	try {
		let symbol = ''
		if (from.toUpperCase() === 'USDT') {
			symbol = to.toUpperCase() + 'USDT'
		} else if (to.toUpperCase() === 'USDT') {
			symbol = from.toUpperCase() + 'USDT'
		}
		const response = await fetch(
			'https://api.bybit.com/derivatives/v3/public/tickers?symbol=' + symbol,
			requestOptions
		)
		const result = await response.text()
		//console.log('result', result)
		//console.log('parsed result', JSON.parse(result))
		const parsed = JSON.parse(result)

		const course = parsed.result.list[0].indexPrice

		let sum = 0
		if (from.toUpperCase() === 'USDT') {
			sum = amount / course
		} else if (to.toUpperCase() === 'USDT') {
			sum = amount * course
		}

		return sum
	} catch (error) {
		toastAlert('Error accessing currency converter', 'error')
		console.error('error', error)
	}
	return 0
}

export function numberFormat(
	number: number,
	decimals: number,
	dec_point: string,
	thousands_sep: string
) {
	// Strip all characters but numerical ones.
	const number1 = (number + '').replace(/[^0-9+\-Ee.]/g, '')
	var n = !isFinite(+number1) ? 0 : +number1,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
		dec = typeof dec_point === 'undefined' ? '.' : dec_point,
		s = '',
		toFixedFix = function (n: number, prec: number) {
			const k = Math.pow(10, prec)
			return '' + Math.round(n * k) / k
		}
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	const s1 = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
	if (s1[0].length > 3) {
		s1[0] = s1[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	}
	if ((s1[1] || '').length < prec) {
		s1[1] = s1[1] || ''
		s1[1] += new Array(prec - s1[1].length + 1).join('0')
	}
	return s1.join(dec)
}

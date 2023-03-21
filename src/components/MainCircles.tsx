import React, { useEffect } from 'react'
import Leg from '../assets/img/leg.svg'
import { RubleIcon } from './icons/first/RubleIcon'
import { WCoinIcon } from './icons/first/WCoinIcon'
import { BitcoinIcon } from './icons/first/BitcoinIcon'
import { DollarIcon } from './icons/first/DollarIcon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
}

const currencies = '.animation-big__currency'
const smallRing = '.animation-small__ring'
const bigRing = '.animation-big__ring'
const ruble = '.animation-big__rublecoin'
const bitcoin = '.animation-big__bitcoin'
const wcoin = '.animation-big__wcoin'
const dollar = '.animation-big__dollar'

const MainCircles = () => {
	const smallRingStyle = {
		'--grad-pos11': '94%',
		'--grad-pos12': '94%',
		'--grad-pos21': '145%',
		'--grad-pos22': '98%',
	} as React.CSSProperties

	const bigRingStyle = {
		'--grad-pos11': '50%',
		'--grad-pos12': '45%',
		'--grad-pos21': '0%',
		'--grad-pos22': '19%',
		'--ring-rotate': '0deg',
	} as React.CSSProperties

	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

		ScrollTrigger.matchMedia({
			'(min-width: 768px)': () => {
				tl.set(currencies, {
					clearProps: 'opacity, scale, translateX, translateY',
				})
					// stage 1 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--grad-pos11': '53%',
							'--grad-pos12': '53%',
							'--grad-pos21': '74%',
							'--grad-pos22': '7%',
							'--ring-rotate': '45deg',
						},
						0
					)
					.to(
						smallRing,
						{
							duration: 1,
							'--grad-pos11': '80%',
							'--grad-pos12': '80%',
							'--grad-pos21': '126%',
							'--grad-pos22': '60%',
						},
						0
					)
					.to(
						ruble,
						{
							duration: 1,
							opacity: 1,
							scale: 1,
						},
						0
					)
					// stage 1 - finish
					// -----------------
					// stage 2 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--ring-rotate': '180deg',
						},
						1
					)
					.to(
						wcoin,
						{
							duration: 0.5,
							opacity: 1,
							scale: 1,
							translateX: 0,
							translateY: 0,
						},
						1
					)
					.to(
						smallRing,
						{
							duration: 0.5,
							'--grad-pos11': '96%',
							'--grad-pos12': '96%',
							'--grad-pos21': '129%',
							'--grad-pos22': '20%',
						},
						1
					)
					// stage 2 - finish
					// -----------------
					// stage 3 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--grad-pos11': '50%',
							'--grad-pos12': '45%',
							'--grad-pos21': '0%',
							'--grad-pos22': '19%',
							'--ring-rotate': '0deg',
						},
						2
					)
					.to(
						smallRing,
						{
							duration: 1,
							'--grad-pos11': '94%',
							'--grad-pos12': '94%',
							'--grad-pos21': '145%',
							'--grad-pos22': '98%',
						},
						2
					)
					.to(
						ruble,
						{
							duration: 1,
							opacity: 0,
						},
						2
					)
					.to(
						wcoin,
						{
							duration: 1,
							opacity: 0,
						},
						2
					)
					// stage 3 - finish
					.set(currencies, {
						clearProps: 'opacity, scale, translateX, translateY',
					}) // clear currencies params
					// stage 4 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--grad-pos11': '53%',
							'--grad-pos12': '53%',
							'--grad-pos21': '74%',
							'--grad-pos22': '7%',
							'--ring-rotate': '45deg',
						},
						4
					)
					.to(
						smallRing,
						{
							duration: 1,
							'--grad-pos11': '80%',
							'--grad-pos12': '80%',
							'--grad-pos21': '126%',
							'--grad-pos22': '60%',
						},
						4
					)
					.to(
						bitcoin,
						{
							duration: 1,
							opacity: 1,
							scale: 1,
						},
						4
					)
					// stage 4 - finish
					// -----------------
					// stage 5 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--ring-rotate': '180deg',
						},
						5
					)
					.to(
						dollar,
						{
							duration: 0.5,
							opacity: 1,
							scale: 1,
							translateX: 0,
							translateY: 0,
						},
						5
					)
					.to(
						smallRing,
						{
							duration: 1,
							'--grad-pos11': '96%',
							'--grad-pos12': '96%',
							'--grad-pos21': '129%',
							'--grad-pos22': '20%',
						},
						5
					)
					// stage 5 - finish
					// -----------------
					// stage 6 - start
					.to(
						bigRing,
						{
							duration: 1,
							'--grad-pos11': '50%',
							'--grad-pos12': '45%',
							'--grad-pos21': '0%',
							'--grad-pos22': '19%',
							'--ring-rotate': '0deg',
						},
						6
					)
					.to(
						smallRing,
						{
							duration: 1,
							'--grad-pos11': '94%',
							'--grad-pos12': '94%',
							'--grad-pos21': '145%',
							'--grad-pos22': '98%',
						},
						6
					)
					.to(
						bitcoin,
						{
							duration: 1,
							opacity: 0,
						},
						6
					)
					.to(
						dollar,
						{
							duration: 1,
							opacity: 0,
						},
						6
					)
				// stage 6 - finish
			},
		})

		return () => {
			if (tl) {
				tl.kill()
			}
		}
	}, [])

	return (
		<div className="gradient-animation">
			<div className="animation-small">
				<div className="animation-small__ring" style={smallRingStyle}></div>
			</div>
			<div className="animation-big">
				<div className="animation-big__ring" style={bigRingStyle}></div>
				<img src={Leg} className="animation-big__leg" />
				<RubleIcon className="animation-big__currency animation-big__licoin animation-big__rublecoin" />
				<WCoinIcon className="animation-big__currency animation-big__sicoin animation-big__wcoin" />
				<BitcoinIcon className="animation-big__currency animation-big__licoin animation-big__bitcoin" />
				<DollarIcon className="animation-big__currency animation-big__sicoin animation-big__dollar" />
			</div>
		</div>
	)
}

export default MainCircles

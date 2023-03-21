import MainCircles from '@components/MainCircles'
import { AppDispatch, RootState } from '@store/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CalculatorStep1 from './calcSteps/CalculatorStep1'
import CalculatorStep2 from './calcSteps/CalculatorStep2'
import CalculatorStep3 from './calcSteps/CalculatorStep3'
import CalculatorBlock from './CalculatorBlock'

const FirstBlock = () => {
	const step = useSelector((state: RootState) => state.globals.calcStep)

	useEffect(() => {
		if (step > 0) {
			document.querySelector('body')!.classList.add('noscroll', 'noscroll-sure')
			document
				.querySelector('.first-block__container')!
				.classList.add('sticky-height')
		} else {
			document
				.querySelector('body')!
				.classList.remove('noscroll', 'noscroll-sure')
			document
				.querySelector('.first-block__container')!
				.classList.remove('sticky-height')
		}
	}, [step])

	return (
		<section className="first-block__container">
			{step === 0 && (
				<div className="first-hero__block" style={{ opacity: 0 }}>
					<div className="container">
						<div className="first-block__area">
							<div className="first-block__header">
								<h1>
									Move <span>money</span> without borders
								</h1>
								<p>
									Safe and insured movement of funds between countries by crypto
									without a risk
								</p>
							</div>
							<div className="first-block__animation">
								<MainCircles />
							</div>
						</div>
					</div>
				</div>
			)}
			{step === 0 && <CalculatorBlock />}
			{step === 1 && <CalculatorStep1 />}
			{step === 2 && <CalculatorStep2 />}
			{step === 3 && <CalculatorStep3 />}
		</section>
	)
}

export default FirstBlock

import React, { useEffect, useState } from 'react'
import MainLayout from '@layouts/MainLayout'
import FirstBlock from './blocks/FirstBlock'
import HowItWorksBlock from './blocks/HowItWorksBlock'
import ReviewsBlock from './blocks/ReviewsBlock'
import FooterBlock from './blocks/FooterBlock'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceInfo from './blocks/ServiceInfo'

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
}

export const HomePage = () => {
	const [howToSlide, setHowToSlide] = useState<number>(0)

	const slideScroll = 500
	const slidesCount = 3

	useEffect(() => {
		ScrollTrigger.matchMedia({
			'(min-width: 768px)': () => {
				ScrollTrigger.create({
					trigger: '#section_how_it_works',
					start: 'top top',
					end: '+=' + slideScroll * slidesCount + 'px',
					pin: true,
					pinSpacing: true,
					onUpdate: (self) => {
						const slide = parseInt((self.progress * slidesCount).toString())
						setHowToSlide(slide)
						// mainSwiper.setProgress(Math.min(self.progress * 1.1, 1))
						// h2_how.style.setProperty('--shiftTitle', self.progress * 41 + '%')
					},
				})

				gsap.to('.footer__faq .accordion-item', {
					scrollTrigger: {
						trigger: '.footer__faq .accordion-item',
						start: 'top center',
					},
					duration: 0.5,
					x: 0,
					opacity: 1,
					stagger: 0.2,
				})
				gsap.to('.support__logo-cont', {
					scrollTrigger: '.support__logo-cont',
					duration: 0.5,
					x: 0,
					opacity: 1,
				})
				gsap.to('.support__time', {
					scrollTrigger: '.support__time',
					duration: 0.5,
					x: 0,
					opacity: 1,
				})
				gsap.to('.support__links', {
					scrollTrigger: '.support__links',
					duration: 0.5,
					x: 0,
					opacity: 1,
				})
			},
		})

		return () => {
			ScrollTrigger.killAll()
		}
	}, [])

	return (
		<MainLayout title="CashMove">
      <FirstBlock />
      <ServiceInfo />
			<HowItWorksBlock slide={howToSlide} />
			<ReviewsBlock />
			<FooterBlock />
		</MainLayout>
	)
}

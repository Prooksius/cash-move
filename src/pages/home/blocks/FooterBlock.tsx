import { LogoIcon } from '@components/icons/LogoIcon'
import React, { useEffect } from 'react'
import Facebook from '@assets/img/facebook.svg'
import Twitter from '@assets/img/twitter.svg'
import Insta from '@assets/img/insta.svg'
import { EarPhonesIcon } from '@components/icons/EarPhonesIcon'
import { ChatIcon } from '@components/icons/ChatIcon'
import FaqAccordion from './FaqAccordion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
}

const FooterBlock = () => {
	useEffect(() => {
		ScrollTrigger.matchMedia({
			'(min-width: 768px)': () => {
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
	}, [])

	return (
		<footer id="footer">
			<div className="container">
				<div className="footer__row_1">
					<div className="footer__faq">
						<FaqAccordion />
					</div>
					<div className="footer__support">
						<div className="support__logo-cont">
							<LogoIcon
								className="support__logo"
								height={96}
								width={96}
								color={'var(--link-color)'}
							/>
						</div>
						<div className="support__time">24/7 Support</div>
						<div className="support__links">
							<a href="#" className="support__link">
								<EarPhonesIcon />
								Call us
							</a>
							<a href="#" className="support__link">
								<ChatIcon />
								Chat with us
							</a>
						</div>
					</div>
				</div>
				<div className="footer__row_2">
					<div className="footer__logo">
						<LogoIcon />
						<span>CashMove</span>
					</div>
					<nav className="footer__nav">
						<ul>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Help</a>
							</li>
							<li>
								<a href="#">Legal</a>
							</li>
						</ul>
					</nav>
					<div className="footer__button">
						<button className="btn btn-blue" type="button">
							For exchanger
						</button>
					</div>
				</div>
				<div className="footer__row_3">
					<div className="footer__copyright">
						© 2021-2023 CashMove, License #1023043943
					</div>
					<div className="footer__social_media social_media">
						<a className="social_media__link" href="#">
							<img src={Facebook} />
						</a>
						<a className="social_media__link" href="#">
							<img src={Twitter} />
						</a>
						<a className="social_media__link" href="#">
							<img src={Insta} />
						</a>
					</div>
					<div className="footer__language language">
						<span>English</span>
						<span className="flag flag-gb"></span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterBlock

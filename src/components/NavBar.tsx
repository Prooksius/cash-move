import React, { MouseEvent } from 'react'
import gsap from 'gsap'
import classNames from 'classNames'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'

const links = [
	{
		id: 0,
		title: 'How it works',
		href: 'section_how_it_works',
	},
	{
		id: 1,
		title: 'Reviews',
		href: 'section_reviews',
	},
	{
		id: 2,
		title: 'FAQ',
		href: 'footer',
	},
]

const NavBar = () => {
	const step = useSelector((state: RootState) => state.globals.calcStep)

	const handleNav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault()

		const el = document.getElementById(href)
		const changing = {
			value: window.pageYOffset,
			endValue: el!.getBoundingClientRect().top - window.pageYOffset,
		}

		gsap.to(changing, {
			value: changing.endValue,
			duration: 0.5,
			onUpdate: () => {
				window.scrollTo(0, changing.value)
			},
		})
	}

	return (
		<div className={classNames('header__nav', { cloacked: step > 0 })}>
			{links.map((item) => (
				<a
					href={'#' + item.href}
					key={item.id}
					onClick={(e) => handleNav(e, item.href)}
				>
					{item.title}
				</a>
			))}
		</div>
	)
}

export default NavBar

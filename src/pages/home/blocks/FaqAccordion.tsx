import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import classNames from 'classNames'

export interface TAccordionItem {
	id: number
	question: string
	answer: string
	open: boolean
}

const questions: TAccordionItem[] = [
	{
		id: 0,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: true,
	},
	{
		id: 1,
		question: "Can the exchanger get the money if I haven't received it",
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 2,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 3,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 4,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 5,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 6,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
	{
		id: 7,
		question: 'Are you working until approval?',
		answer:
			'His room, a real one, maybe too small, but an ordinary room, peacefully rested in its four well-known walls. Waking up one morning after a restless sleep, Gregor Samsa found that he had turned into a terrible insect in his bed',
		open: false,
	},
]

const FaqAccordion = () => {
	const [items, setItems] = useState(questions)

	const handleToggle = (id: number) => {
		console.log('id', id)
		setItems(
			items.map((item) => {
				if (item.id !== id) {
					return { ...item, open: false }
				}
				return { ...item, open: !item.open }
			})
		)
	}

	return (
		<div className="footer__faq">
			<h2 className="faq__title">FAQ</h2>
			{items.map((item, index) => (
				<div className="accordion-item" key={index}>
					<div className="accordion-header">
						<button
							className={classNames('accordion-button', {
								collapsed: !item.open,
							})}
							type="button"
							onClick={() => handleToggle(item.id)}
						>
							{item.question}
						</button>
					</div>
					<Collapse isOpened={item.open}>
						<div className="accordion-body">{item.answer}</div>
					</Collapse>
				</div>
			))}
		</div>
	)
}

export default FaqAccordion

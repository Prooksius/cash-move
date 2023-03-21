import React from 'react'

interface CheckProps {
	color?: string
}

export const CheckIcon: React.FC<CheckProps> = ({ color = '#222222' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 17.6 17.5"
		>
			<path
				d="M6.7,12.1L1.7,7.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.7,5.7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l9.9-9.9
	c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.7,12.1z"
				fill={color}
			/>
		</svg>
	)
}

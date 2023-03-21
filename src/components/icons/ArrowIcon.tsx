import React from 'react'

interface ArrowIconProps {
  color: string
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ color }) => {
	return (
		<svg
			width="33"
			height="23"
			viewBox="0 0 33 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.0607 12.5607C32.6464 11.9749 32.6464 11.0251 32.0607 10.4393L22.5147 0.893398C21.9289 0.307611 20.9792 0.307611 20.3934 0.893398C19.8076 1.47919 19.8076 2.42893 20.3934 3.01472L28.8787 11.5L20.3934 19.9853C19.8076 20.5711 19.8076 21.5208 20.3934 22.1066C20.9792 22.6924 21.9289 22.6924 22.5147 22.1066L32.0607 12.5607ZM0 13H31V10H0V13Z"
				fill={color}
			/>
		</svg>
	)
}

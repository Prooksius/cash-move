import React from 'react'

interface WCoinIconProps {
	className: string
}

export const WCoinIcon: React.FC<WCoinIconProps> = ({ className }) => {
	return (
		<svg
			className={className}
			width="128"
			height="130"
			viewBox="0 0 128 130"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.6" filter="url(#filter0_f_207_1786)">
				<path
					d="M38.5939 74.8246C38.2694 83.9074 45.5446 91.4473 54.6333 91.4473H73.1683C81.8093 91.4473 88.8993 84.6061 89.2078 75.9706L89.7187 61.6707C89.9112 56.2801 87.3831 51.1532 82.9893 48.0242L74.0098 41.6296C68.4373 37.6613 60.9621 37.6613 55.3897 41.6296L45.8191 48.4452C41.7549 51.3394 39.2679 55.9593 39.0897 60.9456L38.5939 74.8246Z"
					fill="black"
				/>
			</g>
			<path
				d="M17.543 71.1466C17.543 76.7503 22.0856 81.293 27.6893 81.293H70.8113C76.4149 81.293 80.9576 76.7503 80.9576 71.1466V38.5121C80.9576 34.8196 78.9516 31.4186 75.72 29.6322L54.159 17.7135C51.1044 16.0249 47.3962 16.0249 44.3416 17.7135L22.7806 29.6322C19.549 31.4186 17.543 34.8196 17.543 38.5121V71.1466Z"
				fill="#4EBB66"
			/>
			<path
				d="M17.543 71.1466C17.543 76.7503 22.0856 81.293 27.6893 81.293H70.8113C76.4149 81.293 80.9576 76.7503 80.9576 71.1466V38.5121C80.9576 34.8196 78.9516 31.4186 75.72 29.6322L54.159 17.7135C51.1044 16.0249 47.3962 16.0249 44.3416 17.7135L22.7806 29.6322C19.549 31.4186 17.543 34.8196 17.543 38.5121V71.1466Z"
				fill="url(#paint0_linear_207_1786)"
				fillOpacity="0.4"
			/>
			<path
				d="M17.543 71.1466C17.543 76.7503 22.0856 81.293 27.6893 81.293H70.8113C76.4149 81.293 80.9576 76.7503 80.9576 71.1466V38.5121C80.9576 34.8196 78.9516 31.4186 75.72 29.6322L54.159 17.7135C51.1044 16.0249 47.3962 16.0249 44.3416 17.7135L22.7806 29.6322C19.549 31.4186 17.543 34.8196 17.543 38.5121V71.1466Z"
				fill="url(#paint1_linear_207_1786)"
				fillOpacity="0.4"
			/>
			<path
				d="M65.2794 49.3469V51.824H34.7206V49.3469H65.2794ZM65.2794 53.7269V56.2041H34.7206V53.7269H65.2794ZM39.0781 42.9401L43.278 58.9627H43.4694L47.7931 42.9401H52.2069L56.5306 58.9965H56.722L60.9219 42.9401H65.3808L59.2667 66H54.3012L50.1013 50.9233H49.9212L45.6988 66H40.7333L34.6192 42.9401H39.0781Z"
				fill="#A9F4BA"
			/>
			<defs>
				<filter
					id="filter0_f_207_1786"
					x="0.534718"
					y="0.604542"
					width="127.243"
					height="128.892"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="19.0244"
						result="effect1_foregroundBlur_207_1786"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_207_1786"
					x1="23.3742"
					y1="81.293"
					x2="40.4403"
					y2="49.3488"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_207_1786"
					x1="81"
					y1="90"
					x2="51"
					y2="51.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset="1" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	)
}

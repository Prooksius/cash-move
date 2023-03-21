import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Icon1 from '@assets/img/how_it_works/icon_1.svg'
import Icon2 from '@assets/img/how_it_works/icon_2.svg'
import Icon3 from '@assets/img/how_it_works/icon_3.svg'
import Icon4 from '@assets/img/how_it_works/icon_4.svg'
import Icon5 from '@assets/img/how_it_works/icon_5.svg'
import Icon6 from '@assets/img/how_it_works/icon_6.svg'

interface HowItWorksBlockProps {
	slide: number
}

const HowItWorksBlock: React.FC<HowItWorksBlockProps> = ({ slide }) => {
	const [mainSwiper, setMainSwiper] = useState<any>(null)

	useEffect(() => {
		if (mainSwiper) {
			mainSwiper.slideTo(slide)
		}
	}, [mainSwiper, slide])

	return (
		<section id="section_how_it_works" className="how_it_works">
			<div className="container">
				<h2 className="how_it_works__title wow animate__fadeInUp">
					How it works
				</h2>
			</div>
			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				//				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => setMainSwiper(swiper)}
			>
				<SwiperSlide>
					<div className="container">
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon1} alt="Иконка" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									Create request for an exchange
								</div>
								<div className="how_it_works__card_description">
									More than 130 countries and 60 currencies
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img rotate">
								<img src={Icon2} alt="Иконка" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									System finds relevant exchangers
								</div>
								<div className="how_it_works__card_description">
									More than 1000 exchangers with confirmed and reserved funds
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon3} className="shadow-shift" alt="Иконка" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									Confirm rates of exchangers offers and deposite money
								</div>
								<div className="how_it_works__card_description">
									For your guarantee same amount of money blocks on exchanger’s
									wallet
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon4} className="shadow-shift" alt="Иконка" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									For your guarantee same amount of money blocks on exchanger’s
									wallet
								</div>
								<div className="how_it_works__card_description">
									Money holds in the system without transfering to the exchanger
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img
									src={Icon5}
									style={{ paddingBottom: '20px' }}
									alt="Иконка"
								/>
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									Get your money and confirm that in system
								</div>
								<div className="how_it_works__card_description">
									Money holds in the system without transfering to the exchanger
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon6} className="shadow-shift" alt="Иконка" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									Exchanger get his money and you get yours without a risk
								</div>
								<div className="how_it_works__card_description">
									Money holds in the system without transfering to the exchanger
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HowItWorksBlock

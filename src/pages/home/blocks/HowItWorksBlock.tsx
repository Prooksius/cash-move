import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Icon1 from '@assets/img/how_it_works/icon_1.svg'
import Icon2 from '@assets/img/how_it_works/icon_2.svg'
import Icon3 from '@assets/img/how_it_works/icon_3.svg'
import Icon4 from '@assets/img/how_it_works/icon_4.svg'
import Icon5 from '@assets/img/how_it_works/icon_5.svg'
import Icon6 from '@assets/img/how_it_works/icon_6.svg'
import { listTraslations } from '@store/slices/globalsSlice'
import { useSelector } from 'react-redux'

interface HowItWorksBlockProps {
	slide: number
}

const HowItWorksBlock: React.FC<HowItWorksBlockProps> = ({ slide }) => {
	const translations = useSelector(listTraslations)

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
					{translations('HowItWorksTitle')}
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
								<img src={Icon1} alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide1Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide1Desc')}
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img rotate">
								<img src={Icon2} alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide2Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide2Desc')}
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon3} className="shadow-shift" alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide3Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide3Desc')}
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon4} className="shadow-shift" alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide4Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide4Desc')}
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon5} style={{ paddingBottom: '20px' }} alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide5Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide5Desc')}
								</div>
							</div>
						</div>
						<div className="how_it_works__card">
							<div className="how_it_works__card_img">
								<img src={Icon6} className="shadow-shift" alt="icon" />
							</div>
							<div className="how_it_works__card_info">
								<div className="how_it_works__card_title">
									{translations('HowItWorksSlide6Title')}
								</div>
								<div className="how_it_works__card_description">
									{translations('HowItWorksSlide6Desc')}
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

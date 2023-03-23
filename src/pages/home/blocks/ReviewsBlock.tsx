import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Star from '@assets/img/star.svg'
import { allReviews } from '@store/translations'
import { listLang } from '@store/slices/globalsSlice'
import { useSelector } from 'react-redux'

const ReviewsBlock = () => {
	const lang = useSelector(listLang)

	return (
		<section id="section_reviews" className="reviews">
			<div className="container">
				<h2 className="reviews__title">
					<span className="wow animate__fadeInUp">Featured reviews</span>
				</h2>
				<Swiper
					className="reviews-swiper"
					spaceBetween={50}
					slidesPerView={1}
					breakpoints={{
						576: {
							spaceBetween: 30,
							slidesPerView: 1,
						},
						768: {
							spaceBetween: 50,
							slidesPerView: 1,
						},
						1160: {
							spaceBetween: 100,
							slidesPerView: 1.21,
						},
						1300: {
							spaceBetween: 200,
							slidesPerView: 1.21,
						},
					}}
					//				onSlideChange={() => console.log('slide change')}
					//				onSwiper={(swiper) => console.log(swiper)}
				>
					{allReviews.map((review, index) => (
						<SwiperSlide key={index}>
							<div className="reviews__slide">
								<img
									className="reviews__img"
									src={review.avatar}
									alt={review.name[lang]}
								/>
								<div className="reviews__content">
									<div className="reviews__rating">
										<img src={Star} />
										<img src={Star} />
										<img src={Star} />
										<img src={Star} />
										<img src={Star} />
									</div>
									<div
										className="reviews__comment"
										style={{ fontSize: review.font }}
									>
										{review.text[lang]}
									</div>
									<div className="reviews__author">{review.name[lang]}</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ReviewsBlock

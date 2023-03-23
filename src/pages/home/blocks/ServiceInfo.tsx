import React from 'react'
import ServiceImg from '@assets/img/service.png'
import { listTraslations } from '@store/slices/globalsSlice'
import { useSelector } from 'react-redux'

const ServiceInfo = () => {
	const translations = useSelector(listTraslations)

	return (
		<section className="service-info">
			<div className="container">
				<div className="service-info__row">
					<div className="service-info__image">
						<img src={ServiceImg} alt="service info" />
					</div>
					<div className="service-info__text">
						{translations('ServiceInfoText')}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceInfo

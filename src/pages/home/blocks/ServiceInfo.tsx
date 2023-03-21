import React from 'react'
import ServiceImg from '@assets/img/service.png'

const ServiceInfo = () => {
	return (
		<section className="service-info">
			<div className="container">
				<div className="service-info__row">
					<div className="service-info__image">
						<img src={ServiceImg} alt="service info" />
					</div>
					<div className="service-info__text">
						Сервис позволяет перемещать ваши средства между странами, соединяя
						криптообменники из разных стран и выступая гарантом. Просто укажите
						какую валюту отдаете и какую хотите получить, а система сама создаст
						сделку и подберет верифицированные обменники, готовые выполнить ваш
						запрос. Ваши деньги будут зарезериврованы в системе и не поступят
						обменнику пока вы не получите выплату по вашему обмену.
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceInfo

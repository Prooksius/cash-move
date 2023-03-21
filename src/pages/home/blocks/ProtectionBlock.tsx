import { ProtectIcon } from '@components/icons/ProtectIcon'
import React from 'react'

const ProtectionBlock = () => {
	return (
		<div className="calculator-block__protection">
			<ProtectIcon />
			<p>
				The service connects the exchangers and the client without transferring
				money acting as a guarantor of your funds
			</p>
		</div>
	)
}

export default ProtectionBlock

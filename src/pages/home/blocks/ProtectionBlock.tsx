import { ProtectIcon } from '@components/icons/ProtectIcon'
import { listTraslations } from '@store/slices/globalsSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const ProtectionBlock = () => {
  const translations = useSelector(listTraslations)

	return (
		<div className="calculator-block__protection">
			<ProtectIcon />
			<p>{translations('ProtectionText')}</p>
		</div>
	)
}

export default ProtectionBlock

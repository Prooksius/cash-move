import classNames from 'classNames'
import React, { ReactNode, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createSlot } from 'react-slotify'

export const PopupHeaderSlot = createSlot()
export const PopupFooterSlot = createSlot()

interface PopuperProps {
	opened: boolean
	width?: string
	height?: string
	contentType: string | undefined
	closeHandler(): void
	unmountHandler(): void
	children: ReactNode
}

const Popuper: React.FC<PopuperProps> = ({
	opened,
	width = '300px',
	height = 'auto',
	contentType,
	closeHandler,
	unmountHandler,
	children,
}) => {
	const handleWrapperClick = (event: React.MouseEvent) => {
		if (
			event.target instanceof Element &&
			event.target.classList.contains('modal-wrapper')
		) {
			document.querySelector('body')!.classList.remove('noscroll')
			closeHandler()
		}
	}

	const escPressed = (event: KeyboardEvent) => {
		if (event.keyCode === 27) {
			document.querySelector('body')!.classList.remove('noscroll')
			closeHandler()
		}
	}

	useEffect(() => {
		document.addEventListener('keyup', escPressed)
		return () => {
			document.removeEventListener('keyup', escPressed)
		}
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (opened) {
			document.querySelector('body')!.classList.add('noscroll')
		} else {
			document.querySelector('body')!.classList.remove('noscroll')
		}
	}, [opened])

	return (
		<CSSTransition
			classNames={'modal'}
			in={opened}
			timeout={300}
			unmountOnExit={true}
			onExited={unmountHandler}
		>
			<div className="modal modal-mask">
				<div className="modal-wrapper" onClick={handleWrapperClick}>
					<div
						className={classNames(
							'modal-container',
							{
								'full-width':
									contentType === 'video' || contentType === 'image',
							},
							{ 'video-content': contentType === 'video' },
							{ 'picture-content': contentType === 'image' }
						)}
						style={{ width, height }}
					>
						<div className="modal-inner">
							<svg
								className={classNames('close', {
									outside: contentType === 'video' || contentType === 'image',
								})}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								onClick={closeHandler}
							>
								<path d="M20 20L4 4m16 0L4 20"></path>
							</svg>
							<div className="modal-header">
								<PopupHeaderSlot.Renderer childs={children} />
							</div>
							<div className="modal-body">{children}</div>
							<div className="modal-footer">
								<PopupFooterSlot.Renderer childs={children} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Popuper

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import NavBar from '@components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@store/store'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LogoIcon } from '@components/icons/LogoIcon'
import { RootState } from '@store/index'
import {
	setSignUpOpened,
} from '@store/slices/globalsSlice'
import Popuper, { PopupHeaderSlot } from '@components/Popuper'
import SignUp from '@pages/popups/SignUp'

interface MainLayoutProps {
	title: string
	children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
	const dispatch = useDispatch<AppDispatch>()
	const signUpOpened = useSelector(
		(state: RootState) => state.globals.signUpOpened
	)

	return (
		<>
			<div className="wrapper">
				<header>
					<div className="container wide">
						<div className="header__row">
							<div className="header__logo">
								<NavLink to="/">
									<LogoIcon />
									<span>CashMove</span>
								</NavLink>
							</div>
							<NavBar />
							<div className="header__account">
								<button
									type="button"
									className="btn btn-white"
									onClick={() => dispatch(setSignUpOpened(true))}
								>
									Sign up
								</button>
							</div>
						</div>
					</div>
				</header>
				{children}
			</div>
			{signUpOpened}
			<Popuper
				opened={signUpOpened}
				closeHandler={() => dispatch(setSignUpOpened(false))}
				unmountHandler={() => {}}
				width={'400px'}
				contentType={undefined}
			>
				<PopupHeaderSlot>
					<h3>Sign up</h3>
				</PopupHeaderSlot>
				<SignUp />
			</Popuper>

			<ToastContainer position="top-right" autoClose={2000} theme={'colored'} />
		</>
	)
}

export default MainLayout

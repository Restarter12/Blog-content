import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/index.scss'
import { Header } from './components/layout/header/Header'
import { Sidebar } from './components/layout/sidebar/Sidebar'
import { Main } from './components/layout/main/Main'
import { Profile } from './components/profile/Profile.jsx'
import { About } from './components/about/About.jsx'
import { Adds } from './components/adds/Adds.jsx'

function App() {
	const [searchQuery, setSearchQuery] = useState('')
	const [userData, setUserData] = useState(() => {
		const savedUser = localStorage.getItem('users')
		if (savedUser) {
			const parsed = JSON.parse(savedUser)
			return {
				firstName: 'Асхаб',
				lastName: 'Юсупов',
				workJob: 'блог front-end разработчика',
				avatar: '/images/avatar.png',
				...parsed, 
			}
		} else {
			// Начальные значения
			return {
				firstName: 'Асхаб',
				lastName: 'Юсупов',
				workJob: 'блог front-end разработчика',
				avatar: '/images/avatar.png',
			}
		}
	})

	useEffect(() => {
		if (Object.keys(userData).length > 0) {
			localStorage.setItem('users', JSON.stringify(userData))
		}
	}, [userData])

	useEffect(() => {
		const savedUser = localStorage.getItem('users')
		if (savedUser) {
			const parsedUser = JSON.parse(savedUser)
			setUserData(prev => ({
				...prev, 
				...parsedUser, 
			}))
		}
	}, [])
	const updateUserData = newData => {
		setUserData(prev => ({
			...prev,
			...newData,
			avatar: prev.avatar, 
		}))
	}

	const handleSearchChange = e => {
		setSearchQuery(e.target.value)
	}

	return (
		<Router>
			<div className='app'>
				<Sidebar {...userData} onUpdate={updateUserData} />
				<div className='content-area'>
					<Header
						onSearchChange={handleSearchChange}
						searchPlaceholder='Поиск по постам...'
					/>
					<main className='main'>
						<Routes>
							<Route path='/' element={<Main searchQuery={searchQuery} />} />
							<Route
								path='/profile'
								element={<Profile {...userData} onUpdate={updateUserData} />}
							/>
							<Route path='/adds' element={<Adds />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	)
}

export default App

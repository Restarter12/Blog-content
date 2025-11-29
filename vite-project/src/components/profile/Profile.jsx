import { useEffect, useState } from 'react'
import style from './profile.module.scss'

export const Profile = ({ firstName, lastName, workJob, avatar, onUpdate }) => {
	const [formatData, setFormatData] = useState({
		firstName: firstName || '',
		lastName: lastName || '',
		workJob: workJob || '',
	})

	useEffect(() => {
		setFormatData({
			firstName: firstName || '',
			lastName: lastName || '',
			workJob: workJob || '',
		})
	}, [firstName, lastName, workJob])

	const handleChange = (field, value) => {
		setFormatData(prev => ({
			...prev,
			[field]: value,
		}))
	}
	return (
		<div className={style.profileContainer}>
			<div className={style.profilePersonalSection}>
				<h1 className={style.profileHeading}>Профиль</h1>
				<input
					className={style.profilePersonal}
					value={formatData.firstName}
					onChange={e => handleChange('firstName', e.target.value)}
					placeholder='Введите имя'
				/>
				<input
					className={style.profilePersonal}
					value={formatData.lastName}
					onChange={e => handleChange('lastName', e.target.value)}
					placeholder='Введите фамилию'
				/>
				<input
					className={style.profilePersonal}
					value={formatData.workJob}
					onChange={e => handleChange('workJob', e.target.value)}
					placeholder='Введите специальность'
				/>	
				<button
					onClick={() => {
						onUpdate(formatData)
					}}
					className={style.profileBtn}
				>
					Сохранить
				</button>
			</div>
			<div className='avatar'>
				{/* Просто показываем дефолтную картинку */}
				<img src={avatar} alt='avatar' className={style.avatar} />
			</div>
		</div>
	)
}

import style from './header.module.scss'
import { Link } from 'react-router-dom'

// Массив для кнопок слева в хедере - добавляем пути
const LeftButtons = [
	{ id: 1, label: 'Главная', path: '/' },
	{ id: 2, label: 'Обо мне', path: '/about' },
	{ id: 3, label: 'Реклама', path: '/adds' },
	{ id: 4, label: 'Подписки', path: '/subscriptions' },

]

// Массив для кнопки справа в хедере 
const RightButton = [{ id: 4, label: 'Профиль', path: '/profile' }]

export const Header = ({
	leftButtons = LeftButtons,
	rightButton = RightButton,
	searchPlaceholder = 'Поиск по блоку',
	onSearchChange,
}) => {
	return (
		<header className={style.header}>
			<div className={style.headerContainer}>
				<nav className={style.headerNav}>
					<div className={style.headerNavLeft}>
						{leftButtons.map(button => (
							<Link 
								key={button.id} 
								to={button.path}
								className={style.headerBtn}
							>
								{button.label}
							</Link>
						))}
					</div>
					<div className={style.headerNavRight}>
						{rightButton.map(button => (
							<Link 
								key={button.id} 
								to={button.path}
								className={style.headerBtn}
							>
								{button.label}
							</Link>
						))}
						<input
							className={style.headerInput}
							type='text'
							placeholder={searchPlaceholder}
							onChange={onSearchChange}
						/>
					</div>
				</nav>
			</div>
		</header>
	)
}
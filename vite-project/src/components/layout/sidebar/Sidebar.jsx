import styles from './sidebar.module.scss'

export const Sidebar = ({ firstName, lastName, workJob, avatar }) => {
	return (
		<div className={styles.sideBar}>
			<div className={styles.container}>
				<img
					src='/images/rectangle-sidebar.jpg'
					alt='background'
					className={styles.bg}
				/>

				<div className={styles.sideBarContainer}>
					<div className={styles.sideBarAboutMe}>
						<img
							src={avatar}
							alt='avatar'
							className={styles.avatar}
						/>
						<p className={styles.name}>
							{firstName} {lastName}
						</p>
						<span className={styles.jobInfo}>{workJob}</span>
						<div className={styles.socialNetWork}>
							<ul>
								<li>
									<a href='https://github.com/Restarter12?tab=repositories'>
										<i class="fab fa-brands fa-github"></i>
									</a>
								</li>
								<li>
									<a href='https://t.me/YusProgDevelop'>
										<i className='fab fa-brands fa-telegram'></i>
									</a>
								</li>
								<li>
									<a href='https://www.instagram.com/yusprog?igsh=anE4cWtodWoyeWR4&utm_source=qr'>
										<i className='fab fa-brands fa-instagram'></i>
									</a>
								</li>
							</ul>
						</div>
						<hr className={styles.sideBarLine} />
						<span className={styles.sideBarAbout}>
							Front-end разработчик. Практик верстки сайтов. Созданием сайтов
							занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и
							наработал более 10 000 часов в создании сайтов различной
							сложности.
						</span>
						<hr className={styles.sideBarLine} />
						<div className={styles.sideBarBtn}>
							<a href='#'>
								<button className={styles.btnWorks}>Подписаться</button>
							</a>
							<a href='https://t.me/YusProgDevelop'>
								<button className={styles.btnMessage}>Написать мне</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

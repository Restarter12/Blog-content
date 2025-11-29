import style from './main.module.scss'
import { InputMain } from '../../UX/input-main/InputMain'
import { useEffect, useState } from 'react'
import { Posts } from '../../UX/posts/posts'
import { InputHeadingMain } from '../../UX/input-heading-main/InputHeadingMain'

export const Main = ({ searchQuery = '' }) => {
	const [posts, setPosts] = useState([])
	const [currentTitle, setCurrentTitle] = useState('')
	const [currentTheme, setCurrentTheme] = useState('')
	const [themeError, setThemeError] = useState(false)

	// Функция добавление поста
	const handleAddPost = newPost => {
		if (!currentTheme.trim()) {
			setThemeError(true)
			return
		}
		const postWithTitle = {
			...newPost,
			...(currentTitle.trim() && { title: currentTitle.trim() }),
			...(currentTheme.trim() && { theme: currentTheme.trim() }),
		}
		setPosts(prevPosts => [postWithTitle, ...prevPosts])
		setCurrentTitle('')
		setCurrentTheme('')
	}

	// Функция удаления
	const removePost = postId => {
		const updatedPosts = posts.filter(post => post.id !== postId)
		setPosts(updatedPosts)
	}

	// Загрузка из LocalStorage
	useEffect(() => {
		const savedPosts = localStorage.getItem('posts')

		if (savedPosts && savedPosts !== '[]') {
			const parsedPosts = JSON.parse(savedPosts)

			const postsWithDates = parsedPosts.map(post => ({
				...post,
				timestamp: new Date(post.timestamp),
			}))
			setPosts(postsWithDates)
		}
	}, [])

	// Сохранение в LocalStorage
	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts))
	}, [posts])

	// Поиск

	const filteredPosts = searchQuery
		? posts.filter(post => {
				const query = searchQuery.toLowerCase()
				const text = (post.text || '').toLowerCase()
				const title = (post.title || '').toLowerCase()
				const theme = (post.theme || '').toLowerCase() // Защита от undefined

				return (
					text.includes(query) || title.includes(query) || theme.includes(query)
				)
		  })
		: posts

	return (
		<>
			<main className={style.main}>
				<div className={style.mainContainer}>
					<InputHeadingMain
						currentTitle={currentTitle}
						onTitleChange={setCurrentTitle}
						currentTheme={currentTheme}
						onThemeChange={setCurrentTheme}
						showError={themeError}
						onErrorChange={setThemeError}
					/>
					<InputMain onPostAdd={handleAddPost} />
					<Posts posts={filteredPosts} onDeletePost={removePost} />
				</div>
			</main>
		</>
	)
}

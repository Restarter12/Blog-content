import style from './inputMain.module.scss'
import { useState, useRef } from 'react'

export const InputMain = ({
	placeholderMain = 'Напишите что-нибудь',
	onPostAdd,
}) => {
	const [inputText, setInputText] = useState('')
	const [selectedImage, setSelectedImage] = useState(null)
	const [inputImage, setInputImage] = useState(null)
	const [text, setText] = useState('')

	const inputImageRef = useRef(null)
	const inputRef = useRef(null)

	const handleAddPost = () => {
		const trimmedText = inputText.trim()

		if (trimmedText === '') {
			alert('Пожалуйста введите текст')
			inputRef.current?.focus()
			return
		}
		const newPost = {
			id: Date.now(),
			text: trimmedText,
			timestamp: new Date(),
			image: inputImage,
		}

		if (onPostAdd) {
			onPostAdd(newPost)
		}

		setInputText('')
		setSelectedImage(null)
		setInputImage(null)
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	const handleRemoveImage = () => {
		setSelectedImage(null)
		setInputImage(null)
		if (inputImageRef.current) {
			inputImageRef.current.value = ''
		}
	}

	const handleImageSelecet = e => {
		const file = e.target.files[0]
		if (file) {
			if (!file.type.startsWith('image/')) {
				alert('Пожалуйста выберите файл изображения')
				return
			}
			if (file.size > 5 * 1024 * 1024) {
				alert('Размер файла не должен превышать 5MB')
				return
			}

			setSelectedImage(file)
			const reader = new FileReader()
			reader.onload = e => {
				setInputImage(e.target.result)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim()) {
			const newPost = {
				id: Date.now(),
				text: text.trim(),
				timestamp: new Date(),
				image: inputImage,
			}
			onPostAdd(newPost)
			setText('')
		}
	}

	return (
		<div className={style.container}>
			<form onSubmit={handleSubmit}>
				<textarea
					ref={inputRef}
					className={style.textAreaMain}
					placeholder={placeholderMain}
					value={inputText}
					onChange={e => setInputText(e.target.value)}
				/>
				{selectedImage && (
					<div className={style.fileName}>
						<span className={style.fileNameSpan}>Файл: {selectedImage.name}</span>
						<button
							type='button'
							className={style.removeFileBtn}
							onClick={handleRemoveImage}
						>
							×
						</button>
					</div>
				)}
				<input
					ref={inputImageRef}
					type='file'
					accept='image/*'
					onChange={handleImageSelecet}
					style={{ display: 'none' }}
					id='file-input'
				/>
				<label htmlFor='file-input' className={style.fileInputLabel}>
					<img src='/images/photo-btn.png' alt='Add image' />
				</label>
				<button
					className={style.mainInputBtn}
					onClick={handleAddPost}
					disabled={!inputText.trim()}
				>
					<img src='/images/send.svg' alt='' />
				</button>
			</form>
		</div>
	)
}

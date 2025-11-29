import style from './posts.module.scss'

export const Posts = ({ posts, onDeletePost }) => {
	const removePost = postId => {
		if (onDeletePost) {
			onDeletePost(postId)
		}
	}

	return (
		<div className={style.postSection}>
			{posts.length === 0 ? (
				<div className={style.noPosts}>
					<p>Пока нет постов</p>
					<span>Напишите что-нибудь выше чтобы создать первый пост!</span>
				</div>
			) : (
				posts.map(post => (
					<div key={post.id} className={style.postContainer}>
						{post.image && (
							<div className={style.postImage}>
								<img src={post.image} alt='Изображение поста' />
							</div>
						)}
						<div className={style.postUpText}>
							{post.title && <h3 className={style.postTitle}>{post.title}</h3>}
							<p className={style.postText}>
								{post.text.split('\n').map((line, index) => (
									<span key={index}>
										{line}
										<br />
									</span>
								))}
							</p>
						</div>

						<div className={style.postDown}>
							<span className={style.postSpanTime}>
								{post.timestamp.toLocaleDateString('ru-RU')}
								{post.theme && (
									<span className={style.postTheme}>&#9675; {post.theme}</span>
								)}
							</span>
							<button
								className={style.postDeleteBtn}
								onClick={() => removePost(post.id)}
							>
								Удалить пост
							</button>
						</div>
					</div>
				))
			)}
		</div>
	)
}

import style from './inputHeading.module.scss'
import { useEffect } from 'react'

export const InputHeadingMain = ({ 
    onTitleChange, 
    currentTitle, 
    currentTheme, 
    onThemeChange,
    showError = false,
    onErrorChange 
}) => {
  
    useEffect(() => {
        if (showError && currentTheme.trim() && onErrorChange) {
            onErrorChange(false)
        }
    }, [currentTheme, showError, onErrorChange])

    const handleThemeChange = (value) => {
        onThemeChange(value)
    }

    return (
        <div className={style.inputHeadingContainer}>
            <input
                type='text'
                placeholder='Добавить заголовок (необязательно)'
                value={currentTitle}
                onChange={e => onTitleChange(e.target.value)}
                className={style.titleInput}
            />
            <div className={style.themeInputWrapper}>
                <input
                    type='text'
                    placeholder='Добавить тему поста (обязательно)'
                    value={currentTheme}
                    onChange={e => handleThemeChange(e.target.value)}
                    className={`${style.titleInput} ${showError ? style.inputError : ''}`}
                />
                {showError && (
                    <span className={style.errorMessage}>Пожалуйста, заполните это поле</span>
                )}
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import styles from './about.module.scss';

export const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      className: '',
      href: '#about',
      iconName: 'person',
      title: 'Обо мне',
      description: 'Краткая информация о моем опыте и навыках в веб-разработке'
    },
    {
      className: styles.cardDark,
      href: '#skills',
      iconName: 'code',
      title: 'Навыки',
      description: 'React, JavaScript, SCSS, HTML5 и другие технологии'
    },
    {
      className: '',
      href: '#projects',
      iconName: 'work',
      title: 'Проекты',
      description: 'Мои последние работы и достижения в разработке'
    },
    {
      className: styles.cardDark,
      href: '#contact',
      iconName: 'email',
      title: 'Контакты',
      description: 'Свяжитесь со мной для сотрудничества'
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>Обо мне</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <div className={`${styles.card} ${card.className}`}>
              <a 
                href={card.href}
                className={styles.cardLink}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  borderColor: hoveredCard === index ? '#5bc0eb' : '',
                  transform: hoveredCard === index ? 'translate(-30px, -30px)' : ''
                }}
              >
                <div 
                  className={styles.cardDisplay} 
                  style={{ display: hoveredCard === index ? 'none' : 'flex' }}
                >
                  <i className="material-icons">{card.iconName}</i>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                </div>
                <div 
                  className={styles.cardHover}
                  style={{ display: hoveredCard === index ? 'block' : 'none' }}
                >
                  <h2 className={styles.cardHoverTitle}>{card.title}</h2>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <p className={styles.cardLinkText}>Нажмите для подробностей</p>
                </div>
              </a>
              <div className={styles.cardBorder}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
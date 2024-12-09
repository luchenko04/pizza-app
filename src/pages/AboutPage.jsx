import React, { useState } from 'react';
import Header from "../components/Header"; // Импорт шапки
import Footer from "../components/Footer"; // Импорт подвала
import styles from "../styles/AboutPage.module.css"; // Импорт CSS

const AboutPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className={styles.aboutPage}>
      <Header />

      <section className={styles.aboutContent}>
        <h1>Про нас</h1>
        <p>
          "Clean Plate" - це ваш улюблений сервіс доставки піци, який пропонує широкий асортимент смачних страв. Ми намагаємося зробити ваше замовлення якомога зручнішим і швидшим. З нами ви можете насолоджуватися смачною піцою вдома чи на роботі, не виходячи з дому!
        </p>
        
        <img src="https://www.rbc.ua/static/img/4/5/457249942_18277534144214059_1391940969917634988_n_f8cdbb686ec961fb31a3b5d7f382db4b_1200x675.jpg" alt="Pizza delivery service" className={styles.aboutImage} />

        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${activeCard === 1 ? styles.active : ''}`} onClick={() => toggleCard(1)}>
            <h2>Деталі доставки</h2>
            {activeCard === 1 && (
              <div className={styles.cardContent}>
                <p>Ми забезпечуємо швидку доставку з точністю до вашого порогу. Зробіть замовлення прямо зараз і отримаєте вашу піцу в найкоротші терміни.</p>
              </div>
            )}
          </div>

          <div className={`${styles.card} ${activeCard === 2 ? styles.active : ''}`} onClick={() => toggleCard(2)}>
            <h2>Якість продуктів</h2>
            {activeCard === 2 && (
              <div className={styles.cardContent}>
                <p>Ми використовуємо тільки свіжі та якісні інгредієнти для приготування наших піц. Наші кухарі створюють кожну страву з любов'ю та ретельністю.</p>
              </div>
            )}
          </div>

          <div className={`${styles.card} ${activeCard === 3 ? styles.active : ''}`} onClick={() => toggleCard(3)}>
            <h2>Оплата та безпека</h2>
            {activeCard === 3 && (
              <div className={styles.cardContent}>
                <p>Ми пропонуємо різні методи оплати для вашої зручності. Ваша безпека та конфіденційність є нашим пріоритетом.</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.textSection}>
          <p>
            "Clean Plate" - це більше, ніж просто сервіс доставки піци. Ми прагнемо принести вам задоволення від їжі та створити незабутній досвід. Наша місія - робити доставку їжі максимально зручною та приємною для кожного клієнта.
          </p>
        </div>

        <div className={styles.gallery}>
          <img src="https://konkurent.ua/media/cache/be/42/be42c82481494b7f0830410d63c70cef.webp" alt="Pizza image 1" className={styles.galleryImage} />
          <img src="https://misto.biz.ua/sviatoshyn/wp-content/uploads/sites/34/2024/02/af1qipp2e9i4iy8xrpoprddhx789fqo3p8xzvrnzeullw1600-h1000-k-no.jpeg" alt="Pizza image 2" className={styles.galleryImage} />
          <img src="https://cdn.abo.media/upload/article/res/770-430/o_1hlk4jroehf3rcs4rulquvfv1k.jpg" alt="Pizza image 3" className={styles.galleryImage} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

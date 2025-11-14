import React, { useState } from 'react';
import styles from './Kontak.module.css';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import { FaStore, FaBars, FaCheckCircle } from 'react-icons/fa';

const Kontak = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    setToastMessage('Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className={styles.kontakPage}>
      {/* Toast Notification */}
      {showToast && (
        <div className={styles.toast}>
          <FaCheckCircle className={styles.toastIcon} />
          <div>
            <p className={styles.toastTitle}>Berhasil!</p>
            <p className={styles.toastMessage}>{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Hubungi Kami</h2>
          <p className={styles.heroSubtitle}>Kami siap melayani dan menjawab pertanyaan Anda</p>
          <div className={styles.heroBadges}>
            <div className={styles.badge}>
              <span>📞</span> Siaga 24/7
            </div>
            <div className={styles.badge}>
              <span>🚚</span> Pengiriman Cepat
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <div className={styles.leftSection}>
            <ContactForm onSubmit={handleFormSubmit} />
            <FAQ />
          </div>
          <div className={styles.rightSection}>
            <ContactInfo />
          </div>
        </div>
        <MapSection />
      </main>
    </div>
  );
};

export default Kontak;
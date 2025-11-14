import React from 'react';
import styles from '../Kontak.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <>
      {/* Quick Contact */}
      <div className={`${styles.card} ${styles.contactCard}`}>
        <h3 className={styles.cardTitle}>Informasi Kontak</h3>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <div>
              <p className={styles.infoLabel}>Alamat</p>
              <p className={styles.infoText}>Jl. Kota Baru, Desa Gedung Harapan</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.infoIcon} />
            <div>
              <p className={styles.infoLabel}>Telepon / WhatsApp</p>
              <p className={styles.infoText}>+62 838-0133-6796</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className={`${styles.card} ${styles.contactCard}`}>
        <h3 className={styles.cardTitle}>Jam Operasional</h3>
        <div className={styles.hoursList}>
          <div className={styles.hoursItem}>
            <span>Senin - Jumat</span>
            <span>08:00 - 17.00</span>
          </div>
          <div className={styles.hoursItem}>
            <span>Sabtu</span>
            <span>09:00 - 20:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span>Minggu</span>
            <span>10:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Social Media Links */}

      {/* WhatsApp Quick Chat */}
      <div className={styles.whatsappCard}>
        <div className={styles.whatsappContent}>
          <FaWhatsapp className={styles.whatsappIcon} />
          <h3>Butuh Bantuan Cepat?</h3>
          <p>Chat langsung dengan tim kami</p>
          <a href="https://wa.me/6283801336796" target="_blank" className={styles.whatsappBtn}>
            Chat Sekarang
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
import React from 'react';
import styles from '../Kontak.module.css';
import { FaMap, FaDirections } from 'react-icons/fa';

const MapSection = () => {
  const getDirections = () => {
    const url = "https://maps.app.goo.gl/BtSNjoMPXdAaoKV78"; 
    window.open(url, "_blank");
  };

  return (
    <div className={styles.mapSection}>
      <div className={styles.mapHeader}>
        <h3 className={styles.mapTitle}>
          <FaMap /> Lokasi UMKM Desa Gedung Harapan
        </h3>
      </div>
      <div className={styles.mapContainer}>
        <iframe
  src="https://www.google.com/maps/embed?pb=!4v1763116704974!6m8!1m7!1sB6KC5suZUBpZU1Ffd_PTOg!2m2!1d-5.336933330772118!2d105.3537032212227!3f175.58362!4f0!5f0.7820865974627469"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="Lokasi UMKM Desa Gedung Harapan"
/>

        <div className={styles.mapActions}>
          <button onClick={getDirections} className={styles.directionsBtn}>
            <FaDirections /> Petunjuk Arah
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
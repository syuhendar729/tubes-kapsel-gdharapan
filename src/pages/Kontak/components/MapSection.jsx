import React from 'react';
import styles from '../Kontak.module.css';
import { FaMap, FaDirections } from 'react-icons/fa';

const MapSection = () => {
  const getDirections = () => {
    const destination = "Jl. UMKM No. 123, Jakarta Selatan";
    const url = `https://maps.app.goo.gl/D4MaagFUp93gMeSi6=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
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
          src="https://www.google.com/maps/place/Gerbang+Utama+Institut+Teknologi+Sumatera+(Itera)/@-5.3575788,105.3148616,883m/data=!3m1!1e3!4m6!3m5!1s0x2e40c389218e080d:0xf2b5c40fe79e8bba!8m2!3d-5.3575788!4d105.3148616!16s%2Fg%2F11gwkmcmgd?hl=en&entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
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
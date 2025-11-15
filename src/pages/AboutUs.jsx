import React from 'react';
import './AboutUs.css'; // Impor file CSS yang akan kita buat

// Ganti [Nama Desa] dengan nama desa Anda
const namaDesa = "Gedung Harapan"; 

const AboutUs = () => {
  return (
    <main className="about-us-container">
      {/* Bagian 1: Siapa Kami */}
      <section className="who-we-are-section">
        <div className="container">
          <h1>Tentang Kami</h1>
          <h2>UMKM Lokal Desa {namaDesa}</h2>
          <p>
            Kami adalah sebuah UMKM yang berbasis di Desa {namaDesa}, yang didedikasikan untuk melestarikan dan memperkenalkan kekayaan kuliner tradisional kami.
          </p>
        </div>
      </section>

      {/* Bagian 2: Keunggulan Produk (Kotak Hijau) */}
      <section className="excellence-section">
        <div className="container">
          <div className="excellence-grid">
            <div className="excellence-item">
              <div className="icon">🍃</div>
              <h3>Produk Tradisional</h3>
              <p>Dibuat dengan resep tradisional khas {namaDesa}.</p>
            </div>
            <div className="excellence-item">
              <div className="icon">✨</div>
              <h3>Selalu Fresh</h3>
              <p>Kami selalu membuat produk baru saat ada pesanan, untuk menjamin kesegaran.</p>
            </div>
            <div className="excellence-item">
              <div className="icon">🌾</div>
              <h3>Bahan dari Desa</h3>
              <p>Menggunakan bahan-bahan berkualitas pilihan langsung dari petani lokal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 3: Dampak Sosial dan Ajakan (Diperbarui) */}
      <section className="impact-and-cta-section">
        <div className="container">
          <div className="columns-wrapper">
            <div className="impact-content">
              <h2>Dampak Sosial</h2>
              <p>
                Setiap pembelian yang Anda lakukan secara langsung berkontribusi pada peningkatan ekonomi keluarga di desa kami, memberdayakan perempuan lokal, serta menjaga kelestarian resep dan tradisi kami untuk generasi mendatang.
              </p>
            </div>
            
            <div className="divider"></div> {/* Garis Pembatas Vertikal */}
            
            <div className="cta-content">
              <h2>Dukung Kami</h2>
              <p>
                Bergabunglah bersama kami dalam melestarikan cita rasa Indonesia. Dengan memilih produk kami, Anda ikut serta dalam cerita positif Desa {namaDesa}.
              </p>
            </div>
          </div>
          
          {/* Tombol Lihat Produk dipindahkan ke sini */}
          <div className="cta-button-wrapper">
            <button className="cta-button">Lihat Produk</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
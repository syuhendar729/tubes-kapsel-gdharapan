import React, { useState } from 'react';
import styles from '../Kontak.module.css';
import { FaEnvelope, FaSpinner, FaWhatsapp } from 'react-icons/fa';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pertanyaan Umum',
    message: '',
    newsletter: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const sendToWhatsApp = (data) => {
    const phoneNumber = "6282178128638";

    const message =
`*Pesan Baru dari Website UMKM Nusantara*\n
*Nama:* ${data.name}\n
*Email:* ${data.email}\n
*Telepon:* ${data.phone || 'Tidak diisi'}\n
*Subjek:* ${data.subject}\n
*Pesan:* ${data.message}\n
*Dikirim:* ${new Date().toLocaleString('id-ID')}\n`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Kirim ke WhatsApp
      sendToWhatsApp(formData);
      
      // Callback ke parent component (untuk toast notification)
      onSubmit(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Pertanyaan Umum',
        message: '',
        newsletter: false
      });
      
      // Tampilkan sukses message
      console.log('Pesan berhasil dikirim ke WhatsApp!');
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <FaEnvelope /> Kirim Pesan
      </h3>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Nama Lengkap <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="John Doe"
            />
          </div>
           <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="0812-3456-7890"
            />
          </div>
        </div>
        
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Subjek</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
            >
              <option>Pertanyaan Umum</option>
              <option>Pemesanan Produk</option>
              <option>Keluhan</option>
              <option>Kerjasama</option>
              <option>Lainnya</option>
            </select>
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Pesan <span className={styles.required}>*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={styles.input}
            placeholder="Tuliskan pesan Anda di sini..."
          />
        </div>
        
        <div className={styles.formActions}>
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <FaSpinner className={styles.spinner} />
                Mengirim...
              </>
            ) : (
              <>
                <FaWhatsapp /> Kirim Pesanan
              </>
            )}
          </button>
        </div>
      </form>
      
      {/* Info Tambahan */}
      <div className={styles.whatsappInfo}>
        <p>
          <FaWhatsapp /> Pesan akan langsung terkirim ke WhatsApp kami. 
          Anda akan diarahkan ke WhatsApp setelah mengklik tombol kirim.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
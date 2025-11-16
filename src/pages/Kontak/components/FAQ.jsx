import React, { useState } from 'react';
import styles from '../Kontak.module.css';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Bagaimana cara pemesanan?",
      answer: "Anda dapat memesan melalui website, WhatsApp, atau datang langsung ke toko kami. Proses pemesanan mudah dan cepat dengan berbagai metode pembayaran."
    },
    {
      question: "Apakah produk yang dijual adalah produk lokal atau buatan sendiri?",
      answer: "Ya, seluruh produk yang kami jual adalah produk lokal yang dibuat langsung oleh warga Kampung Gedung Harapan. Setiap produk dikerjakan secara tradisional dengan bahan pilihan, sehingga memiliki kualitas yang baik dan cita rasa yang khas dari daerah kami."
    },
    {
      question: "Berapa lama proses pembuatan atau pengiriman produk setelah dipesan?",
      answer: "Proses pembuatan dan pengiriman membutuhkan waktu sekitar 4–5 hari untuk wilayah sekitar Kota Baru, Lampung Selatan. Waktu dapat bervariasi tergantung jumlah pesanan dan kondisi cuaca, namun kami selalu berusaha mengirim secepat mungkin."
    }
  ];

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <FaQuestionCircle /> Pertanyaan Umum
      </h3>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button 
              className={styles.faqToggle}
              onClick={() => toggleFaq(index)}
            >
              <span className={styles.faqQuestion}>{faq.question}</span>
              <FaChevronDown className={`${styles.faqIcon} ${expandedFaq === index ? styles.expanded : ''}`} />
            </button>
            <div className={`${styles.faqContent} ${expandedFaq === index ? styles.expanded : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
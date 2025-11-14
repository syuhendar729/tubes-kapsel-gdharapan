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
      question: "Apakah ada pengiriman ke luar kota?",
      answer: "Ya, kami melayani pengiriman ke seluruh Indonesia dengan kerjasama ekspedisi terpercaya."
    },
    {
      question: "Apakah produk bergaransi?",
      answer: "Semua produk kami memiliki garansi kualitas. Jika ada masalah, silakan hubungi kami untuk penggantian."
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
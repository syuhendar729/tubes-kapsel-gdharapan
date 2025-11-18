import './ProductDetail.css'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiShoppingCart, FiPhone, FiMinus, FiPlus, FiChevronRight } from 'react-icons/fi'
import { ImOffice } from "react-icons/im";
import products from '../products.json'

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => String(p.id) === id)

  const defaultImage = '/img/Default.png'
  const images = product && Array.isArray(product.link_image)
    ? product.link_image
    : product && product.link_image
    ? [product.link_image]
    : [defaultImage]

  const [mainImage, setMainImage] = useState(images[0] || defaultImage)

  if (!product) {
    return (
      <div className="product-detail-page">
        <p>Produk tidak ditemukan.</p>
        <Link to="/products" className="btn-back">Kembali ke Produk</Link>
      </div>
    )
  }

  const mapEmbed = product.location
    ? `https://www.google.com/maps?q=${product.location}&hl=id&z=16&output=embed`
    : null

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/products">Produk</Link>
        <FiChevronRight className="icon" />
        <span>{product.name}</span>
      </div>

      <div className="detail-card">
        <div className="detail-left">
          <img className="main-img" src={mainImage} alt={product.name} />

          {images.length > 1 && (
            <div className="thumb-grid">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`thumb-item ${src === mainImage ? 'active' : ''}`}
                  onClick={() => setMainImage(src)}
                >
                  <img src={src} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-right">
          <h1 className="title">{product.name}</h1>
          <div className="price">{formatCurrency(product.price)}</div>

          <div className="desc-box">
            <h3>Deskripsi</h3>
            <p>{product.description}</p>
          </div>

          <div className="buttons">
            <button className="btn-buy">
              <FiShoppingCart className="icon-left" /> Beli Produk
            </button>

            <a href={`https://wa.me/${product.contact}`} className="btn-wa" target="_blank" rel="noreferrer">
              <FiPhone className="icon-left" /> Hubungi Penjual
            </a>
          </div>

          <div className="company-box">
            <p><ImOffice className="icon-left" /> {product.company_name}</p>
          </div>

          {mapEmbed && (
            <div className="map-box">
              <h3>Lokasi Penjual</h3>
              <iframe
                src={mapEmbed}
                width="100%"
                height="220"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

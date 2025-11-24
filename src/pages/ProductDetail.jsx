import './ProductDetail.css'
import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiPhone, FiChevronRight } from 'react-icons/fi'
import { ImOffice } from "react-icons/im";
import { db } from '../api/firebaseConfig'
import { doc, getDoc } from "firebase/firestore"

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}

export default function ProductDetail() {
  const { id } = useParams()
  const location = useLocation()

  // ⭐ Data dari Products.jsx
  const stateProduct = location.state?.product

  const [product, setProduct] = useState(stateProduct || null)
  const [loading, setLoading] = useState(!stateProduct)

  // ⭐ Jika user buka langsung via URL, fetch data dari Firestore
  const fetchProduct = async () => {
    try {
      const docRef = doc(db, "umkm_products", id)
      const snap = await getDoc(docRef)
      if (snap.exists()) {
        setProduct(snap.data())
      }
    } catch (err) {
      console.error("Error loading product:", err)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!stateProduct) fetchProduct()
  }, [])

  if (loading) return <p className="product-detail-page">Memuat detail produk...</p>
  if (!product) return <p className="product-detail-page">Produk tidak ditemukan.</p>

  // ⭐ Ambil gambar utama
  const defaultImage = '/img/Default.png'
  const images = Array.isArray(product.link_image)
    ? product.link_image
    : product.link_image
    ? [product.link_image]
    : [defaultImage]

  const [mainImage, setMainImage] = useState(images[0] || defaultImage)

  // ⭐ Google Maps Embed
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
            <a href={product.link_olshop} className="btn-buy" target="_blank" rel="noreferrer">
              <FiShoppingCart className="icon-left" /> Beli Produk
            </a>

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

import './ProductDetail.css'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../products.json'

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
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
  const [mainImage, setMainImage] = useState(images[0])

  if (!product) {
    return (
      <div className="product-detail-page">
        <p>Produk tidak ditemukan.</p>
        <Link to="/produk" className="btn-back">Kembali ke Produk</Link>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/products">Produk</Link> <span>&gt;</span> Detail Produk
      </div>

      <div className="detail-inner">
        <div className="detail-media">
          <img className="main-img" src={mainImage || defaultImage} alt={product.name} />
          {images.length > 1 && (
            <div className="thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`thumb ${src === mainImage ? 'active' : ''}`}
                  onClick={() => setMainImage(src)}
                >
                  <img src={src} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <h1 className="product-name">{product.name}</h1>
          <div className="price">{formatCurrency(product.price)}</div>

          <div className="qty-box">
            <label>Qty:</label>
            <div className="qty-control">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className="desc-box">
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>

          <div className="buttons">
            <button className="btn-buy">
              🛒 Beli Produk
              <small>Dikunjungi: {product.visited ?? 0}</small>
            </button>

            <a href={`https://wa.me/${product.contact}`} className="btn-wa" target="_blank" rel="noreferrer">
              💬 Hubungi Penjual
              <small>{product.contact}</small>
            </a>
          </div>

          <div className="company-box">
            <span>🏢 {product.company_name || 'Company Name'}</span>
          </div>

          <div className="map-preview">
            <p>📍 Maps location (preview gmaps)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

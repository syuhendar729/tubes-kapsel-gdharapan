import './Products.css'
import products from '../products.json'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Products() {
  return (
    <div className="products-page">
      <header className="products-header">
        <h2>Produk Unggulan UMKM Kami</h2>
      </header>

      <section className="products-grid">
        {products.map((p, idx) => (
          <article className="product-card" key={idx}>
            <div className="product-image">
              <img
                src={p.link_image[0] || '/img/Default.png'}
                alt={p.name}
              />
            </div>
            <div className="product-body">
              <h3 className="product-title">{p.name}</h3>
              <div className="product-price">{formatCurrency(p.price)}</div>
              <Link className="btn-view" to={`/produk/${p.id}`}><FiShoppingCart className="icon-left"/>Lihat Produk</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

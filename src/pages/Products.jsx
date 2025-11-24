import './Products.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { db } from '../api/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const colRef = collection(db, "umkm_products")
      const snapshot = await getDocs(colRef)

      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id,
      }))

      setProducts(data)
    } catch (error) {
      console.error("Gagal mengambil produk:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <div className="products-page"><h3>Memuat produk...</h3></div>
  }

  return (
    <div className="products-page">
      <header className="products-header">
        <div className="products-hero" role="img" aria-label="Produk UMKM Gedong Harapan"></div>
        <h2>Produk Unggulan UMKM Kami</h2>
      </header>

      <section className="products-grid">
        {products.map((p, idx) => (
          <article className="product-card" key={idx}>
            <div className="product-image">
              <img
                src={p.link_image?.[0] || '/img/Default.png'}
                alt={p.name}
              />
            </div>

            <div className="product-body">
              <h3 className="product-title">{p.name}</h3>
              <div className="product-price">{formatCurrency(p.price)}</div>

              <Link className="btn-view" to={`/produk/${p.id}`} state={{ product: p }}>
                <FiShoppingCart className="icon-left" />
                Lihat Produk
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

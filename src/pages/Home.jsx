import './Home.css'
import products from '../products.json'
import { Link } from 'react-router-dom'


function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Home() {
  return (
    <div className="beranda">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Selamat Datang di UMKM Gedong Harapan</h1>
          <p>
            Temukan produk otentik langsung dari pengrajin dan pelaku usaha di Desa Gedong Harapan. Nikmati kelezatan keripik pisang premium kami dan beragam makanan pembuatan rumahan yang higienis dan berkualitas. Setiap pembelian Anda adalah dukungan nyata bagi kemajuan ekonomi lokal.
          </p>
          <h3>Belanja Sekarang dan Cari Kebutuhanmu!</h3>
          <div className="hero-cta">
            <button className="cta">Shop Now</button>
          </div>
        </div>
      </section>

      <section className="umkm">
        <h2>UMKM Desa Gedong Harapan</h2>
        <div className="companies-wrapper">
          <div className="companies">
            <button className="company">Company 1</button>
            <button className="company">Company 2</button>
            <button className="company">Company 3</button>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Our Product</h2>
        <div className="product-container">
          {products.slice(0, 5).map((p, i) => (
            <article className="card" key={i}>
              <div className="card-image">
                <img
                  src={p.link_image[0] || '/img/Default.png'}
                  alt={p.name}
                />
              </div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <p className="price">{formatCurrency(p.price)}</p>
                <Link className="more" to={`/produk/${p.id}`}>➜</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="show-more">
          <button className="btn-secondary">Show More</button>
        </div>
      </section>

    </div>
  )
}
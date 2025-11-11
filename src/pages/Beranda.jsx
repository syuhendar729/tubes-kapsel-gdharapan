import './Beranda.css'

export default function Beranda() {
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
          {Array.from({ length: 5 }).map((_, i) => (
            <article className="card" key={i}>
              <div className="card-image">
                <img
                  src={`/img/Pensil.png`}
                  alt={`Product ${i + 1}`}
                />
              </div>
              <div className="card-body">
                <h3>Product {i + 1}</h3>
                <p className="price">Rp 15.000,00</p>
                <button className="more">➜</button>
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
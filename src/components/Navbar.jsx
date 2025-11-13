import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/products">Produk</Link></li>
        <li><Link to="/aboutus">Tentang Kami</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
      </ul>
    </nav>
  )
}

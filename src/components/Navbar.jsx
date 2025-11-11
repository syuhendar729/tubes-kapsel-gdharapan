import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/produk">Produk</Link></li>
        <li><Link to="/tentang">Tentang Kami</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>
    </nav>
  )
}

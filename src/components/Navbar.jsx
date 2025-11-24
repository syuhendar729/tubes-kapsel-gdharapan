import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const NAV_ITEMS = [
  { to: '/', label: 'Beranda' },
  { to: '/products', label: 'Produk' },
  { to: '/aboutus', label: 'Tentang Kami' },
  { to: '/contact', label: 'Kontak' }
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  function isActive(path) {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="app-navbar" role="navigation" aria-label="Primary">
      <div className="navbar-inner">
        <div className="brand">
          <Link to="/" className="brand-link" aria-label="Halaman Beranda">
            <span className="brand-logo">UMKM</span>
            <span className="brand-text">Gedong Harapan</span>
          </Link>
        </div>

        <button
          className="hamburger"
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <ul id="primary-navigation" className={`nav-list ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.to} className="nav-item">
              <Link
                to={item.to}
                className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                aria-current={isActive(item.to) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

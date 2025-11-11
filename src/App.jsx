import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import Produk from './pages/Produk'
import TentangKami from './pages/TentangKami'
import Kontak from './pages/Kontak'

function App() {
  return (
    <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
      
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-left">Website informasi UMKM di Desa Gedong Harapan</div>
            <div className="footer-right">Desa Gedong Harapan</div>
          </div>
          <div className="footer-bar">Copyright © 2025 - UMKM Desa Gedong Harapan</div>
        </footer>
    </Router>
  )
}

export default App
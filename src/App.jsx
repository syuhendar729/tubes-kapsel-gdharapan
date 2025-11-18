import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
// import Contact from './pages/Contact'
import Contact from './pages/Kontak/Kontak'
import ProductDetail from './pages/ProductDetail'
import AdminProduct from './pages/AdminProduct'



function App() {

  return (
    <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/produk/:id" element={<ProductDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crud" element={<AdminProduct />} />
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
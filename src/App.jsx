// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import Produk from './pages/Produk'
import TentangKami from './pages/TentangKami'
import Kontak from './pages/Kontak'

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Navbar />
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
      {/* </div> */}
    </Router>
  )
}

export default App

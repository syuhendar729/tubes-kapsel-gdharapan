// src/pages/AdminProduct.jsx
import { useEffect, useState } from "react";
import { db, storage } from "../api/firebaseConfig";
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject
} from "firebase/storage";

import "./AdminProduct.css";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    contact: "",
    company_name: "",
    stocks: "",
    location: "",
    link_image: [],
  });

  const [previews, setPreviews] = useState([]); // object URLs for selected files
  const [imageFiles, setImageFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const colRef = collection(db, "umkm_products");

  // Fetch semua produk
  const fetchProducts = async () => {
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((d) => ({ ...d.data(), docId: d.id }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ⭐ Auto-generate ID p<number>
  const generateNextId = () => {
    if (products.length === 0) return "p1";

    const ids = products
      .map((p) => parseInt(p.id.replace("p", "")))
      .filter((n) => !isNaN(n));

    const maxId = Math.max(...ids);
    return `p${maxId + 1}`;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ⭐ Upload ke folder /umkm_products/<id>/
  const uploadImages = async (productId) => {
    const urls = [];

    for (let file of imageFiles) {
      const imgRef = ref(storage, `umkm_products/${productId}/${file.name}`);
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      urls.push(url);
    }

    return urls;
  };

  // ⭐ Hapus folder storage /umkm_products/<id>/
  const deleteImageFolder = async (productId) => {
    const folderRef = ref(storage, `umkm_products/${productId}`);

    const list = await listAll(folderRef);

    for (let fileRef of list.items) {
      await deleteObject(fileRef);
    }
  };

  const handleSubmit = async () => {
    const autoId = isEditing ? form.id : generateNextId();

    // Upload gambar
    const urlImages = await uploadImages(autoId);

    const payload = {
      ...form,
      id: autoId,
      price: Number(form.price),
      stocks: Number(form.stocks),
      link_image: urlImages,
      location: form.location.split(",").map(Number),
    };

    if (isEditing) {
      await updateDoc(doc(db, "umkm_products", form.docId), payload);
    } else {
      // ⭐ Create document with custom ID p1, p2, ...
      await setDoc(doc(db, "umkm_products", autoId), payload);
    }

    // Reset form
    setForm({
      id: "",
      name: "",
      description: "",
      price: "",
      contact: "",
      company_name: "",
      stocks: "",
      location: "",
      link_image: [],
    });
    setPreviews([]);
    setImageFiles([]);
    setIsEditing(false);
    fetchProducts();
  };

  const handleEdit = (p) => {
    setForm(p);
    setIsEditing(true);
  };

  const handleDelete = async (productId) => {
    // ⭐ Delete all images in folder
    await deleteImageFolder(productId);

    // Delete Firestore document
    await deleteDoc(doc(db, "umkm_products", productId));

    fetchProducts();
  };

  return (
    <div className="admin-container">
      <h1>Manajemen Produk UMKM</h1>

      <div className="form-card">
        <h2>{isEditing ? "Edit Produk" : "Tambah Produk"}</h2>

        <div className="form-grid">
          <input name="name" placeholder="Nama Produk" value={form.name} onChange={handleChange} />
          <input name="price" placeholder="Harga" value={form.price} onChange={handleChange} />
          <input name="contact" placeholder="Kontak" value={form.contact} onChange={handleChange} />
          <input name="company_name" placeholder="Nama Company" value={form.company_name} onChange={handleChange} />
          <input name="stocks" placeholder="Stok" value={form.stocks} onChange={handleChange} />

          <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} />

          <input name="location" placeholder="Lokasi (lat, lng)" value={form.location} onChange={handleChange} />

          <input type="file" multiple onChange={(e) => setImageFiles([...e.target.files])} />
        </div>

        <button className="btn-save" onClick={handleSubmit}>
          {isEditing ? "Simpan Perubahan" : "Tambah Produk"}
        </button>
      </div>

      <div className="table-container">
        <h2>Daftar Produk</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stocks}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(p)}>Edit</button>
                  <button className="btn-del" onClick={() => handleDelete(p.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

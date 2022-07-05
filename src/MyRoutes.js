import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AdminPage from "./Pages/AdminPage";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import DeteilPage from "./Pages/DeteilPage";
import CartPage from "./Pages/CartPage";
import Navbar from "./Components/Navbar";
import AdminProvider from "./Contexts/AdminProvider";
import ClientProvider from "./Contexts/ClientProvider";
import NotFoundPage from "./Pages/404";
import AuthProvider from "./Contexts/AuthProvider";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin-panel" element={<AdminPage />} />
              <Route path="/admin-panel/add" element={<AddPage />} />
              <Route path="/admin-panel/edit/:id" element={<EditPage />} />
              <Route path="/product-detail/:id" element={<DeteilPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default MyRoutes;

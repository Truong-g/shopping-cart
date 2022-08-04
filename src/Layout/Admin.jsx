import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandsManagement from '../containers/System/brands/BrandsManagement'
import CreateBrand from '../containers/System/brands/CreateBrand'
import CatManagement from '../containers/System/categories/CatManagement'
import CreateCat from '../containers/System/categories/CreateCat'
import EditCat from '../containers/System/categories/EditCat'
import Dashboard from '../containers/System/Dashboard'
import NavbarAdmin from '../containers/System/NavbarAdmin'
import ProductManagement from '../containers/System/ProductManagement'

function Admin() {
    return (
        <div className='app'>
            <div className="container">
                <NavbarAdmin />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<ProductManagement />} />

                    <Route path="/categories" element={<CatManagement />} />
                    <Route path="/categories/create" element={<CreateCat />} />
                    <Route path="/categories/edit/:id" element={<EditCat />} />

                    <Route path="/brands" element={<BrandsManagement />} />
                    <Route path="/brands/create" element={<CreateBrand />} />
       
                </Routes>
            </div>
        </div>
    )
}

export default Admin

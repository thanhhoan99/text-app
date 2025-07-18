
import { Outlet } from 'react-router';
import HeaderNavigation from './navigation/HeaderNavigation'
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import CustomerPage from './pages/CustomerPage';


function Layout() {
  return (
    <div >
      <Outlet />
    </div>
  );
}

export default function ListProduct() {
  return (
    <div>
        <BrowserRouter>
            <HeaderNavigation/>
            
            <Routes>
                <Route path='/home' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/home/blog' element={<BlogPage />} />
                    <Route path='/home/category' element={<CategoryPage />} />
                    <Route path='/home/product' element={<ProductPage />} />
                    <Route path='/home/login' element={<LoginPage />} />
                    <Route path='/home/customer' element={<CustomerPage />} />
                </Route>
                {/* <Route path='/category' element={<CategoryPage />} /> */}

                {/* <Route path='*' element={<Page404 />} /> */}
            </Routes>
    </BrowserRouter>
    </div>
  )
}
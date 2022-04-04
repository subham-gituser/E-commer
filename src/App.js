import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import WebFont from "webfontloader";
import { Header, Footer, Loader, NotFound } from './components'
import ProductDetails from './pages/products/components/productDetail';
import Notifications from 'react-notification-system-redux';
import Products from './pages/products';

const Home = lazy(() => import('./pages/Home'))

const App = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Roboto", "Droid Sans", "Chilanka", "Jura"],
            },
        })
    });
    return (
        <Suspense fallback={<Loader />}>
            <Notifications/>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
               
                <Route path='/product/:id' element={<ProductDetails/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Suspense>
    )
}

export default App
import { Products } from './components/Products';
import './App.css'
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const [products, setProducts] = useState([]);
  const { filterProducts} = useFilters()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        setProducts(json);
    })
    .catch(err => console.error(err));
  }, []);

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  );
}

export default App;



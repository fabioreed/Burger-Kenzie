import { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import SearchResult from "./components/SearchResult"
import { api } from "./services/api"
import GlobalStyle from "./styles/global"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState('')
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  //Filtro
  const menuList = products.filter((item) => {
    return filteredProducts === '' ? true : (item.name.toLowerCase()).includes(filteredProducts.toLowerCase())
  })

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await api.get('products')
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadMenu()
  }, [])

  return (
    <div className="App">
      <Header filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      {filteredProducts && 
      <>
        <SearchResult 
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </>
      }
      <Home 
        menuList={menuList}
        setProducts={setProducts} 
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      <GlobalStyle />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App

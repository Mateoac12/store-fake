import Header from './components/Header'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Hubo un error: {error}</p>

  return (
    <div>
      <Header />
      {products && products.map((prod) => <p key={prod.id}>{prod.title}</p>)}
    </div>
  )
}

export default App

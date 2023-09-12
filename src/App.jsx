import './App.css'
import Blogs from './components/Components/Blogs/Blogs'
import BookMark from './components/Components/BookMark/BookMark'
import Header from './components/Components/Header/Header/Header'

function App() {

  return (
    <>
      <header className='container mx-auto'>
      <Header></Header>
      </header>
      <main className='md:flex container mx-auto'>
      <Blogs></Blogs>
      <BookMark></BookMark>
      </main>
    </>
  )
}

export default App
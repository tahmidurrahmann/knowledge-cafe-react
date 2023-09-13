import { useState } from 'react'
import './App.css'
import Blogs from './components/Components/Blogs/Blogs'
import BookMark from './components/Components/BookMark/BookMark'
import Header from './components/Components/Header/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([])

  const handleBookMark = (blog) => {
      const newBookMarks = [...bookMarks, blog];
      setBookMarks(newBookMarks);
  }

  const [readingTime, setReadingTime] = useState(0);

  const handleReadTime = (time) => {
      const newTime = readingTime + time;
      setReadingTime(newTime);
  }

  return (
    <>
      <header className='container mx-auto'>
      <Header></Header>
      </header>
      <main className='md:flex container mx-auto'>
      <Blogs handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blogs>
      <BookMark bookMarks={bookMarks} readingTime={readingTime}></BookMark>
      </main>
    </>
  )
}

export default App
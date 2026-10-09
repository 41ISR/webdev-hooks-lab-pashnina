import Header from './components/Header/Header'
import ShelfScreen from './components/ShelfScreen/ShelfScreen'
import BookForm from './components/BookForm'
import FilterChip from './components/FilterChip'
import BookList from './components/BookList'
import {useState} from 'react'
import { nanoid } from 'nanoid'



function App() {
  return (
    <>
      <div className="app">
       <Header />
       <ShelfScreen />
      </div>

    </>
  )
}

export default App

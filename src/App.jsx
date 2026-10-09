import Header from './components/Header/Header'
import ShelfScreen from './components/ShelfScreen/ShelfScreen'
import BookForm from './components/BookForm'
import FilterChip from './components/FilterChip'
import BookList from './components/BookList'
import {useState} from 'react'
import { nanoid } from 'nanoid'

const [taskName, setTaskName] = useState('')
const [books, setBooks] = useState([])

const handleSubmit = (e) =>{
        e.preventDefault()
        
        if (bookName.trim() === "") return

        const newTask = {
            name: bookName.trim(),
            read: false,
            author: gg,
            id: nanoid(),
        }

        setTasks(o=>[...o, newTask])

        setTaskName("")
    }

function App() {
  return (
    <>
      <div className="app">
       <Header />
      < ShelfScreen />
      </div>

    </>
  )
}

export default App

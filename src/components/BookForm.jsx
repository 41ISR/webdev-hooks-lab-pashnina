import Input from '../components/Input'
import Button from '../components/Button'
import {useState} from 'react'
import {nanoid} from 'nanoid'

const BookForm = ({setBooks}) => {
    const [bookName, setBookName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if (bookName.trim() === "") return

        const newBook = {
            name: bookName.trim(),
            read: false,
            id: nanoid(),
        }

        setBooks(o => [...o, newBook])

        setBookName("")
    }

    return (
        <form onSubmit={handleSubmit} className="add-book-row">
            <Input id="bookInput" placeholder="Название книги..." value={bookName} onChange={(e) => setBookName(e.target.value)} />
            <Button>Добавить на полку</Button>
        </form>
    )
}
export default BookForm
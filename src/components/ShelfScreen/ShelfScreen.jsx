import BookForm from '../../components/BookForm'
import FilterChip from '../../components/FilterChip'
import BookList from '../../components/BookList'
import {useState} from 'react'
import {nanoid} from 'nanoid'

const ShelfScreen = () => {

  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  
  return (
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <BookForm setBooks={setBooks} />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip showOnlyUnread={showOnlyUnread} setShowOnlyUnread={setShowOnlyUnread} />
      </div>
      {showOnlyUnread? books.filter((el) => el.read === false).map((el)=> (<BookList setBooks={setBooks} key={el.id} {...el}/>))
                         : books.map((el)=> (<BookList setBooks={setBooks} key={el.id} {...el}/>))} 
                         {/* все запихнуть в буклист */}
    </section>
  )
}

export default ShelfScreen
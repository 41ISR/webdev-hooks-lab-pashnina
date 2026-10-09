import BookForm from '../../components/BookForm'
import FilterChip from '../../components/FilterChip'
import BookList from '../../components/BookList'

const ShelfScreen = () => {
    return(
        <section className="screen active" id="screen-shelf">
          <p className="greeting">Добрый вечер</p>
          <BookForm />
          <div className="list-toolbar">
            <span className="toolbar-title">Книги</span>
            <FilterChip />
          </div>
          <BookList />
        </section>
    )
}

export default ShelfScreen
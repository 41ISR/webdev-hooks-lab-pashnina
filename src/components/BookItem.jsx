const BookItem = ({setBooks, name, read, id}) => {
   const handleRead = () =>{
        setBooks((o)=> o.map((el)=> el.id === id ? {...el, read: !el.read} : el,))
    }

    const handleDelete = () =>{
        setBooks(o => o.filter(el => el.id !== id))
    }
    return(
        <div className="book-row" data-id={1}>
        <div className="book-cover" style={{ background: "#4f6b52" }}>
                К
              </div>
              <div className="book-info">
                <p className="book-title done">{name}</p>
                {/* <div className="book-author">Кадзуо Исигуро</div> */}
              </div>
              <div onClick={handleRead} className={`read-check${read ? ' checked' : ""} `} data-role="toggle">
                <span className="check-circle">{read ? "✓" : ""}</span>
                <span className="read-label">{read ? "Прочитано" : "Не прочитано"}</span>
              </div>
              <button
                onClick={handleDelete}
                className="delete-btn"
                data-role="delete"
                title="Убрать с полки"
              >
                ✕
              </button>
        </div>
    )
}

export default BookItem
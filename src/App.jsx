import "./App.css"
import books from "./assets/childrensbooks.json"
import {Link} from "react-router-dom"
import Book from "./Book"

function App() {
    return (
        <div className="app">
            <h1>Books</h1>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id}>
                            <Link
                                to={`Book/${book.id}`}
                                state={{book: book}}
                            >
                                {book.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App

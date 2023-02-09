import "./Book.css"
import { useLocation, Link } from "react-router-dom"

export default function Book() {

    let book = useLocation().state.book
    console.log(book)
    const colorGrad = {
        background: `linear-gradient(45deg,${book.color}, white 150%)`
    }
    return (
            <section className="book-container">
                <Link to="/" className="link">&#10229;</Link>
                <section className="book-info">
                    <article className="cover" style={colorGrad}>
                        <div className="cover2">
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                        </div>
                    </article>
                    <article className="book-text">
                        <h2>{book.title}</h2>
                        <p className="author">By: {book.author}</p>
                        <p className="plot">{book.plot}</p>
                        <div className="extra-info">
                            <p><b>Audience</b>: {book.audience}</p>
                            <p><b>First Published</b>: {book.year}</p>
                            <p><b>Pages</b>: {book.pages}</p>
                            <p><b>Publisher</b>: {book.publisher}</p>
                        </div>
                        <button>Oh, I want to read it</button>

                    </article>
                </section>
            </section>
    )
}
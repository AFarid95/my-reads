import React from 'react'
import Book from './Book.js'

class BookList extends React.Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
          this.props.books !== undefined?
          this.props.books.map(book =>
            <li key={book.id}>
              <Book id={book.id} imageUrl={book.imageLinks !== undefined? book.imageLinks.thumbnail : undefined} title={book.title} authors={book.authors} shelf={book.shelf} shelves={this.props.shelves} onShelfChange={this.props.onShelfChangeForBook} />
            </li>
          ) : null
        }
        </ol>
      </div>
    )
  }
}

export default BookList
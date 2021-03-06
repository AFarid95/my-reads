import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class MainPage extends React.Component {
  
  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          {
              this.props.shelves.map(shelf =>
              <Shelf key={shelf.name} title={shelf.title} books={this.props.books.filter(book => book.shelf === shelf.name)} shelves={this.props.shelves} onShelfChangeForBook={this.props.onShelfChangeForBook} />)
          }
          </div>
          <div className="open-search">
              <Link to='/search'>Add a book</Link>
          </div>
      </div>
    )
  }
}

export default MainPage
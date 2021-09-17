import React from 'react'
import BookList from './BookList'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
              <BookList books={this.props.books} shelves={this.props.shelves} onShelfChangeForBook={this.props.onShelfChangeForBook} />
          </div>
      </div>
    )
  }
}

export default Shelf
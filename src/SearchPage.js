import React from 'react'

import { Link } from "react-router-dom"

import { search } from './BooksAPI.js'
import BookList from './BookList.js'

class SearchPage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      searchInputValue: '',
      books: []
    }
    
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
  }
  
  handleSearchInputChange(event) {
    this.setState({searchInputValue: event.target.value})
    
    search(event.target.value, 20)
      .then((books) => {
        
        let noBooks = true
        
        if(books !== undefined)
        {
          if(books.error === undefined)
          {
            noBooks = false
            books.forEach((book) => {
              let indexOfBookOnShelves = this.props.booksOnShelves.findIndex((bookOnShelves) => book.id === bookOnShelves.id)
              if (indexOfBookOnShelves !== -1)
                book.shelf = this.props.booksOnShelves[indexOfBookOnShelves].shelf
            })
            this.setState({books: books})
          }
        }
        
        if (noBooks)
          this.setState({books: []})
    })
  }
  
  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.searchInputValue} onChange={this.handleSearchInputChange} />
              </div>
            </div>
            <div className="search-books-results">
              <BookList books={this.state.books} shelves={this.props.shelves} onShelfChangeForBook={this.props.onShelfChangeForBook} />
            </div>
          </div>
    )
  }
}

export default SearchPage
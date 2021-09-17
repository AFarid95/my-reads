import React from 'react'
import './App.css'
import { getAll, update } from './BooksAPI.js'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.shelves = [{
      name: 'currentlyReading',
      title: 'Currently Reading'
    }, {
      name: 'wantToRead',
      title: 'Want to Read'
    }, {
      name: 'read',
      title: 'Read'
    }]
    
    this.state = {booksOnShelves: []}
    
    this.handleShelfChangeForBook = this.handleShelfChangeForBook.bind(this)
  }
  
  async componentDidMount() {
    const books = await getAll()
    this.setState({booksOnShelves: books})
  }
  
  handleShelfChangeForBook(book, shelf) {
    update({ id: book.id }, shelf)
    .then(() => getAll())
    .then((books) => {
      this.setState({booksOnShelves: books})
    })
  }

  render() {
    return (
    <BrowserRouter>
     <Switch>
      <Route path='/search'>
          <SearchPage booksOnShelves={this.state.booksOnShelves} shelves={this.shelves} onShelfChangeForBook={this.handleShelfChangeForBook} />
      </Route>
      <Route path='/'>
          <MainPage books={this.state.booksOnShelves} shelves={this.shelves} onShelfChangeForBook={this.handleShelfChangeForBook} />
      </Route>
     </Switch>
    </BrowserRouter>
    )
  }
}

export default BooksApp

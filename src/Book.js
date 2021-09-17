import React from 'react'

class Book extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleShelfChange = this.handleShelfChange.bind(this);
  }

  handleShelfChange(e) {
    this.props.onShelfChange(this.props, e.target.value);
  }
  
  render() {
    return (
      <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.imageUrl !== undefined? `url('${this.props.imageUrl}')` : null }}></div>
            <div className="book-shelf-changer">
                <select value={this.props.shelf !== undefined? this.props.shelf : 'none'} onChange={this.handleShelfChange}>
                    <option value="move" disabled>&nbsp;&nbsp;&nbsp;&nbsp;Move to...</option>
                    {
                        this.props.shelves.map((shelf) =>
                          <option key={shelf.name} value={shelf.name}>{shelf.name === this.props.shelf? '\u2714\u00a0' : '\u00a0\u00a0\u00a0\u00a0'}{shelf.title}</option>
                        )
                    }
                    <option value="none">{this.props.shelf === undefined? '\u2714\u00a0' : '\u00a0\u00a0\u00a0\u00a0'}None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">
        {
          this.props.authors !== undefined?
            this.props.authors.map(author =>
                <div key={author}>{author}</div>
            ) : null
        }
        </div>
      </div>
    )
  }
}

export default Book
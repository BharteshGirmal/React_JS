import React from 'react'
import '../SearchBox/Searchbox.styles.css'

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <input
//           className={`search-box ${this.props.className}`}
//           type='search'
//           placeholder={this.props.placeholder}
//           onChange={this.props.handleSearchChange}
//         />
//       </div>
//     )
//   }
// }

// Functional Component :

export default function SearchBox(props) {
  return (
    <div className='container'>
        <input
          className={`search-box ${props.className}`}
          type='search'
          placeholder={props.placeholder}
          onChange={props.handleSearchChange}
        />
      </div>
  )
}

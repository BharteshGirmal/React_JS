
import React, { useEffect, useState } from 'react'
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/cardlist/CardList';

export default function App() {

  const [monsters, setMonsters]= useState([]);
  const [searchfield, setSearchfield]= useState('');
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);

  const handleOnChange = (event) => {
      const searchfieldvalue = event.target.value.toLowerCase();
      setSearchfield(searchfieldvalue);
    };

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setMonsters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(()=>{
      fetchData();
    },[]);

    useEffect(()=>{
      // To avoid the re rendering of Monsters array 
      const newFilteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchfield)
      );

      setFilteredMonsters(newFilteredMonsters);
    
    },[monsters, searchfield]);
  
  
  return(
    <div className='App'>
      <h1 style={{fontFamily:'Bigelow Rules',color:'#0ccac4' , fontSize:'100px', marginTop:'20px', fontWeight: 'bolder'}}>Monster's Rolodex</h1>
      <SearchBox className='search-box' placeholder='search monsters' handleSearchChange={handleOnChange}/>
      <CardList monsterarray={filteredMonsters} />
    </div>
  )
}


// Class Based Component :

// import React, { Component, useEffect, useState } from 'react';

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchfield: ''
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       this.setState({ monsters: data });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   handleOnChange = (event) => {
//     const searchfield = event.target.value.toLowerCase();
//     this.setState({ searchfield });
//   };

//   render() {
//     const { monsters, searchfield } = this.state;
//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchfield)
//     );

//     return (
//       <div className='App'>
//         <h1 style={{fontFamily:'Bigelow Rules',color:'#0ccac4' , fontSize:'100px', marginTop:'20px'}}>Monster Rolodex</h1>
//         <SearchBox className='search-box' placeholder='search monsters' handleSearchChange={this.handleOnChange}/>
//         <CardList monsterarray={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

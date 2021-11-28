import React from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      personajes:[],
      busquedas: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response=> response.json())
    .then( response=> this.setState( {personajes:response} ) )
    ;

  }

  handleChange = (e) =>{
    this.setState({ busquedas: e.target.value });
  }

  render() { 

      const {personajes, busquedas} = this.state;

      const filteredPersonajes = personajes.filter( 
        personaje => personaje.name.toLowerCase().includes(busquedas.toLowerCase())
      )

      return (

      <div className="App">
        <h1>Monsters App</h1>
        <div className="rounded-pill form-control-lg p-3">
          <SearchBox 
            placeholder="Buscar personaje"
            handleChange={this.handleChange}
          />

        </div>


        {/* <CardList personajeOne={this.state.personajes} /> */}
        <CardList personajeOne={filteredPersonajes} />
      </div>

   );
  }
}
 
export default App;

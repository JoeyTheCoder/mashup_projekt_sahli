import React, { Component } from 'react';
import './App.css';


/**
 * @author: Joel Sahli
 * @version: 3.0
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      name: "example",
      value2: "other",

    }
  }

  //fetch Methode
  componentDidMount() {
    let {name} = this.state;
    const url = 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='+[name]+'&lang=en';
    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          })
        });

  }
  handleSubmit = (event)=>{
    event.preventDefault()


  }

  //Input Field
  handleInputChange = (event) =>{
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
    let {name} = this.state;
    const url = 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='+[name]+'&lang=en';
    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          })
        });
  }
  inputChange

  //Render Methode
  render() {
    const {name} = this.state
    var { isLoaded, items } = this.state;
    var arr3 = Object.values(items);

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
        <div classname="App">
          <h1 className='titel'>Phonetics-Converter</h1>
          <form className='inputfield' onSubmit={this.handleSubmit}>
            <label>
              Word:
              <input type="text" name="name" onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <ul>
            {items.map(item => (
                <li key="{item.id}">
                  Phonetic: {item.phonetic}
                </li>
            ))}
          </ul>
          <p>name is: {name}</p>
        </div>
    );
  }
}
export default App;
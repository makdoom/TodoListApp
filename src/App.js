import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items: [ ],
       currentItem: {
         text : "",
         key:""
      
       }
    }
  }
  // TO CONTROLL THE INPUT FEILDS
  handleInput = (e) => {
    this.setState({
      currentItem : {
        text: e.target.value,
        key : Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    // console.log(newItem)
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem]
      // console.log(this.state.items);
      
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
      console.log(this.state.items);
      
    } 
    
  }
  deleteItems = (key) => {
    const filteredItems = this.state.items.filter( item => item.key!== key)
    this.setState({
      items: filteredItems 
    })
  }
  setUpdate = (text,key) =>{
    const items = this.state.items
    items.map(item => {
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items:items
    })
  }
  render(){
    return (
      <div className="container">
        <h1> TODO LIST </h1>
        <div className="App">
          <header>
            <form id="todoForm" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter Text "
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              />
              <button type="submit">Add </button>
            </form>
          </header>
          <ListItems
            setUpdate={this.setUpdate}
            items={this.state.items}
            deleteItems={this.deleteItems}
          />
        </div>
      </div>
    );
  };
}

export default App;

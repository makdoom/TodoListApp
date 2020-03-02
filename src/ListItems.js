import React from 'react'
import './ListItems.css'
import {fontAwesomeIcons, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items
    // console.log(items);
    
    const listItems = items.map( item => {
        return (
          <div className="list" key={items.key}>
            <p>
              <input type="text" id={item.text} value = {item.text} onChange ={(e) => props.setUpdate(e.target.value, item.key)} />
              <span>
                <FontAwesomeIcon className="faicons" icon="trash" onClick = {() => props.deleteItems(item.key)}/>
              </span>
            </p>
          </div>
        );
    })
    return (
      <div>
        <FlipMove duration= {300} ease = "ease-in-out" >{listItems}</FlipMove>
      </div>
    );
}
export default ListItems
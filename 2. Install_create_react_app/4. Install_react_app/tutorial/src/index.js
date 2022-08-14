import React from "react";
import ReactDOM from "react-dom";

// CSS Import
import "./index.css";

import {books} from './books';
import SpecificBook from "./Book";
import {greeting} from './testing/testing';

// function Greeting() {
//   return <h4>this is john and this is my first component</h4>;
// }


// JSX is a syntax extension to JavaScript that allows us to write HTML like syntax in JavaScript.
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// close every element
// formating




function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
     {books.map((book, index)=>{
      //console.log(book);
     
        return <SpecificBook key={index} {...book}></SpecificBook>;
     })}
      
    </section>
  );
}






// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>
// }


// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World');
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
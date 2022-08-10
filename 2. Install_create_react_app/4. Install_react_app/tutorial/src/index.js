import React from "react";
import ReactDOM from "react-dom";

// CSS Import
import "./index.css";


// function Greeting() {
//   return <h4>this is john and this is my first component</h4>;
// }


// JSX is a syntax extension to JavaScript that allows us to write HTML like syntax in JavaScript.
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// close every element
// formating

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,100_.jpg",
  title: "Harry Potter and the Sorcerer's Stone",
  author: "ORson Wels",
}


function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      
    </section>
  );
}


const Book = (props) => {
  // console.log(props);
  return (
  <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.author}</p>
     
  </article>
  
  );
};



// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>
// }


// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World');
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
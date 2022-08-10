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



function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className="book">
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
};

const Image = () => <img src="https://picsum.photos/200" alt="random image" />;

const Title = () => <h1>This is title</h1>;
const Author = () => <p>Marko Rodic</p>;


// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>
// }


// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World');
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
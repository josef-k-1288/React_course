import React from 'react'

const Book = ({img, title, author}) => {
    //  console.log(props);
    // const {img, title, author} = props;
  
    // attribute, eventHandler
    // onClick, onMouseOver
  
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('hello world');
    }
  
    const complexExample = (author) => {
      console.log(author);
    }
  
    return (
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
        <img src={img} alt='' />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <p>{author}</p>
        <button type="button" onClick={clickHandler}>Reference example</button>
        <button type="button" onClick={() => complexExample(author)}>More complex example</button>
    </article>
    
    );
  };

export default Book
import "./styles.css";
import { useState } from "react";

export default function App() {
  var allBooks = [
    "Behind Closed doors",
    "The Girl On the Train",
    "The book of Mystery",
    "Carrie",
    "The Haunting Hill house",
    "Dracula",
    "The 5 AM Club",
    "Atomic habits",
    "The Power of Your Subconcios Mind",
    "Harry potter",
    "The Hunger games",
    "Divergent"
  ];

  var [bookList, setBookList] = useState(allBooks);

  var mysteryBook = [
    "Behind Closed doors",
    "The Girl On the Train",
    "The book of Mystery"
  ];
  var horrorBook = ["Carrie", "The Haunting Hill house", "Dracula"];
  var selfHelpBook = [
    "The 5 AM Club",
    "Atomic habits",
    "The Power of Your Subconcios Mind"
  ];
  var fictionBook = ["Harry potter", "The Hunger games", "Divergent"];

  function printBook(book) {
    for (var i = 0; i < book.length; i++) {
      console.log(book[i]);
      setBookList(book);
    }
  }
  return (
    <div className="App">
      <h1>Book Recommendation</h1>
      <h2>Here are some of the books I recommend you to read!</h2>
      <h4>Topics</h4>
      <button onClick={() => printBook(allBooks)}>All Books</button>
      <button onClick={() => printBook(mysteryBook)}>Mystery</button>
      <button onClick={() => printBook(horrorBook)}>Horror</button>
      <button onClick={() => printBook(selfHelpBook)}>Self Help</button>
      <button
        onClick={function () {
          printBook(fictionBook);
        }}
      >
        Fiction
      </button>
      <div>
        {bookList.map((book) => {
          return <div className="printBooks">{book}</div>;
        })}
      </div>
    </div>
  );
}

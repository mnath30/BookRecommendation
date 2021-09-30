import "./styles.css";
import { useState } from "react";

export default function App() {
  var allBooks = [
    "Behind Closed doors ",
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
      setBookList(book);
    }
  }
  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Book Recommendation</h1>
      </div>
      <h2 className="sub-heading">
        Here are some of the books I recommend you to read!
      </h2>
      <div className="main">
        <h4>Topics</h4>
        <button className="button" onClick={() => printBook(allBooks)}>
          All Books
        </button>
        <button className="button" onClick={() => printBook(mysteryBook)}>
          Mystery
        </button>
        <button className="button" onClick={() => printBook(horrorBook)}>
          Horror
        </button>
        <button className="button" onClick={() => printBook(selfHelpBook)}>
          Self Help
        </button>
        <button className="button" onClick={() => printBook(fictionBook)}>
          Fiction
        </button>
        <hr />
        <div>
          {bookList.map((book) => {
            return <div className="printBooks">{book}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

import "./styles.css";
import { useState } from "react";

export default function App() {
  var allBooks = {
    mystery: [
      {
        name: "Behind Closed doors",
        rating: 4,
        description:
          "The gripping, shocking, million-copy and international bestselling psychological thriller from the author of The Dilemma: Paris, B A"
      },
      {
        name: "The Girl On the Train",
        rating: 4,
        description:
          "The Girl on the Train (2015) is a psychological thriller novel by British author Paula Hawkins."
      },
      {
        name: "The book of Mystery",
        rating: 3,
        description: "This is a collection of short mystery stories"
      }
    ],
    horror: [
      {
        name: "Carrie",
        rating: 3,
        description:
          "Stephen King's legendary debut, about a teenage outcast and the revenge she enacts on her classmates, is a Classic"
      },
      {
        name: "The Haunting Hill house",
        rating: 4,
        description:
          "The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson."
      },
      {
        name: "Dracula",
        rating: 5,
        description: "Dracula is a novel by Bram Stoker, published in 1897."
      }
    ],
    selfHelp: [
      {
        name: "The 5 AM Club",
        rating: 5,
        description:
          "The 5 am Club concept is based on a revolutionary morning routine that has helped people maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity."
      },

      {
        name: "Atomic habits",
        rating: 4,
        description:
          "Atomic Habits is a step-by-step manual for changing routines"
      },
      {
        name: "The Power of Your Subconcios Mind",
        rating: 4,
        description:
          "Here is the complete, original text of the millions-selling self- help guide that reveals your invisible power to attain any goal"
      }
    ],
    fantasy: [
      {
        name: "Harry potter",
        rating: 4,
        description:
          "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling."
      },
      {
        name: "The Hunger games",
        rating: 4,
        description:
          "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins"
      },
      {
        name: "Divergent",
        rating: 4,
        description:
          "Divergent is the debut novel of American novelist Veronica Roth, published by Harper Collins Children's Books in 2011"
      }
    ]
  };

  var [bookList, setBookList] = useState("mystery");

  function printBook(book) {
    setBookList(book);
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
        {Object.keys(allBooks).map((bktitle) => (
          <button className="button" onClick={() => printBook(bktitle)}>
            {bktitle.toUpperCase()}
          </button>
        ))}
        <hr />
        {allBooks[bookList].map((books) => (
          <div className="printbooks">
            <h3>{books.name}</h3>
            <p>
              {books.description}
              <br />
              Rating: {books.rating}/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

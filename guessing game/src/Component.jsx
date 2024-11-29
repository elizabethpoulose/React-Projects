import React, { useState } from "react";

function Component() {
  const [guessNum, setGuessNum] = useState("");
  const [random] = useState(Math.floor(Math.random() * 10));
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setGuessNum(e.target.value);
  };

  const Check = (e) => {
    e.preventDefault();

    if (guessNum === "") {
      setMessage("Enter Number 🙄");
    } else if (guessNum >= 0 && guessNum <= 10) {
      setCount((prevCount) => prevCount + 1); // Increment count only for valid input
      if (parseInt(guessNum) === random) {
        setMessage(
          `Hurray! You Guessed it 🥳.
          \n You took ${
            count + 1
          } chances to guess the number.
           \n It will refresh after 3 seconds.`
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setMessage("Wrong guess. Try Again 😊");
      }
    } else {
      setMessage("Enter a number between 0 and 10.");
    }
  };

  return (
    <div>
      <h1>Guess The Number Game</h1>
      <input
        placeholder="Enter number"
        onChange={handleClick}
        value={guessNum}
      />
      <button onClick={Check}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default Component;

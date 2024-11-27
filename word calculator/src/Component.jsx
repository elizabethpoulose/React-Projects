import { useState } from "react";

function Component() {
  const [check, setCheck] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleInput = (e) => {
    const input = e.target.value;
    setCheck(input);

    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const characters = input.length;

    setWordCount(words);
    setCharCount(characters);
  };
  return (
    <div className="container">
      <div className="content">
        <h1>Word Calculator </h1>
        <input
          type="text"
          placeholder="Enter String or Character"
          onChange={handleInput}
          value={check}
        />
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}

export default Component;

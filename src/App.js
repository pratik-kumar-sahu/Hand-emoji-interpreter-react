import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤲🏻": "palms up together",
  "👐🏻": "open hands",
  "🙌🏻": "raising hands",
  "👏🏻": "clapping hands",
  "🤏🏻": "pinching hands",
  "✌🏻": "victory hands",
  "🤙🏻": "call me hand",
  "✋🏻": "raised hand",
  "🖖🏻": "vulcan salute",
  "🤟🏻": "love you gesture"
};

const emojisList = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [value, setValue] = useState("");

  function emojiInputHandler(event) {
    const emoji = event.target.value;
    setEmoji(emoji);

    var value = emojiDictionary[emoji];
    if (value === undefined) {
      value =
        "Oops! didn't included that emoji 🧐. Search for another one or click emojis above.";
    }
    setValue(value);
  }

  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    setValue(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Hand Emoji Interpreter</h1>

      <input
        placeholder="Enter your emoji here"
        value={emoji}
        onChange={emojiInputHandler}
      />

      <p>Click on emojis below and know what they mean.</p>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {emojisList.map((emoji) => {
          return (
            <span
              style={{
                fontSize: "2rem",
                margin: "1rem .5rem",
                backgroundColor: "grey",
                padding: "1rem",
                cursor: "pointer"
              }}
              key={emoji}
              onClick={() => {
                emojiClickHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <p>Find out the meaning here 👇🏻</p>

      <div style={{ backgroundColor: "orange", padding: "1rem" }}>{value}</div>
    </div>
  );
}

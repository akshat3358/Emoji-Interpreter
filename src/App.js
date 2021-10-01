import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😆": "Laughing",
  "🥰": "Blushing",
  "😘": "Sending Flying Kiss",
  "🤗": "sending Hugs",
  "😔": "Sad",
  "😪": "Feeling Sleepy",
  "😭": "Crying",
  "🔥": "Fire",
  "😂": "LOL",
  "🤩": "Excited",
  "🤮": "Vomiting",
  "😎": "Cool",
  "🥳": "Partying",
  "🤯": "Mind Blowing",
  "😡": "Angry",
  "😇": "Blessed",
  "🤒": "Not Well",
  "🤔": "Thinking",
  "😏": "Suggestive Smile",
  "🙄": "Eye Roll",
  "😅": "Happy Sweat",
  "😄": "Happy",
  "😁": "Grinning Face with Smiling Eyes",
  "🙂": "This Is Fine",
  "😉": "Winking ",
  "😌": "Relieved Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😋": "Hungry",
  "😛": "Cheeky",
  "🤪": "Goofy Face",
  "🤨": "Colbert",
  "🧐": "Face with Monocle",
  "😒": "Dissatisfied",
  "😟": "Worried",
  "😖": "Quivering Mouth",
  "😩": "Weary",
  "🥺": "Pleading",
  "😤": "Frustrated",
  "🤬": "Cursing",
  "😱": "Screaming Face",
  "😨": "Scared",
  "🤭": "Blushing Face with Hand Over Mouth",
  "🤫": "Shh",
  "😬": "Nervous",
  "😯": "Surprised",
  "🥱": "Yawning",
  "🤤": "Drool",
  "😷": "Face with Medical Mask",
  "🤧": "Sneezing",
  "🤢": "Disgust",
  "🤑": "Rich"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiUserInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var emojiByUser = event.target.value;

    setUserInput(emojiByUser);

    if (emojiByUser in emojiDictionary) {
      setMeaning(emojiDictionary[emojiByUser]);
    } else {
      setMeaning("Unable to Recognize..");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1> Get Emoji Meaning </h1>
      <input
        onChange={emojiInputHandler}
        value={emojiUserInput}
        placeholder={"Search Here.."}
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
      ></input>
      <h2>{emojiUserInput}</h2>
      <h3>{meaning}</h3>
      <h3> Emojis We have </h3>
      <div>
        {emojisWeKnow.map((emojiUserInput) => (
          <p
            className="emojiPara"
            onClick={() => emojiClickHandler(emojiUserInput)}
            key={emojiUserInput}
          >
            {emojiUserInput}
          </p>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Laughing",
  "๐ฅฐ": "Blushing",
  "๐": "Sending Flying Kiss",
  "๐ค": "sending Hugs",
  "๐": "Sad",
  "๐ช": "Feeling Sleepy",
  "๐ญ": "Crying",
  "๐ฅ": "Fire",
  "๐": "LOL",
  "๐คฉ": "Excited",
  "๐คฎ": "Vomiting",
  "๐": "Cool",
  "๐ฅณ": "Partying",
  "๐คฏ": "Mind Blowing",
  "๐ก": "Angry",
  "๐": "Blessed",
  "๐ค": "Not Well",
  "๐ค": "Thinking",
  "๐": "Suggestive Smile",
  "๐": "Eye Roll",
  "๐": "Happy Sweat",
  "๐": "Happy",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "This Is Fine",
  "๐": "Winking ",
  "๐": "Relieved Face",
  "๐": "Smiling Face with Heart-Eyes",
  "๐": "Hungry",
  "๐": "Cheeky",
  "๐คช": "Goofy Face",
  "๐คจ": "Colbert",
  "๐ง": "Face with Monocle",
  "๐": "Dissatisfied",
  "๐": "Worried",
  "๐": "Quivering Mouth",
  "๐ฉ": "Weary",
  "๐ฅบ": "Pleading",
  "๐ค": "Frustrated",
  "๐คฌ": "Cursing",
  "๐ฑ": "Screaming Face",
  "๐จ": "Scared",
  "๐คญ": "Blushing Face with Hand Over Mouth",
  "๐คซ": "Shh",
  "๐ฌ": "Nervous",
  "๐ฏ": "Surprised",
  "๐ฅฑ": "Yawning",
  "๐คค": "Drool",
  "๐ท": "Face with Medical Mask",
  "๐คง": "Sneezing",
  "๐คข": "Disgust",
  "๐ค": "Rich"
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

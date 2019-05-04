import React, { useEffect } from "react";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

function Card({ data: userData }) {
  const { name, screen_name, tweets } = userData;

  useEffect(() => {
    const twts = tweets.filter(({ text }) => !text.includes("RT @"));
    const translatedTweets = [];
    twts.forEach(({ text }) => {
      translate(text, { to: "en" })
        .then(res => {
          translatedTweets.push(res.text);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(rr => {
          console.log(rr, translatedTweets);
        });
    });
  }, [tweets]);

  return (
    <div>
      <h1
        style={{
          marginBottom: 0
        }}
      >
        {name}
      </h1>
      <span>@{screen_name}</span>
    </div>
  );
}

export default Card;

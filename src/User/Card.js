import React, { useEffect } from "react";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

function Card({ data: userData }) {
  const { name, screen_name, tweets } = userData;

  useEffect(() => {
    const twts = tweets.filter(({ text }) => !text.includes("RT @"));
    let res = [];
    (async function (){
      const translatedTweets = [];
      twts.forEach(({ text }) =>  translatedTweets.push(translate(text, { to: "en" })));
      res = await Promise.all(translatedTweets)
     })();
    console.log(res);
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

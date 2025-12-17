import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Micheal Jackson"
        img="https://hips.hearstapps.com/hmg-prod/images/michael-jackson-performs-in-concert-circa-1986-news-photo-1690832280.jpg?crop=0.693xw:1.00xh;0.117xw,0"
        tel="0612345678"
        mail="mj@mail.com"
      />

      <Card
        name="Beyoncé Knowles"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="0612345678"
        mail="bk@mail.com"
      />

      <Card
        name="Chris Brown"
        img="https://mixtapemonkey.com/artistpic/334.jpeg"
        tel="0612345678"
        mail="cb@mail.com"
      />
    </div>
  );
}

export default App;

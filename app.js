const desc =
  "I just learned how to create a react node and render it to the DOM!";

const myTitleID = "main-title";
const name = "Garrett";

const header = (
  <header>
    <h1 id={myTitleID}>{name}'s First React Element!</h1>
    <p>{desc}</p>
  </header>
);

ReactDOM.render(header, document.getElementById("root"));

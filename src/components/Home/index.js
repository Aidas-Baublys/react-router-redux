import { useState } from "react";

function Home() {
  const [yeah, setYeah] = useState("");
  const onClick = () => setYeah("Fuck yeah!");

  return (
    <div className="home">
      <h2>Home {yeah}</h2>
      <button onClick={onClick}>Oh, yeah...</button>
    </div>
  );
}

export default Home;

function Home() {
  const onClick = () => console.log("Fuck yeah!");

  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={onClick}>Oh, yeah...</button>
    </div>
  );
}

export default Home;

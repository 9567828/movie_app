function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello~~</h1>
      <Food fav="김치" />
      <Food fav="주꾸미" />
      <Food fav="삼겹살" />
    </div>
  );
}

export default App;

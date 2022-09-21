import InputRow from "./components/InputRow";

function App() {
  return (
    <div>
      <header className="grid">
        <h5>URL</h5>
        <h5>Name (optional)</h5>
        {[0,1,2,3,4].map((i) => <InputRow key={i} />)}
        <br />
        <h5>Twitter (optional)</h5>
        <br />
        <input type="text" placeholder="@tylerxhobbs" />
      </header>      
    </div>
  );
}

export default App;

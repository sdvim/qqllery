import { useMemo, useState } from "react";
import GridItem from "./components/GridItem";
import InputRow from "./components/InputRow";

function App() {
  const [items, setItems] = useState([]);
  const [twitter, setTwitter] = useState('');

  const addItem = () => {
    const newItem = { index: (items.length) }; 
    setItems(items => [...items, newItem]);
  }
  
  const updateItems = (index, key, value) => {
    setItems(items => items.map(item => {
      return item.index === index ? { ...item, [key]: value } : item;
    }));
  }

  useMemo(() => {
    if (items.length < 1) addItem();

    if (items.length > 0 && items[items.length - 1].url?.length > 10) addItem();
    
  }, [items]);

  return (
    <div>
      <header className="grid">
        <br />
        <h5>Twitter (optional)</h5>
        <br />
        <input
          type="text"
          placeholder="@tylerxhobbs"
          onChange={(e) => setTwitter(e.target.value)}
          value={twitter}
        />
        <h5>URL</h5>
        <h5>Name (optional)</h5>
        {items.map(({url, name}, index) =>
          <InputRow
            key={index}
            index={index}
            url={url}
            name={name}
            handleInput={updateItems}
          />
        )}
      </header>
      {/* <pre>{JSON.stringify({ items, twitter }, null, 2)}</pre> */}
      <div className="grid grid--4col text--centered">
        {items.map(({url, name}, index) =>
          <GridItem
            key={index}
            url={url}
            name={name}
          />
        )}
      </div>
    </div>
  );
}

export default App;

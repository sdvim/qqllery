import { useMemo, useState } from "react";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";

export default function App() {
  const [items, setItems] = useState([]);
  const [twitter, setTwitter] = useState('');
  const [title, setTitle] = useState('');

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
      <Menu
        items={items}
        updateItems={updateItems}
        twitter={twitter}
        setTwitter={setTwitter}
        title={title}
        setTitle={setTitle}
      />
      <Gallery
        items={items}
        title={title}
        twitter={twitter}
      />
    </div>
  );
}

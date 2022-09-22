import InputRow from "./InputRow";

export default function Menu({
  items,
  updateItems,
  twitter,
  setTwitter,
  title,
  setTitle,
}) {
  return (
    <header className="bg-shade-10 bb-1 p-2">
      <div className="grid mh-auto max-width-40">
        <h5>Gallery Title (optional)</h5>
        <h5>Twitter (optional)</h5>
        <input
          type="text"
          placeholder="qqllery"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
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
      </div>
    </header>
  );
}

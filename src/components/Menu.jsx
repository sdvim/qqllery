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
    <div className="grid">
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
  );
}

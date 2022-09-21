export default function InputRow({
  index = 0,
  url = '',
  name = '',
  handleInput,
}) {
  const debounceInput = (e, key) => {
    const value = e.clipboardData ? e.clipboardData.getData('text') : e.target.value;
    e.preventDefault();
    handleInput(index, key, value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="https://qql.art/token/..."
        onPaste={(e) => debounceInput(e, "url")}
        onChange={(e) => debounceInput(e, "url")}
        value={url}
      />
      <input
        type="text"
        placeholder="untitled"
        onPaste={(e) => debounceInput(e, "name")}
        onChange={(e) => debounceInput(e, "name")}
        value={name}
      />
    </>
  )
}

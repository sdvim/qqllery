import GalleryItem from "./GalleryItem";

export default function Gallery({ items }) {
  return (
    <div className="grid grid--4col text--centered">
      {items.map(({url, name}, index) =>
        <GalleryItem
          key={index}
          url={url}
          name={name}
        />
      )}
    </div>
  )
}

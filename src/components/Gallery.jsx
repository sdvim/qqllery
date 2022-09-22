import GalleryItem from "./GalleryItem";

export default function Gallery({ items }) {
  return (
    <section className="bg-shade-05 p-2">
      <div className="grid grid-4col text-centered max-width-40 mh-auto">
        {items.map(({url, name}, index) =>
          <GalleryItem
            key={index}
            url={url}
            name={name}
          />
        )}
      </div>
    </section>
  )
}

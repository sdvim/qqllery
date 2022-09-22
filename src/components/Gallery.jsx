import GalleryItem from "./GalleryItem";

export default function Gallery({
  items,
  title,
  twitter,
}) {
  const twitterLink = (username) =>
    <a href={`https://twitter/${username}`}>@{username}</a>;
  const galleryTitle = title.length > 0 ? title : "qqllery";
  const galleryCurator = twitter
    ? twitterLink(twitter)
    : <span>anonymous</span>;
  return (
    <section className="bg-shade-05 bb-1 p-2">
      <header className="max-width-40 mh-auto">
        <h1>{galleryTitle}</h1>
        <h4>Curation by {galleryCurator}.</h4>
        <h5>Artwork by {twitterLink("tylerxhobbs")} &amp; {twitterLink("dandelion_wist")}.</h5>
      </header>
      <div className="grid grid-4col text-centered max-width-40 mh-auto mt-2">
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

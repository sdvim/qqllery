const tokenUrl = 'https://qql.art/token/';
const imgUrl = 'https://img.qql.art/nonfinal/';

export default function GalleryItem({
  url,
  name,
}) {
  console.log(url);
  
  const isTokenUrl = url?.substr(0, tokenUrl.length) === tokenUrl;
  const isImgUrl = url?.substr(0, imgUrl.length) === imgUrl;

  if (!url || (!isTokenUrl && !isImgUrl)) return null;

  const imageSrc = isTokenUrl ? `${url.replace(tokenUrl, imgUrl)}.webp` : url;
  const imageName = (name && name.length > 0) ? name : 'untitled';

  return (
    <div className="GalleryItem">
      <img src={imageSrc} width={300} alt={imageName} />
      <h6>{imageName}</h6>
    </div>
  );
}
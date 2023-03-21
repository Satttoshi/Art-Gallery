import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} alt={title} height={243} width={192} />
      <figcaption>{artist}</figcaption>
    </>
  );
}

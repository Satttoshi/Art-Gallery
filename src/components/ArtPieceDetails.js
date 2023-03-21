import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ pieces, artslug }) {
  const { image, title, artist, genre, year } = pieces;
  return (
    <Link href="/art-pieces/">
      <h2>{title}</h2>
      <Image src={image} alt={title} height={400} width={800} />
      <figcaption>{artist}</figcaption>
    </Link>
  );
}

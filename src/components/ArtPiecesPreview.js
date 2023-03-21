import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, artslug }) {
  return (
    <Link href={`/art-pieces/${artslug}`}>
      <h2>{title}</h2>
      <Image src={image} alt={title} height={243} width={192} />
      <figcaption>{artist}</figcaption>
    </Link>
  );
}

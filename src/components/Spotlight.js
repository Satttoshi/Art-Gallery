import Link from "next/link";
import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);

  return (
    <Link href={`/art-pieces/${pieces[randomIndex].slug}`}>
      <Image
        src={pieces[randomIndex].imageSource}
        alt={pieces[randomIndex].name}
        height={700}
        width={500}
      />
      <figcaption>{pieces[randomIndex].artist}</figcaption>
    </Link>
  );
}

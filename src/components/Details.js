import { useRouter } from "next/router";
import Image from "next/image";

export default function Details({ year, genre, image, title, artist }) {
  const router = useRouter();

  return (
    <>
      <h2>
        <a>{title}</a>
      </h2>
      <Image src={image} alt={title} height={400} width={400} />
      <figcaption>{artist}</figcaption>
      <span>{year}</span>
      <span>{genre}</span>
      <button
        type="button"
        onClick={() => {
          router.push("/art-pieces");
        }}
      >
        BACK
      </button>
    </>
  );
}

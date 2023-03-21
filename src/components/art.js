import useSWR from "swr";
import Image from "next/image";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Art() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) {
    console.log("isLoading");
    return null;
  } else {
    console.log(data);
  }
  return (
    <ul>
      {data.map((piece, index) => {
        // title, artist, bild
        return (
          <li key={index}>
            <h2>{piece.name}</h2>
            <span>{piece.artist}</span>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={243}
              width={192}
            />
          </li>
        );
      })}
    </ul>
  );
}

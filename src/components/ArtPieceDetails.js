import { useRouter } from "next/router";

export default function ArtPieceDetails({ year, genre }) {
  const router = useRouter();

  return (
    <>
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

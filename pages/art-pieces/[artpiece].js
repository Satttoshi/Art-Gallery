import ArtPieceDetails from ".components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailsPage({ image, title, artist, genre, year }) {
  return <ArtPieceDetails />;
}

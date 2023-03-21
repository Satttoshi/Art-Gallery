import ArtPieceDetails from "../../src/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { artslug } = router.query;

  console.log(router);
  console.log(artslug);
  const artURL = `https://example-apis.vercel.app/api/art`;
  return <ArtPieceDetails pieces={pieces} artslug={artslug} />;
}

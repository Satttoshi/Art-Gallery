import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
}

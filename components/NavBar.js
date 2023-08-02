import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
    const router = useRouter();
    return (
      <nav>
        <Link href="/" className="hello" style={{color: router.pathname === "/"? "red":"blue"}}>
          Home
        </Link>
        <Link href="/about-us" style={{color: router.pathname === "/about-us"? "red":"blue"}}>
          About-Us
        </Link>        
      </nav>
    ); 
}
import Link from "next/link";

export default function Nav() {
return(
    <nav className="p-4 w-full"
                style={{ background: 'linear-gradient(120deg, rgba(112,166,238,.5) 0%,transparent 30%)' }}>
                <Link
                    href={"/"}
                    className="text-2xl font-bold"
                >
                    jrdev.org
                </Link>
            </nav>
)
}
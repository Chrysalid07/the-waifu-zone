import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-stone-500 flex flex-col font-[family-name:var(--font-geist-sans)]`}>
            <Link className="w-fit" href="/">
                <img className="w-10 h-10" src="Casa.webp" />
            </Link>
            <img className="w-fit" src="/In Progress Img (1).png" alt="Page In Progress" />
        </div>
    )
}
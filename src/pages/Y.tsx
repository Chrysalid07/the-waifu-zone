import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-stone-500 flex flex-col font-[family-name:var(--font-geist-sans)]`}>
            <div>
                <Link className="w-fit" href="/">
                    <img className="w-10 h-10" src="Casa.webp" />
                </Link>
                <Link className="w-fit" href="/mistery">
                    <img className="h-6 w-6 opacity-0" src="/Test images/To Be Determined.png" alt="" />
                </Link>
            </div>
            <img className="w-fit" src="/Test images/In Progress Img (1).png" alt="Page In Progress" />
        </div>
    )
}
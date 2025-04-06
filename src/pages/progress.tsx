import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-stone-500 flex flex-col font-[family-name:var(--font-geist-sans)]`}>
            <div>
                <Link className="w-fit" href="/">
                    <img className="w-10 h-10" src="/Pred images/Casa.webp" />
                </Link>
            </div>
            <img className="w-fit" src="/Test images/In Progress Img (1).png" alt="Page In Progress" />
        </div>
    )
}
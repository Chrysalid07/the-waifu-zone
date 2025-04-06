import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-white flex flex-col gap-2 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row">
                <Link className="rounded-lg" href="/">
                    <img className="w-10 h-10" src="/Pred images/Flecha.png" />
                </Link>
                <h1 className="text-7xl text-black font-semibold">Waifu News</h1>
            </div>
            {/*1.1*/}
            <div className="p-4">
                <h2 className="text-5xl text-black font-semibold">1.1</h2>
                <div className="flex flex-col gap-8 p-4 bg-black/5 rounded-lg w-fit p-6">
                    <h3 className="text-3xl text-black font-semibold">Novedades:</h3>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">New Waifu:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added Rina!</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">Additions:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added the a new teaser</p>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added better compatibility with small screens</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">Improvements:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Fixed de News page text color</p>
                    </div>
                </div>
            </div>
            {/*1.0*/}
            <div className="p-4">
                <h2 className="text-5xl text-black font-semibold">1.0</h2>
                <div className="flex flex-col gap-8 p-4 bg-black/5 rounded-lg w-fit p-6">
                    <h3 className="text-3xl text-black font-semibold">Novedades:</h3>
                    <div className="">
                        <p className="text-4xl text-black font-bold rounded-lg w-fit font-bold p-2">1.0 RELEASE!</p>
                        <p className="text-xl text-black">The official release is finally out!</p>
                    </div>
                    <div>
                        <p className="text-xl text-black">A new Waifu will be added after a certain time.</p>
                        <p className="text-xl text-black">Always remember to look up the page.</p>
                        <p className="text-xl text-black">There are some clues for future waifus!</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">New Waifu:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added Yoimiya!</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">Additions:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added the Waifu carrousel</p>
                        <p className="text-2xl text-black rounded-lg w-fit">· A mechanic has finally been added to Ellen</p>
                        <p className="text-2xl text-black rounded-lg w-fit">· Added a new section: THE WAIFU NEWS</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl text-black font-bold rounded-lg w-fit">Improvements:</h4>
                        <p className="text-2xl text-black rounded-lg w-fit">· Improved the Navbar and the respective icons </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
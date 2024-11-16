import Link from "next/link";
import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

export default function Page() {
    const [localCount, setLocalCount] = useState(0)

    const [globalLoading, setGlobalLoading] = useState(true)
    const [globalButtonLoading, setGlobalButtonLoading] = useState(true)
    const [globalCount, _setGlobalCount] = useState(0)

    const setGlobalCount = async () => {
        setGlobalButtonLoading(true)
        _setGlobalCount(globalCount + 1)
        const {data} = await axios.post("/api/counter")
        _setGlobalCount(data.count)
        setGlobalButtonLoading(false)
    }

    useEffect(() => {
        const cookies = new Cookies(null, {path: "/"})

        setLocalCount(parseInt(cookies.get("localCount") || "0"))

        //const interval = setInterval(() => {
        //    axios.get("/api/counter").then(r => {
        //        if (globalButtonLoading) return
        //
        //        _setGlobalCount(r.data.count)
        //    })
        //}, 500)

        axios.get("/api/counter").then(r => {
            _setGlobalCount(r.data.count)
            setGlobalButtonLoading(false)
            setGlobalLoading(false)
        })

        //return () => {
        //    clearInterval(interval)
        //}
    }, [])

    useEffect(() => {
        const f = async () => {
            const cookies = new Cookies(null, {path: "/"})

            cookies.set("localCount", localCount.toString())
        }

        f()
    }, [localCount])

    return (
        <div className={`h-screen bg-sky-800 flex flex-col font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row p-4 z-10">
                <Link href="/">
                    <img className="w-10 h-10" src="/Pred images/Casa.webp" />
                </Link>
                <h1 className="text-6xl text-white">Yoimiya</h1>
            </div>
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-white font-bold text-6xl">Dale amor a Yoimiya!</h1>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-white font-semibold text-4xl bg-black/20 rounded-lg">Contador Personal</h2>
                        <button className="w-96 font-black text-black relative aspect-square" onClick={() => {setLocalCount(localCount + 1)}}>
                            <span className="z-20 h-48 absolute top-6 bottom-0 left-0 right-0 text-white font-black text-8xl translate-y-24">
                                {localCount}
                            </span>
                            <img className="absolute top-0 bottom-0 left-0 right-0" src="https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png" alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-white font-semibold text-4xl bg-black/20 rounded-lg">Contador Global</h2>
                        <button className="w-96 font-black text-black relative aspect-square" disabled={globalButtonLoading} onClick={() => {
                                if (!globalButtonLoading) setGlobalCount()
                            }}>
                            <span className="z-20 h-48 absolute top-6 bottom-0 left-0 right-0 text-white font-black text-8xl translate-y-24">
                                {globalLoading ? "···" : globalCount}
                            </span>
                            <img className=" absolute top-0 bottom-0 left-0 right-0" src="https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h2 className="items-center text-white font-semibold rounded-lg bg-rose-300/50 text-2xl">Presiona un corazón para darle amor</h2>
            </div>
        </div>
    )
}
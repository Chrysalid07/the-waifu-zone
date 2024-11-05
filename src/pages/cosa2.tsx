import axios from "axios"
import Link from "next/link"
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
        <div className="w-full min-h-screen bg-black flex flex-row items-center justify-center gap-8">
            <div className="flex flex-row">
                <Link className="rounded-lg bg-white" href="/the-test-zone">
                    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/1174/1174444.png" />
                </Link>
                <Link className="rounded-lg bg-white" href="/">
                  <img className="w-10 h-10" src="/Casa.webp" />
                </Link>
            </div>
            <h1 className="text-4xl text-extrablack text-white">Rincón de pruebas 2</h1>
            <div className="flex flex-col w-96 gap-4 relative">
                <div className="flex items-center justify-center w-96 aspect-square -translate-y-5 text-white font-black text-9xl z-10">
                    {localCount}
                </div>
                <button className="w-full h-14 bg-white rounded-lg text-4xl font-black text-black" onClick={() => {setLocalCount(localCount + 1)}}>
                    ADD!
                </button>
                <img className=" absolute top-0" src="https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png" alt="" />
            </div>
            <div className="flex flex-col w-96 gap-4">
                <div className="w-full bg-white/10 h-10 flex items-center justify-center text-white rounded-lg">GLOBAL COUNTER</div>
                <div className="flex items-center justify-center w-96 aspect-square bg-white/25 rounded-lg text-white font-black text-9xl">
                    {globalLoading ? "···" : globalCount}
                </div>
                <button className="w-full h-14 bg-white rounded-lg text-4xl font-black text-black" disabled={globalButtonLoading} onClick={() => {
                    if (!globalButtonLoading) setGlobalCount()
                }}>
                    {globalButtonLoading ? "···" : "ADD!"}
                </button>
            </div>
        </div>
    )
}
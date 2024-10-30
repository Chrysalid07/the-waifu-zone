import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        const redisClient = await createClient({
            url: process.env.REDIS_URL as string
        }).connect()

        const count = await redisClient.get("globalCounter")
        res.status(200).json({
            count: parseInt(count || "0")
        })
        return
    }

    if (req.method == "POST") {
        const redisClient = await createClient({
            url: process.env.REDIS_URL as string
        }).connect()

        const count = await redisClient.get("globalCounter")
        await redisClient.set("globalCounter", parseInt(count || "0") + 1)

        res.status(200).json({
            count: parseInt(count || "0") + 1
        })
        return
    }
    
    res.send(501)
}

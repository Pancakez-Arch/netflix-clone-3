import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        console.log("Getting all movies...");
        const allMovies = await prismadb.movie.findMany();
        console.log(`All movies: ${JSON.stringify(allMovies)}`);
        const movieCount = allMovies.length;
        console.log(`Movie count: ${movieCount}`);
        console.log("Generating random index...");
        const randomIndex = Math.floor(Math.random() * movieCount);
        console.log(`Random index: ${randomIndex}`);
        console.log("Getting random movie...");
        const randomMovie = allMovies[randomIndex];
        console.log(`Random movie: ${JSON.stringify(randomMovie)}`);
        return res.status(200).json(randomMovie);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
            console.log(`Error stack: ${error.stack}`);
        } else {
            console.log(`Unknown error: ${error}`);
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
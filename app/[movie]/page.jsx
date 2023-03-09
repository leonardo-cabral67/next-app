import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const res = await data.json()
    return res.results.map(movie => ({
        movie: toString(movie.id)
    }))
}

export default async function MovieInfo({params}) {
    const {movie} = params
    const imageBaseURL = "https://image.tmdb.org/t/p/original"   
    const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movieResponse = await movieData.json()
    const {title, poster_path} = movieResponse
    return (
        <div className="flex flex-col justify-center items-center shadow-lg shadow-white p-8 text-white gap-8 rounded-sm">
            <Link href="/" className="self-start hover:text-red-600 hover:font-bold">
                Voltar
            </Link>
            <h2 className="text-4xl">{title}</h2>
            <Image src={imageBaseURL + poster_path} alt={title} width={400} height={400}/>
            <h3>Movie id: {movie}</h3>
        </div>
    )
}
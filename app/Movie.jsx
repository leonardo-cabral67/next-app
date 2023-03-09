import Image from "next/image"
import Link from "next/link"

export default function Movie({movie}) {
    const {title, poster_path, id} = movie
    const imageBaseURL = "https://image.tmdb.org/t/p/original"
    return (
        <li className="flex flex-col justify-center border-2 p-4 rounded-md hover:shadow-2xl hover:shadow-white cursor-pointer">
            <h2 className="mb-4 max-w-md font-semibold text-sm text-center text-white">{title}</h2>
            <Link href={`/${id}`}>
                <Image src={imageBaseURL + poster_path} alt={title} width={800} height={800}/>
            </Link>
        </li>
    )
}
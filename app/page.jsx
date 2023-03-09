import Movie from "./Movie"

export default async function Home() {
    const moviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
        next: {
            revalidate: 120
        }
    })  
    const moviesResponse = await moviesData.json()

    return (
        <div>
            <ul className="grid gap-16 grid-cols-fluid">
                {moviesResponse.results.map(movie => (
                    <Movie movie={movie} key={movie.id}/>
                ))}
            </ul>
        </div>
    ) 
}
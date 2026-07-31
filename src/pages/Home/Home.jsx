import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";

const Home=()=>{
    return(
        <>
        <Navbar></Navbar>
        <h2>This is the Home page section</h2>
        <MovieList></MovieList>
        </>
    )
}

export default Home
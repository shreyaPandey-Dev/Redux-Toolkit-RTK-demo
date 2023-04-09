import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmItems } from "features/film/filmSlice";


function FilmsList() {
    //get data from state
    const film = useSelector(state => state.film);
    const dispatch = useDispatch(); //call fetch func from slice
    useEffect(
        () => {
            dispatch(fetchFilmItems());
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return (
        <div>
            {film.isLoading && <div>Loading...</div>}
            {!film.isLoading && film.error ? <div>{film.error}</div> : null}
            {!film.isLoading &&
                <div className="card">
                    <img src={film.filmItems.Poster} alt="Avatar" />
                    <div className="container">
                        <h4><b>{film.filmItems.Title}</b></h4>
                        <p>{film.filmItems.Year}</p>
                    </div>
                </div>
            }
        </div >


    );
}

export default FilmsList;
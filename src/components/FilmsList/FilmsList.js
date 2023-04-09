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
                <ul>
                    <li>
                        Name:  {JSON.stringify(film.filmItems.Title)}
                    </li>
                    <li>
                        Year: {JSON.stringify(film.filmItems.Year)}
                    </li>
                </ul>}
        </div>


    );
}

export default FilmsList;
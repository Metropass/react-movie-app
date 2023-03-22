import React, { useState } from "react";
import Axios from "axios";
import {Container, AppName, Header, SearchBox, SearchIcon, MovieImage, SearchInput, MovieListContainer, Placeholder, Footer} from "./page-style/page";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import { API_KEY } from "./components/api-key";



function App() {
  const [search_query, updatesearch_query] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [clicked_selected_movie, onMovieSelect] = useState();

  const [timeout_value, update_timeout_value] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeout_value);
    updatesearch_query(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    update_timeout_value(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/react-movie-app/ontario-logo--desktop.svg" />
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/react-movie-app/ontario-logo--mobile.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={search_query}
            onChange={onTextChange}
            className="Search-Box"
          />
        </SearchBox>
      </Header>
      {clicked_selected_movie && <MovieInfoComponent clicked_selected_movie={clicked_selected_movie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src="/react-movie-app/movie-icon.svg" />
        )}
      </MovieListContainer>
          <Footer>
          <u>©King's Printer 2012 - 2023</u>
          <a href="https://www.ontario.ca/page/accessibility" className="linkcolour">Accessibility</a>
          <a href="https://www.ontario.ca/page/privacy-statement" className="linkcolour">Privacy</a>
          
          </Footer>
    </Container>
  );
}

export default App;

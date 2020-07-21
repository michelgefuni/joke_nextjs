import React from 'react';
import 'isomorphic-fetch';

const headers = new Headers();

headers.append('x-rapidapi-host', 'jokeapi-v2.p.rapidapi.com');
headers.append('x-rapidapi-key', '9249af1e56mshfbd3f87269e1899p167d7fjsnc3c9dde60d52');

const fetchInit = {
  method: 'GET',
  headers: headers,
};

const Home = ({ joke }: any) => <h1>{joke.joke}</h1>;

Home.getInitialProps = async () => {
  const response = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw,racist&idRange=0-150', fetchInit);
  const joke = await response.json();

  return { joke }
}

export default Home;
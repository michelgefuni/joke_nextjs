import React from 'react';
import 'isomorphic-fetch';

const Home = ({ joke }: any) => {
  if (!joke.id) {
    return <h1>Oops! Something gets wrong!</h1>;
  }

  return <>
    {!!joke.category && <strong>{joke.category}</strong>}
    <h1>{joke.joke || joke.setup}</h1>
    {!!joke.delivery && <h2>{joke.delivery}</h2>}
  </>
}

export const getServerSideProps = async () => {
  const headers = new Headers();
  
  headers.append('x-rapidapi-host', 'jokeapi-v2.p.rapidapi.com');
  headers.append('x-rapidapi-key', process.env.NEXT_PUBLIC_ANALYTICS_ID || '');

  const response = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw,racist&idRange=0-150', {
    method: 'GET',
    headers: headers,
  });

  const joke = await response.json();

  return {
    props: {
      joke
    }
  }
}

export default Home;

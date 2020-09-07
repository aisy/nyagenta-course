import React from 'react';

const getData = async () => {
  try {
    let res = await fetch("https://reactnative.dev/movies.json");
    let dataRes = await res.json();
    return dataRes.movies;
  } catch (error) {
    console.warn(error);
  }
}

export {
  getData
}

export function fetchPockemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`There is no pokemon with the name ${name}`)
    );
  });
}

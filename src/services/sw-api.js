export function getAllStarships(){
   let BASE_URL='https://swapi.co/api/starships/';
   return(
    fetch(BASE_URL, {mode: 'cors'}).then(res=>res.json())
    );
}

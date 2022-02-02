const API = 'https://swapi.dev/api/starships/';
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
      
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true);
      xhttp.onreadystatechange = (() => {
          if(xhttp.readyState === 4){
              (xhttp.status === 200)
                  ? resolve(JSON.parse(xhttp.responseText))
                  : reject(new Error('Error', url_api))
          }
      });
      xhttp.send();
  });
}

const anotherFunction = async () => {
    try{
      const data = await fetchData(API);
      console.log("Aqui inicia el llamado a la api");
        const starship = await data.results[1].name;
        const model1 = await data.results[1].model;
        const manufacturer = await data.results[1].manufacturer;
      
        console.log(starship);
        console.log(model1);
        console.log(manufacturer);
        
    }catch (error){
        console.error(error)
    }
}

anotherFunction();
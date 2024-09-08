const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 


function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  }
}


fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
  
    showData(data.students);
  })
  .catch(error => {
    console.error('Hubo un problema con Fetch:', error);
  });

const tBodyProducts = document.getElementById("tBodyProducts")
const URL_API = "https://minibackend-presupuesto.onrender.com/movimientos";
const btnAgregar = document.getElementById("btn-add");


const getMovimientos = async () => {
  try {
    const response = await axios.get(URL_API);
    const data = response.data;
    console.log(data)
    tBodyProducts.innerHTML = "";
      data.forEach(element => {
        tBodyProducts.innerHTML += `
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td>${element.type}</td>
        `
  });

  } catch (error) {
    console.log(error);
   
  }
};

btnAgregar.addEventListener("click", getMovimientos); 
// getMovimientos()

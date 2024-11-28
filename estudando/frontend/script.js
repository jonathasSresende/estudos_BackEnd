const API_USER='http://127.0.0.1:5000/users'
 
const formUser=document.querySelector("#form_user");

const corpoTabela=document.querySelector("#corpoTabela")



async function buscarUsuario(){
//essa é a nossa ligaçao com a API
  const response =await fetch(API_USER);

  //esse é o nosso json
  const users = await response.json();

  corpoTabela.innerHTML="";
  users.array.forEach(element => {corpoTabela.innerHTML+= `
  <th>
  <td>${element.id}</td>
  <td>${element.nome}</td>  
  </th>
  
  `
  })
}
 
formUser.addEventListener("submit",async (e)=>{
  e.preventDefault()
    const user={
        nome:document.querySelector("#name").value
    };
 
    await fetch(API_USER,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        });
        buscarUsuario();
        formUser.reset();
} ) // esse é o final do evento de submit
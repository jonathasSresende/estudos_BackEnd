// const API_USER = 'http://127.0.0.1:5000/users';
 
// const formUser = document.querySelector("#form_user");
// const userTable = document.querySelector("#corpoTabela");
// const updateForm=document.querySelector("#updateForm");
 
// // Esse é o nosso GET - select
// async function fetchUsers() {
//     try {
//         // Fazendo a requisição para a API usando API_USER
//         const response = await fetch(API_USER); //
//         // Verifica se esta acessando corretamente
//         if (!response.ok) {
//             console.error("Erro ao buscar usuários:", response.status);
//             return;
//         }
 
//         // Obtendo os dados no formato JSON
//         const users = await response.json();
//         console.log(users);
 
//         // Limpa a tabela e preenche com os dados retornados
//         userTable.innerHTML = '';
//         users.forEach(user => {
//             console.log(user);
//             userTable.innerHTML += `
//                 <tr>
//                     <td>${user.nome}</td>
//                     <td>
//                     <button onclick= editUser(${user.id}, ${user.nome}) >Editar</button>
//                     <button>Deletar</button>
//                     </td>
//                 </tr>
//             `;
//         });
//     } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//     }
// } // Final da função fetchUsers
 
// // Aqui inicia o nosso POST
// formUser.addEventListener("submit", async (e) => {
//     e.preventDefault(); // Evita o reload da página no submit
 
//     const user = {
//         nome: document.querySelector("#name").value
//     };
 
//     try {
//         // Enviando dados para a API
//         await fetch(API_USER, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(user)
//         });
 
//         // Atualiza a lista de usuários após o envio
//         fetchUsers();
//         formUser.reset();
//     } catch (error) {
//         console.error("Erro ao enviar usuário:", error);
//     }
// });
 
// // Chama a função fetchUsers para carregar os dados ao iniciar
 
// function editUser(id, name){
//     updateForm.style.display= 'block';
//     document.querySelector("#idUpdate").value=id;
//     document.querySelector("#nameUpdate").value=name;
// }
 
// updateForm.addEventListener("submit", async(e)=>{
//     e.preventDefault();
 
//     const id=document.querySelector("#idUpdate").value;
 
//     const updateuser={
//         id: document.querySelector("#idUpdate"),
//         name: document.querySelector("#nameUpdate")
//     }
//     // Atualizar o banco de dados com a modificação
//     await fetch(API_USER, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updateuser)
//     });
 
//     // Atualizar a tabela
//     fetchUsers();
//     // Limpando a tabela
//     updateForm.reset();
//     updateForm.style.display="none";
 
// })
 
 
// fetchUsers();

// const API_USER = 'http://127.0.0.1:5000/users';

// const formUser  = document.querySelector("#form_user");
// const userTable = document.querySelector("#corpoTabela");
// const updateForm = document.querySelector("#updateForm");

// // Esse é o nosso GET - select
// async function fetchUsers() {
//     try {
//         const response = await fetch(API_USER);
//         if (!response.ok) {
//             console.error("Erro ao buscar usuários:", response.status);
//             return;
//         }

//         const users = await response.json();
//         console.log(users);

//         userTable.innerHTML = '';
//         users.forEach(user => {
//             console.log(user);
//             userTable.innerHTML += `
//                 <tr>
//                     <td>${user.nome}</td>
//                     <td>
//                         <button onclick="editUser (${user.id}, '${user.nome}')">Editar</button>
//                         <button onclick="deleteUser (${user.id})">Deletar</button>
//                     </td>
//                 </tr>
//             `;
//         });
//     } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//     }
// }

// // Aqui inicia o nosso POST
// formUser .addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const user = {
//         nome: document.querySelector("#name").value
//     };

//     try {
//         await fetch(API_USER, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(user)
//         });

//         fetchUsers();
//         formUser .reset();
//     } catch (error) {
//         console.error("Erro ao enviar usuário:", error);
//     }
// });

// // Função para editar usuário
// function editUser (id, name) {
//     updateForm.style.display = 'block';
//     document.querySelector("#idUpdate").value = id;
//     document.querySelector("#nameUpdate").value = name;
// }

// // Atualizar usuário
// updateForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const id = document.querySelector("#idUpdate").value;

//     const updateuser = {
//         id: id,
//         nome: document.querySelector("#nameUpdate").value // Corrigido para pegar o valor
//     };

//     try {
//         await fetch(`${API_USER}/${id}`, { // Incluindo o ID na URL
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(updateuser)
//         });

//         fetchUsers();
//         updateForm.reset();
//         updateForm.style.display = "none";
//     } catch (error) {
//         console.error("Erro ao atualizar usuário:", error);
//     }
// });

// // Função para deletar usuário (exemplo)
// async function deleteUser (id) {
//     try {
//         await fetch(`${API_USER}/${id}`, { // Incluindo o ID na URL
//             method: 'DELETE'
//         });
//         fetchUsers(); // Atualiza a lista após a exclusão
//     } catch (error) {
//         console.error("Erro ao deletar usuário:", error);
//     }
// }

// // Chama a função fetchUsers para carregar os dados ao iniciar
// fetchUsers();



const API_USER = 'http://127.0.0.1:5000/users';

const formUser  = document.querySelector("#form_user");
const userTable = document.querySelector("#corpoTabela");
const updateForm = document.querySelector("#updateForm");

// Função para buscar usuários
async function fetchUsers() {
    try {
        const response = await fetch(API_USER);
        if (!response.ok) {
            console.error("Erro ao buscar usuários:", response.status);
            return;
        }

        const users = await response.json();
        console.log(users);

        userTable.innerHTML = '';
        users.forEach(user => {
            userTable.innerHTML += `
                <tr>
                    <td>${user.nome}</td>
                    <td>
                        <button onclick="editUser (${user.id}, '${user.nome}')">Editar</button>
                        <button onclick="deleteUser (${user.id})">Deletar</button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

// Função para adicionar um novo usuário
formUser .addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
        nome: document.querySelector("#name").value
    };

    try {
        await fetch(API_USER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        fetchUsers();
        formUser .reset();
    } catch (error) {
        console.error("Erro ao enviar usuário:", error);
    }
});

// Função para editar um usuário
function editUser (id, name) {
    updateForm.style.display = 'block';
    document.querySelector("#idUpdate").value = id;
    document.querySelector("#nameUpdate").value = name;
}

// Função para atualizar um usuário
updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.querySelector("#idUpdate").value;

    const updateUser  = {
        nome: document.querySelector("#nameUpdate").value // Corrigido para pegar o valor
    };

    try {
        await fetch(`${API_USER}/${id}`, { // Incluindo o ID na URL
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateUser )
        });

        fetchUsers();
        updateForm.reset();
        updateForm.style.display = "none";
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
    }
});

// Função para deletar um usuário
async function deleteUser (id) {
    try {
        await fetch(`${API_USER}/${id}`, { // Incluindo o ID na URL
            method: 'DELETE'
        });
        fetchUsers(); // Atualiza a lista após a exclusão
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
    }
}

// Chama a função fetchUsers para carregar os dados ao iniciar
fetchUsers();
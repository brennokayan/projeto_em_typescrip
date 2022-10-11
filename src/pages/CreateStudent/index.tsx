import { useEffect, useState } from "react";
import { CreateStudent } from "../../shared/services/api";
function Create_Student(){
    const [nome, set_nome] = useState<string>("")
    const [email, set_email] = useState<string>("")
    const [idade, set_idade] = useState<number>(0)
    async function NewStudent(){
        const data = {
        nome: nome,
        email:email,
        idade: idade
        }
        console.log(typeof(idade))
        await CreateStudent(data)
        .then(res => console.log(res.data));
    }

    return(
        <>
            <form>
                a
                <label htmlFor="nome">Nome: </label>
                <input type="text" onChange={(e) => set_nome(e.target.value)} placeholder="Digite seu nome" />
                <br />
                <label htmlFor="email">Email: </label>
                <input pattern="email" type="email" onChange={(e) => set_email(e.target.value)} placeholder="Digite seu Email"/>
                <br />
                <label htmlFor="idade">idade: </label>
                <input type="number" onChange={(e) => set_idade(e.target.valueAsNumber)} placeholder="Digite sua Idade"/>
                <br />
                <input type="button" value="Realizar Cadastro" onClick={NewStudent}/>
            </form>
        </>
    )
}

export default Create_Student
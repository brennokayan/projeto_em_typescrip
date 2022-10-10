import { useState } from "react";
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
        await CreateStudent(data)
        .then(res => console.log(res.data));
    }
    return(
        <>
            <form>
                <label htmlFor="nome">Nome: </label>
                <input type="text" />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email"/>
                <br />
                <label htmlFor="idade">idade: </label>
                <input type="number"/>
            </form>
        </>
    )
}

export default Create_Student
import { useEffect, useState } from "react";
import {Box, Button, TextField, } from '@mui/material'

import { CreateStudent } from "../../shared/services/api";
import  './styles.css';




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
            <Box bgcolor="#e7e6e3" width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
               <Box>
                    <form>
                        <TextField id ="nome" label="Nome" variant="outlined" onChange={(e) => set_nome(e.target.value)} color="secondary"/>
                        <br />
                        <br />
                        <TextField id="email" label="Email" variant="outlined" onChange={(e) => set_email(e.target.value)} color="secondary" />
                        <br />
                        <br />
                        <TextField id="idade" type="number" label="Idade" color="secondary" onChange={(e) => set_idade(e.target.valueAsNumber)} />
                        <br />
                        <br />
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Button variant="contained" color="primary" onClick={NewStudent} disabled={!nome || !email || !idade}>Realizar Cadastro</Button>
                        </Box>
                    </form>
               </Box>
            </Box>
        </>
    )
}

export default Create_Student
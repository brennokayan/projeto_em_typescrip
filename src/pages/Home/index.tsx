import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  CreateStudent, GetAluno } from '../../shared/services/api';

type Repository = {
  nome: string;
  email: string;
  id: string;
  idade: number;
}


function Home() {
  const [aluno, set_aluno] = useState<Repository[]>([])
  
  async function Aluno(){
    await GetAluno()
    .then(res =>{
      console.log(res.data);
      set_aluno(res.data);
    })
  }


  useEffect(() => { 
    Aluno()
  }, [])

  return (
    <>
    <Link to="/novoaluno">Cadastrar novo Aluno</Link> 
    <ul>
      {
        aluno.map(e =>
          <li key={e.id}>
          <h1>Nome: {e.nome}</h1>
          <p>Idade: {e.idade}</p>
          <p>Email: {e.email}</p>
          <p>UUID: {e.id}</p>
        </li>
        )
      }
    </ul>
    </>
  )
}

export default Home

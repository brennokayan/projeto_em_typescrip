import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333"
})
export async function GetAluno(){
    const res = await api.get('/veralunos');
    return res;
}
export async function CreateStudent(data: any) {
    const res = await api.post('/novoaluno', data)
    return res
}
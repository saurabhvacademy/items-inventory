import axios from 'axios'


export async function getAllUsers() {
    const response = await axios.get('http://localhost:4200/api/getAll', {});
    console.log(response);
    return response;
}



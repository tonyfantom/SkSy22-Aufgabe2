import axios from "axios";

const url = "http://localhost:1234/todos";

class Server {
    static async getToDo() {
        try {
            const res = await axios.get(url);
            return{...res.data};
        } catch(err) {
            return err;
        }    
    }
    
    static async addToDo(data) {
        return axios.post(url, data)
    }

    static async editToDo(data) {
        return axios.put(url, data);
    }

    static async deleteToDo(data) {
        return axios.delete(url, data);
    }
}

export default Server;
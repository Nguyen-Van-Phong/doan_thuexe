import axios from './axios'


const getAllProduct = () => {
    return axios.get('/products');

}

export { getAllProduct }



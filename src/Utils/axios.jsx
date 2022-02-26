
import axios from "axios";


const url="https://api.coingecko.com/api/v3/coins";
export const api =axios.create({
method:'GET',
    baseURL:url,
})

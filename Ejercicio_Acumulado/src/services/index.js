import axios from "axios";

const url = process.env.REACT_APP_URL_LA_NACION;

export async function getData() {
    try {
        const response = await axios({
            url: `${url}`,
            method: "GET",
        });
        return response;
    } catch (e) {
        console.log(e);
    }
}

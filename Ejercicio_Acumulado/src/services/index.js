import axios from "axios";

const url = "https://api-test-ln.herokuapp.com/articles";

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

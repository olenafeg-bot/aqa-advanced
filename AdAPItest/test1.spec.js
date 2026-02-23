const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
            } 
        console.log(response.data);
}
 test ('fetchData should throw an error for invalid URL', async () => {
    await expect(fetchData()).rejects.toThrow('Error fetching data: Request failed with status code 404');
});
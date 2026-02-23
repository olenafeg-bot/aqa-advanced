const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                postId: 1
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
    } 
}

test('fetchData should return comments for postId=1', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    
});

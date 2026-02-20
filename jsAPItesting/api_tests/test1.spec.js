const axios = require('axios').default;

test ('Verify status 200 OK is returned', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toEqual(200);
    console.log(response.status);
});


test ('Verify the correct data in response is received', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.data).toEqual({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });
        console.log(response.data);
    });

test ('Verify the data is added correctly', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        id: 101,
        title: 'foo',
        body: 'bar',
    });
    expect(response.status).toEqual(201);
    expect(response.data).toEqual({
        userId: 1,
        id: 101,
        title: 'foo',
        body: 'bar'
    });
    console.log(response.data);
});

test ('Verify the data from 1 endpoint', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toEqual(200);
    expect(response.data).toEqual({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });
        console.log(response.data);
    });

    test ('Verify the data from comments endpoint', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
        expect(response.status).toEqual(200);
        expect(response.data).toEqual([
            {
                postId: 1,
                id: 1,
                name: 'id labore ex et quam laborum',
                email: 'Eliseo@gardner.biz',
                body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' +
                    'tempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
            },
            {
                postId: 1,
                id: 2,
                name: 'quo vero reiciendis velit similique earum',
                email: 'Jayne_Kuhic@sydney.com',
                body: 'est natus enim nihil est dolore omnis voluptatem numquam\n' +
          'et omnis occaecati quod ullam at\n' +
          'voluptatem error expedita pariatur\n' +
          'nihil sint nostrum voluptatem reiciendis et',
            },
            {
                postId: 1,
                id: 3,
                name: 'odio adipisci rerum aut animi',
                email: 'Nikita@garfield.biz',
                body: 'quia molestiae reprehenderit quasi aspernatur\n' +
          'aut expedita occaecati aliquam eveniet laudantium\n' +
          'omnis quibusdam delectus saepe quia accusamus maiores nam est\n' +
          'cum et ducimus et vero voluptates excepturi deleniti ratione',
            },
            {
                postId: 1,
                id: 4,
                name: 'alias odio sit',
                email: 'Lew@alysha.tv',
                body: 'non et atque\n' +
          'occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n' +
          'quia voluptas consequuntur itaque dolor\n' +
          'et qui rerum deleniti ut occaecati',
            },
            {
                postId: 1,
                id: 5,
                name: 'vero eaque aliquid doloribus et culpa',
                email: 'Hayden@althea.biz',
                body: 'harum non quasi et ratione\n' +
          'tempore iure ex voluptates in ratione\n' +
          'harum architecto fugit inventore cupiditate\n' +
          'voluptates magni quo et',
            },  
        ]);
        console.log(response.data);
    });

    test ('Verify the data from  comments postId endpoint', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        expect(response.status).toEqual(200);
        expect(response.data).toEqual([
            {
                postId: 1,
                id: 1,
                name: 'id labore ex et quam laborum',
                email: 'Eliseo@gardner.biz',
                body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' +
                    'tempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
            },
            {
                postId: 1,
                id: 2,
                name: 'quo vero reiciendis velit similique earum',
                email: 'Jayne_Kuhic@sydney.com',
                body: 'est natus enim nihil est dolore omnis voluptatem numquam\n' +
          'et omnis occaecati quod ullam at\n' +
          'voluptatem error expedita pariatur\n' +
          'nihil sint nostrum voluptatem reiciendis et',
            },
            {
                postId: 1,
                id: 3,
                name: 'odio adipisci rerum aut animi',
                email: 'Nikita@garfield.biz',
                body: 'quia molestiae reprehenderit quasi aspernatur\n' +
          'aut expedita occaecati aliquam eveniet laudantium\n' +
          'omnis quibusdam delectus saepe quia accusamus maiores nam est\n' +
          'cum et ducimus et vero voluptates excepturi deleniti ratione',
            },
            {
                postId: 1,
                id: 4,
                name: 'alias odio sit',
                email: 'Lew@alysha.tv',
                body: 'non et atque\n' +
          'occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n' +
          'quia voluptas consequuntur itaque dolor\n' +
          'et qui rerum deleniti ut occaecati',
            },
            {
                postId: 1,
                id: 5,
                name: 'vero eaque aliquid doloribus et culpa',
                email: 'Hayden@althea.biz',
                body: 'harum non quasi et ratione\n' +
          'tempore iure ex voluptates in ratione\n' +
          'harum architecto fugit inventore cupiditate\n' +
          'voluptates magni quo et',
            },
        ]);
        console.log(response.data);
    });
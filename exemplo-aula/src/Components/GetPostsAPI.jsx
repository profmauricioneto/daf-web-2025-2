import React, { useEffect, useState } from 'react';
import Post from './Post';

const GetPostsAPI = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Carregando os dados...');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data)
        )
    }, [])
    return(
        <>
            <h2>Carregando a API</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <Post title={post.title} body={post.body} userId={post.userId} />
                </div>
            ))}
        </>
    )
}

export default GetPostsAPI


//get all posts
export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        }
    })
        .then(response => response.json())
}

//get single post 
export const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        }
    })
        .then(response => response.json())
}




//get single post by user 
export const getPostByUser = (userId) => {
    return fetch(`http://localhost:8000/posts?user=${userId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        }
    })
        .then(response => response.json())
}


//create a post 
export const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        },
        body: JSON.stringify(post)
    })
}

//update a post 
export const saveUpdatedPost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        },
        body: JSON.stringify(post)
    })
}

//delete a post by Id
export const deletePostById = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}`, {
        method: "DELETE",
        headers: { "Authorization": `Token ${localStorage.getItem("wyf_token")}` },
    })
}
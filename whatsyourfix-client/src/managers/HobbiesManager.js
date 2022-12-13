//get all hobbies
export const getHobbies = () => {
    return fetch("http://localhost:8000/hobbies", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        }
    })
        .then(response => response.json())
}

//create new hobby
export const createHobby = (hobby) => {
    return fetch("http://localhost:8000/hobbies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("wyf_token")}`
        },
        body: JSON.stringify(hobby)
    })
}
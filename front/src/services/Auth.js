const baseUrl = 'https://findep.herokuapp.com';


export function signUp(user) {
    return fetch(baseUrl + '/auth/signup', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(user => user)
        .catch(e => console.log(e))
}

export function login(user) {
    return fetch(baseUrl + '/auth/login', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
        .then(r => r.json())
        .then(user => {
            localStorage.setItem("user", JSON.stringify(user));
            return user
        })
        .catch(e => console.log(e))
}

export function logout() {
    return fetch(baseUrl + '/auth/logout')
        .then(r => r.json())
        .then(res => {
            localStorage.removeItem("user");
            return res
        })
        .catch(e => console.log(e));
}
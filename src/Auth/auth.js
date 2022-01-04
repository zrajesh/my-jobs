import { API } from "./Api"

export const signup = user => {
    return fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(resp => {
        console.log(resp.clone().json());
        return resp.json();
    })
    .catch(err => console.log(err))
}

export const signin = user => {
    return fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(resp => {
        console.log(resp.clone().json());
        return resp.json();
    })
    .catch(err => console.log(err))
}

export const getToken = email => {
    return fetch(`${API}/auth/resetpassword?email=${email.email}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(resp => {
        resp.clone().json()
        .then(data => {console.log(data.data.token);
            localStorage.setItem("resetToken", data.data.token)
        })
        .catch(err => console.log(err))
        return resp.json();
    })
    .catch(err => console.log(err))
}

export const resetPassword = passwordObj => {
    return fetch(`${API}/auth/resetpassword`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(passwordObj)
    })
    .then(resp => {
        console.log(resp.clone().json());
        return resp.json();
    })
    .catch(err => console.log(err))
}

export const getRecruiterJobs = token => {
    return fetch(`${API}/recruiters/jobs`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
        }
    })
    .then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
}

export const createJob = (job, token) => {
    return fetch(`${API}/jobs`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(job)
    })
    .then(resp => {
        resp.clone().json()
        return resp.json()
    })
    .catch(err => console.log(err))
}

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", JSON.stringify(data));
        next();
    }
}

export const signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false
    }
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"))
    } else {
        return false
    }
}

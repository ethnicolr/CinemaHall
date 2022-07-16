const URL = process.env.API_URL
const localStorageKey = '__auth_provider_token__'

interface Account {
    email: string
    password: string
}

interface UserResponse {
    success: boolean
    message?: string
    access_token?: string
    email?: string
    id?: number
}

interface Request {
    data?: object
    token?: string
}

function handleUserResponse(user: UserResponse) {
    window.localStorage.setItem(localStorageKey, user.access_token)
    return user
}

function register(form: Account): Promise<UserResponse> {
    return client('register', { data: form })
}

function login(form: Account): Promise<UserResponse> {
    return client('login', { data: form }).then(handleUserResponse)
}

function logout() {
    window.localStorage.removeItem(localStorageKey)
}

function getToken() {
    return window.localStorage.getItem(localStorageKey)
}


function client(endpoint: string, { data, token }: Request = {}) {
    const config = {
        method: data ? 'POST' : 'GET',
        body: JSON.stringify(data),
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            'Content-Type': data ? 'application/json' : undefined,
        },
    }
    console.log('clietn fetch')
    return fetch(`${URL}/${endpoint}`, config).then(async (response) => {
        const data = await response.json()
        console.log('client response', response)
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data.message)
        }
    })
}

export interface Details {
    id: string
    title: string
    vote_average: number
    poster_path: string | null
    overview: string
    tagline: string
    release_date: string
    first_air_date: string
    genres: [{ name: string; id: string }]
    runtime: number
    episode_run_time: number
    name: string
    production_countries: [{ name: string }]
    media_type?: string
    budget: number
}

export { register, login, logout, getToken, UserResponse, Account, client }

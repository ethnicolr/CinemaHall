const URL = 'http://localhost:3000'

interface Account {
    email: string
    password: string
}

interface UserResponse {

} 
interface RegistrationResponse {
    success: boolean;
    message: string;
  }

// function handleUserResponse({user}) {
//   window.localStorage.setItem('token', user.token)
// }

function register({ email, password }: Account): Promise<RegistrationResponse> {
  return client('register', { email, password });
}

function client(endpoint: string, data: object) {
    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`${URL}/${endpoint}`, config).then(async (response) => {
        const data = await response.json()
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

export { register, UserResponse, Account }
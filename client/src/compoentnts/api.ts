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
  
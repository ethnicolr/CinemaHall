import { CinemaShow } from '../components/api'

function get_prop<T>(obj: T): Record<keyof T, boolean>
function get_prop<T, K extends keyof T, U extends keyof T[K]>(
    obj: T,
    prop: U
): Record<keyof T, T[K][U]>
function get_prop<T, K extends keyof T, U extends keyof T[K]>(
    obj: T,
    prop?: U
) {
    return (Object.keys(obj) as K[]).reduce((result, key) => {
        result[key] = !prop ? false : obj[key][prop]
        return result
    }, {} as Record<keyof T, T[K][U] | false>)
}

interface TimeSession {
    cinemaShowId: number
    time: string
}
interface Technology {
    technology: string
    timeSessions: TimeSession[]
}

interface ShowDate {
    date: string
    shows: Technology[]
}

interface CinemaShows {
    cinemaId: number
    name: string
    showDates: ShowDate[]
}

const getDateAndTime = (value: string) => {
    const [week, day, time] = new Date(value)
        .toLocaleString('default', {
            day: '2-digit',
            weekday: 'long',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
        })
        .split(',')
    return { date: `${day}, ${week}`, time }
}

const groupTimetableShows = (allShows: CinemaShow[]): CinemaShows[] => {
    const shows = new Map()
    const result = allShows.reduce((group, e) => {
        const { cinema, cinemaShowId, startTime, format, technology } = e
        const { cinemaId, name } = cinema
        const { date, time } = getDateAndTime(startTime)
        const type = `${technology}, ${format}`

        // const existMovie = shows.get(cinema.cinemaId) as CinemaShows | undefined
        const existMovie = group[cinemaId]
        if (existMovie) {
            const existDate = existMovie.showDates.find((e) => e.date === date)
            if (existDate) {
                const existShow = existDate.shows.find(
                    (e) => e.technology === type
                )
                if (existShow) {
                    const timeSession = { cinemaShowId, time }
                    existShow.timeSessions.push(timeSession)
                } else {
                    const timeSession = { cinemaShowId, time }
                    const show = {
                        technology: type,
                        timeSessions: [timeSession],
                    }
                    existDate.shows.push(show)
                }
            } else {
                const timeSession = { cinemaShowId, time }
                const show = {
                    technology: type,
                    timeSessions: [timeSession],
                }
                const showDate = { date: date, shows: [show] }
                existMovie.showDates.push(showDate)
            }
        } else {
            const timeSession = { cinemaShowId, time }
            const show = {
                technology: type,
                timeSessions: [timeSession],
            }
            const showDate = { date: date, shows: [show] }
            const cimemaShow = {
                cinemaId,
                name,
                showDates: [showDate],
            }
            group[cinemaId] = cimemaShow
        }
        return group
    }, {} as { [key: string]: CinemaShows })
    return Object.values(result)
}

const groupSessionByDate = (cinemaShows: CinemaShow[]): ShowDate[] => {
    const group = new Map()
    cinemaShows.forEach((show) => {
        const { startTime, technology, format, cinemaShowId } = show
        const { date, time } = getDateAndTime(startTime)
        const type = `${technology}, ${format}`
        const existDate = group.get(date) as ShowDate | undefined
        if (existDate) {
            const existShow = existDate.shows.find((e) => e.technology === type)
            if (existShow) {
                const timeSession = { cinemaShowId, time }
                existShow.timeSessions.push(timeSession)
            } else {
                const timeSession = { cinemaShowId, time }

                const show = {
                    technology: type,
                    timeSessions: [timeSession],
                }
                existDate.shows.push(show)
            }
        } else {
            const timeSession = { cinemaShowId, time }
            const show = {
                technology: type,
                timeSessions: [timeSession],
            }
            const showDate = { date, shows: [show] }
            group.set(date, showDate)
        }
    })
    return [...group.values()]
}
export {
    get_prop,
    groupTimetableShows,
    groupSessionByDate,
    ShowDate,
    CinemaShows,
}

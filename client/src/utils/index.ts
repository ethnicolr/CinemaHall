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

export { get_prop }

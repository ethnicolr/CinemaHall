interface Filter {
    date: string
    technology: string[]
    format: string[]
}

type FilterChange = <K extends keyof Filter>(key: K, value: string) => void

export { Filter, FilterChange }

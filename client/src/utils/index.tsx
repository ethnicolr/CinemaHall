// function get_prop<T>(
//     state: T,
//     prop: keyof T[keyof T]
// ): { [K in keyof T]: string }
// function get_prop<T>(state: T): { [K in keyof T]: false }

// function get_prop<T extends { [key: string]: { [key: string]: string } }>(
//     state: T,
//     prop?: keyof T[keyof T]
// ) {
//     return Object.keys(state).reduce((field, key) => {
//         field[key] = !prop ? false : state[key][prop]
//         return field
//     }, {} as { [K in keyof T]: string | false })
// }

// type StateScheme = {
//     [key: string]: {
//         value: string
//         errors: string
//     }
// }

// const stateScheme: StateScheme = {
//     email: { value: '', errors: '' },
//     password: { value: '', errors: '' },
//     confirmPassword: { value: '', errors: '' },
// }

export const example = {
    date: new Date(),
    movieId: '123213',
    technology: [
        {
            name: 'Imax, 3D',
            time: [
                { isActive: false, value: new Date() },
                { isActive: true, value: new Date() },
                { isActive: false, value: new Date() },
            ],
        },
        {
            name: 'Relux, 3D',
            time: [
                { isActive: false, value: new Date() },
                { isActive: true, value: new Date() },
                { isActive: false, value: new Date() },
                { isActive: false, value: new Date() },
                { isActive: false, value: new Date() },
            ],
        },
    ],
}

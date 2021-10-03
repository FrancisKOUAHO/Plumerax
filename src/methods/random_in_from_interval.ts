export const random_in_from_interval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

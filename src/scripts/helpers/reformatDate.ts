export const reformatDate = (oldDate: string): string => {
    return oldDate.split('-').reverse().join('.');
}

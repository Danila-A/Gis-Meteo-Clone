export const reformatDate = (oldDate) => {
    const dateArray = oldDate.split('-');
    return dateArray.reverse().join('.');
}

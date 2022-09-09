export const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().slice(0, 10);
};

export enum ErrorMessages {
    CRITERIUM_NOT_MET = 'Nie spełniono kryterium',
}

export enum ButtonTypes {
    PRIMARY = 'primary',
    SUCCESS = 'success',
}

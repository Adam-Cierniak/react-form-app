import { Dispatch, SetStateAction } from 'react';

export interface IUserForm {
    firstName?: string;
    lastName: string;
    selectOption: string;
    pickedDate?: string;
}

export interface AppContext {
    value: IUserForm;
    setValue: Dispatch<SetStateAction<IUserForm>>;
}

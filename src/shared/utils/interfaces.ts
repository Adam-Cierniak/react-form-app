import { Dispatch, SetStateAction } from 'react';

export interface IUserForm {
    firstName?: string;
    lastName: string;
    selectOption: string;
    pickedDate?: string;
}

export interface IUserFormRawData extends Omit<IUserForm, 'selectOption' | 'pickedDate'> {
    selectOption: SelectOption;
    pickedDate: moment.Moment;
}

export interface AppContext {
    value: IUserForm;
    setValue: Dispatch<SetStateAction<IUserForm>>;
}

export type SelectOption = {
    label: string;
    value: string;
};
export interface ISelectOptions {
    selectOption: SelectOption;
}

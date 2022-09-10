export const enum OptionsValues {
    A = 'A',
    B = 'B',
    C = 'C',
}

export type SelectOption = {
    label: string;
    value: string;
};
export interface ISelectOptions {
    selectOption: SelectOption;
}

export const options: SelectOption[] = [
    { label: 'A', value: OptionsValues.A },
    { label: 'B', value: OptionsValues.B },
    { label: 'C', value: OptionsValues.C },
];

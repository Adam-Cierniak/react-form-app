import { UseFormClearErrors, UseFormSetError } from 'react-hook-form/dist/types';
import { ErrorMessages, ErrorTypes, IUserForm, SELECT_OPTION } from '../../../shared/utils';
import { OptionsValues } from '../SelectOptions';

export const checkWariantAndLastNameLength = (
    value: string,
    clearErrors: UseFormClearErrors<IUserForm>,
    setError: UseFormSetError<IUserForm>,
    selectOption: string,
): boolean => {
    clearErrors(SELECT_OPTION);
    if (selectOption === OptionsValues.C && value.length < 5) {
        setError(SELECT_OPTION, {
            type: ErrorTypes.CRITERIUM_NOT_MET,
            message: ErrorMessages.CRITERIUM_NOT_MET,
        });
        return false;
    } else return true;
};

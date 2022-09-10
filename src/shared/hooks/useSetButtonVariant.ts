import moment from 'moment';
import { useEffect, useState } from 'react';
import { ButtonVariant } from '../utils';

export const useSetButtonVariant = (pickedDate: string | undefined) => {
    const [buttonVariant, setButtonVariant] = useState<string>(ButtonVariant.GREEN);

    useEffect(() => {
        if (moment(pickedDate).isBefore('1900/01/01')) {
            setButtonVariant(ButtonVariant.BLUE);
        } else setButtonVariant(ButtonVariant.GREEN);
    }, [pickedDate]);

    return buttonVariant;
};

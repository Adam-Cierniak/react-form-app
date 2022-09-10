import moment from 'moment';
import { useEffect, useState } from 'react';

export const useDisable = (pickedDate: string | undefined): boolean => {
    const [state, setState] = useState(false);

    useEffect(() => {
        const currentMoment = moment();
        if (moment(pickedDate).isBefore(currentMoment) || !pickedDate) setState(false);
        else setState(true);
    }, [pickedDate]);

    return state;
};

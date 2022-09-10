import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker, Form } from 'antd';
import { LocalLabels, PICKED_DATE } from '../../../shared/utils';
import { FC } from 'react';

interface IBirthDate {
    pickedDate: string;
}

export const BirthDate: FC = (): JSX.Element => {
    const { control } = useFormContext<IBirthDate>();

    return (
        <>
            <Controller
                control={control}
                name={PICKED_DATE}
                render={({ field: { onChange } }) => (
                    <>
                        <Form.Item label={LocalLabels.BIRTH_DATE}>
                            <DatePicker
                                onChange={value => {
                                    onChange(value);
                                }}
                            />
                        </Form.Item>
                        ;
                    </>
                )}
            />
        </>
    );
};

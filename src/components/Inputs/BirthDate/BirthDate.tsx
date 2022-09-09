import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker, Form } from 'antd';

interface IBirthDate {
    pickedDate: string;
}

export const BirthDate = () => {
    const { control } = useFormContext<IBirthDate>();

    return (
        <>
            <Controller
                control={control}
                name="pickedDate"
                render={({ field: { onChange } }) => (
                    <>
                        <Form.Item label="Data urodzenia">
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

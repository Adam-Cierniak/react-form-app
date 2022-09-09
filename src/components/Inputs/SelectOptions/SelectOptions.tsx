import { Form, Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography } from 'antd';
import { ISelectOptions, SelectOption } from '../../../shared/utils';

const { Text } = Typography;

const options: SelectOption[] = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
];

export const SelectOptions = (): JSX.Element => {
    const { control, formState } = useFormContext<ISelectOptions>();
    return (
        <>
            <Controller
                name="selectOption"
                control={control}
                defaultValue={options[0]}
                render={({ field }) => (
                    <>
                        <Form.Item label="Wariant">
                            <Select {...field} options={options} />
                            {formState?.errors?.selectOption && (
                                <Text type="danger">{formState?.errors?.selectOption.message}</Text>
                            )}
                        </Form.Item>
                    </>
                )}
            />
        </>
    );
};

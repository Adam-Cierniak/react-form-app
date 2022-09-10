import { Form, Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography } from 'antd';
import { IUserForm, LocalLabels, SELECT_OPTION } from '../../../shared/utils';
import { OptionsValues, options } from './';
import { FC } from 'react';

const { Text } = Typography;

export const SelectOptions: FC = (): JSX.Element => {
    const { control, formState } = useFormContext<IUserForm>();

    return (
        <>
            <Controller
                name={SELECT_OPTION}
                control={control}
                defaultValue={OptionsValues.A}
                render={({ field }) => (
                    <>
                        <Form.Item label={LocalLabels.SELECT_OPTION}>
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

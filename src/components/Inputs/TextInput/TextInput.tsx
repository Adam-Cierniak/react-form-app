import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Form, Input } from 'antd';
import { Typography } from 'antd';
import {
    ErrorMessages,
    FIRST_NAME,
    LAST_NAME,
    IUserForm,
    LocalLabels,
    SELECT_OPTION,
} from '../../../shared/utils';
import { FC } from 'react';
import { checkWariantAndLastNameLength } from './utils';

const { Text } = Typography;

export const TextInput: FC = (): JSX.Element => {
    const { control, formState, setError, clearErrors } = useFormContext<IUserForm>();

    const selectOption = useWatch({
        control,
        name: SELECT_OPTION,
    });

    return (
        <>
            <Controller
                name={FIRST_NAME}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <>
                        <Form.Item label={LocalLabels.FIRST_NAME}>
                            <Input {...field} />
                            <Text type="danger">
                                {formState?.errors?.firstName &&
                                    formState?.errors?.firstName.message}
                            </Text>
                        </Form.Item>
                    </>
                )}
            />
            <Controller
                name={LAST_NAME}
                control={control}
                defaultValue=""
                rules={{
                    required: ErrorMessages.FIELD_REQUIRED,
                    validate: v =>
                        checkWariantAndLastNameLength(v, clearErrors, setError, selectOption),
                }}
                render={({ field }) => (
                    <>
                        <Form.Item label={LocalLabels.LAST_NAME}>
                            <Input {...field} />
                            {formState?.errors?.lastName && (
                                <Text type="danger">{formState?.errors?.lastName.message}</Text>
                            )}
                        </Form.Item>
                    </>
                )}
            />
        </>
    );
};

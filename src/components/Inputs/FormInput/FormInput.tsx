import { Controller, useFormContext } from 'react-hook-form';
import { Form, Input } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

interface IFormInput {
    firstName: string;
    lastName: string;
}

export const FormInput = () => {
    const { control, formState } = useFormContext<IFormInput>();

    return (
        <>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <>
                        <Form.Item label="Imię">
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
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                    <>
                        <Form.Item label="Nazwisko">
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

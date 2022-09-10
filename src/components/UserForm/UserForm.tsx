import { BirthDate } from '../../components/inputs/BirthDate';
import { TextInput } from '../../components/inputs/TextInput';
import { SelectOptions } from '../../components/inputs/SelectOptions';
import { SubmitHandler, useForm, FormProvider, useWatch } from 'react-hook-form';
import { Col, Form, Row } from 'antd';
import { FC, useContext } from 'react';
import moment from 'moment';
import { IUserForm, LocalLabels, PICKED_DATE } from '../../shared/utils';
import { Context } from '../../App';
import { Content } from 'antd/lib/layout/layout';
import { useDisable } from '../../shared/hooks';
import { useSetButtonVariant } from '../../shared/hooks/useSetButtonVariant';
import { SaveButton } from './styled';

export const UserForm: FC = () => {
    const { setValue } = useContext(Context);
    const methods = useForm<IUserForm>();
    const { handleSubmit, control } = methods;
    const pickedDate = useWatch({
        control,
        name: PICKED_DATE,
    });

    const isDisabled = useDisable(pickedDate);
    const buttonVariant = useSetButtonVariant(pickedDate);

    const onSubmit: SubmitHandler<IUserForm> = (props: IUserForm) => {
        setValue({
            ...props,
            pickedDate: moment(pickedDate).format('YYYY/MM/DD'),
        });
        alert('SUKCES');
    };
    return (
        <Content style={{ padding: '50px' }}>
            <FormProvider {...methods}>
                <Form
                    onFinish={handleSubmit(onSubmit)}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Row>
                        <Col span={6}>
                            <SelectOptions />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <TextInput />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <BirthDate />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={2}>
                            <SaveButton
                                className={buttonVariant}
                                type="primary"
                                htmlType="submit"
                                disabled={isDisabled}
                            >
                                {LocalLabels.SAVE}
                            </SaveButton>
                        </Col>
                    </Row>
                </Form>
            </FormProvider>
        </Content>
    );
};

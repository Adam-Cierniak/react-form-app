// @ts-nocheck
import { BirthDate } from '../../components/Inputs/BirthDate';
import { FormInput } from '../../components/Inputs/FormInput';
import { SelectOptions } from '../../components/Inputs/SelectOptions';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { Col, Form, Row } from 'antd';
import Button from 'antd-button-color';
import { FC, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonTypes, ErrorMessages, IUserForm } from '../../shared/utils';
import { Context } from '../../App';
import { Content } from 'antd/lib/layout/layout';

const schema = yup.object().shape({
    lastName: yup.string().required('To pole jest wymagane'),
    selectOption: yup.mixed().when(['lastName'], (lastName: any, schema: any, node: any) => {
        if (lastName.length < 5 && node.value === 'C')
            return yup.string().notOneOf(['C'], ErrorMessages.CRITERIUM_NOT_MET);
    }),
});

export const useEnabled = (initialState = false) => {
    const [state, setState] = use.State(initialState);
    const handleEnable = () => setState(false);
    const handleDisable = () => setState(true);
    const handleToggle = () => setState(!state);

    return [
        state,
        {
            setTrue: handleDisable,
            setFalse: handleEnable,
            setToggle: handleToggle,
        },
    ];
};

export const UserForm: FC = (): JSX.Element => {
    const { setValue } = useContext(Context);

    // const [enabled, { handleEnable, handleDisable }] = useEnabled(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [buttonType, setButtonType] = useState<ButtonTypes>(ButtonTypes.PRIMARY);

    const methods = useForm<IUserForm>({ resolver: yupResolver(schema) });

    const formS: IUserForm = methods.getValues();
    const { pickedDate } = methods.watch(formS, false);

    useEffect(() => {
        const currentDate: string = moment()._d;
        if (moment(pickedDate?._d).isBefore(currentDate) || !pickedDate?._d) setIsDisabled(false);
        else setIsDisabled(true);
    }, [pickedDate]);

    useEffect(() => {
        if (moment(pickedDate?._d).isBefore('1900/01/01') || !pickedDate?._d)
            setButtonType(ButtonTypes.SUCCESS);
        else setButtonType(ButtonTypes.PRIMARY);
    }, [pickedDate]);

    const onSubmit: SubmitHandler<IUserForm> = ({
        firstName,
        lastName,
        selectOption,
        pickedDate,
    }: IUserForm) => {
        setValue({
            firstName,
            lastName,
            selectOption: selectOption.value,
            pickedDate: moment(pickedDate?._d).format('YYYY/MM/DD'),
        });
        alert('SUKCES');
    };
    return (
        <Content style={{ padding: '50px' }}>
            <FormProvider {...methods}>
                <Form
                    onFinish={methods.handleSubmit(onSubmit)}
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
                            <FormInput />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <BirthDate />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={2}>
                            <Button
                                type={buttonType}
                                htmlType="submit"
                                disabled={isDisabled}
                                style={{ width: '50%' }}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </FormProvider>
        </Content>
    );
};

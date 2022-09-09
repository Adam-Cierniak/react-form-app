import { Content } from 'antd/lib/layout/layout';
import { useContext } from 'react';
import { Context } from '../../App';
import { AppContext } from '../../shared/utils';

export const UserInfo = (): JSX.Element => {
    const { value }: AppContext = useContext(Context);

    const { selectOption, firstName, lastName, pickedDate } = value;
    return (
        <>
            <Content style={{ padding: '50px' }}>
                <h1>UserInfo</h1>
                <h2>Wariant</h2>
                <h3>{selectOption}</h3>
                <h2>Imię</h2>
                <h3>{firstName ? firstName : '-'}</h3>
                <h2>Nazwisko</h2>
                <h3>{lastName}</h3>
                <h2>Data Urodzenia</h2>
                <h3>{pickedDate ? String(pickedDate) : '-'}</h3>
            </Content>
        </>
    );
};

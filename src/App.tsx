import React, { useState } from 'react';
import { Header } from './shared/components/Header';
import Routes from './Routes';
import { AppContext, IUserForm } from './shared/utils';

export const Context = React.createContext<AppContext>({
    value: { firstName: '-', lastName: '-', selectOption: '-', pickedDate: '-' },
    setValue: () => {},
});

const App = () => {
    const [value, setValue] = useState<IUserForm>({
        firstName: '-',
        lastName: '-',
        selectOption: '-',
        pickedDate: '-',
    });
    return (
        <>
            <Header />
            <Context.Provider value={{ value, setValue }}>
                <Routes />;
            </Context.Provider>
        </>
    );
};

export default App;

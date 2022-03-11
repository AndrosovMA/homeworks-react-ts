import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.FormEvent<HTMLInputElement>) => { // need to fix any
        setError('');
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim() === '') {
            setError('Error')
            setName('');
            return
        }
        addUserCallback(name);
        setName('');
        alert(`Hello ${name.trim()}!`) // need to fix
    }
    const addUserByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            addUser();
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            addUserByEnter={addUserByEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

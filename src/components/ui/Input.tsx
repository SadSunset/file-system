import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

export const Input: FunctionComponent<ComponentPropsWithoutRef<'input'>> = ({...props}) => {

    return (
        <input 
            {...props}
            type="text"
        />
    )
}
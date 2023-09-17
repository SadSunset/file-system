import {FunctionComponent, ComponentPropsWithRef} from 'react'

export const TextArea: FunctionComponent< ComponentPropsWithRef<'textarea'> > = ({...props}) => {
    return (
        <textarea {...props}/>
    )
}
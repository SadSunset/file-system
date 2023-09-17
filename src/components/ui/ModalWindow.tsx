import {FunctionComponent} from 'react'
import { Button } from './Button'
import { Input } from './Input';


type ModalProps = {
    children: JSX.Element | JSX.Element[];
    modalToggle: () => void
}

export const ModalWindow: FunctionComponent<ModalProps> = ({children, modalToggle}) => {

    return (
        <div>
            <div>
                <div>
                    <Input
                        placeholder='Введите имя папки или файла'
                    />
                </div>
                {children}
                <Button
                    btnText='Добавить'
                    onClick={modalToggle}
                />
            </div>
        </div>
    )
}
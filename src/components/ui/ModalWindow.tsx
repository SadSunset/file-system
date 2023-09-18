import {FunctionComponent} from 'react'
import { Button } from './Button'
import { Input } from './Input';


type ModalProps = {
    children: JSX.Element | JSX.Element[];
    modalToggler: () => void
}

export const ModalWindow: FunctionComponent<ModalProps> = ({children, modalToggler}) => {

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
                    onClick={modalToggler}
                />
            </div>
        </div>
    )
}
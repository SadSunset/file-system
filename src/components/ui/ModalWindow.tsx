import {FunctionComponent} from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { observer } from 'mobx-react-lite';
import files from '../../store/fileSystem'
import styles from './modal.module.scss'


type ModalProps = {
    children: JSX.Element | JSX.Element[];
    modalToggler: () => void
}

export const ModalWindow: FunctionComponent<ModalProps> = observer(({children, modalToggler}) => {

    return (
        <div>
            <div className={styles.modal}>
                <div>
                    <Input
                        placeholder='Введите имя папки или файла'
                        value={files.fileTitle}
                        onChange={(e: any) => files.titleHandler(e.target.value)}
                    />
                </div>
                {children}
                <Button
                    btnText='Close'
                    onClick={modalToggler}
                />
            </div>
        </div>
    )
})
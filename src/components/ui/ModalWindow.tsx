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
        <div className={styles.blackout}>
            <div className={`${styles.flexColumn} ${styles.controls}`}>
                <div>
                    <Input
                        placeholder='Enter sequence name'
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
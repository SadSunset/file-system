import { FunctionComponent } from 'react'
import { Button } from './Button'
import { observer } from 'mobx-react-lite';
import styles from './modal.module.scss'


type ModalProps = {
    children: JSX.Element | JSX.Element[];
    modalToggler: () => void;
    title: string;
}

export const DeleteModalWindow: FunctionComponent<ModalProps> = observer(({ children, modalToggler, title}) => {

    return (
        <div className={styles.blackout}>
            <div className={`${styles.flexColumn} ${styles.controls}`}>
                <div>
                    <p>Are you sure you want to delete {title.toUpperCase()}?</p>
                </div>
                {children}
                <Button
                    btnText='Cancel'
                    onClick={modalToggler}
                />
            </div>
        </div>
    )
})
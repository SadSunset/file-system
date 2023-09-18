import {FunctionComponent, useState} from 'react'
import { Button } from './ui/Button';
import { ModalWindow } from './ui/ModalWindow';

import styles from '../style/app.module.scss';

const App:FunctionComponent = () => {
    const [isModalShown, setIsModalShown] = useState(false)

    const modalWindowToggle = () => setIsModalShown(prev => !prev)

    return (
        <div>
            <button onClick={modalWindowToggle}>Добавить папку или файл</button>
            {
                isModalShown &&
                <ModalWindow modalToggler={modalWindowToggle}>
                    
                </ModalWindow>
            }
        </div>
    );
}

export default App;
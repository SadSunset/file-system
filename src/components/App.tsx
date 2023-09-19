import {FunctionComponent, useState} from 'react'
import { Button } from './ui/Button';
import { ModalWindow } from './ui/ModalWindow';

import styles from '../style/app.module.scss';
import { DirectoryList } from './DirectoryList';
import { DirectoryItem } from './DirectoryItem';
import { Header } from './ui/Header';
import files from '../store/fileSystem';

const App:FunctionComponent = () => {
    const [isModalShown, setIsModalShown] = useState(false)

    const modalWindowToggle = () => setIsModalShown(prev => !prev)

    return (
        <div>
            <Header modalToggler={modalWindowToggle}/>
            {
                isModalShown &&
                <ModalWindow modalToggler={modalWindowToggle}>
                    <Button
                        btnText='Add folder'
                        onClick={() => files.addFile()}
                    />
                </ModalWindow>
            }
            <DirectoryList />
        </div>
    );
}

export default App;
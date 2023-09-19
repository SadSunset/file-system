import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FileSystemType } from '../types/types';
import files from '../store/fileSystem';
import {ModalWindow} from './ui/ModalWindow';
import {Button } from './ui/Button';

type DirectoryProps = {
    directory: FileSystemType;
};

export const DirectoryItem: FunctionComponent<DirectoryProps> = observer(( {directory} ) => {
    const {id, title, subFiles} = directory
    const [isModalShown, setIsModalShown] = useState(false)
    const [isSubItemsShown, setIsSubItemsShown] = useState(false)

    const modalWindowToggler = () => {
        setIsModalShown(prev => !prev)
    }

    const subItemsToggler = () => {
        setIsSubItemsShown(prev => !prev)
    }

    return (
        <>
            {
                isModalShown &&
                    <ModalWindow modalToggler={modalWindowToggler}>
                        <Button
                            btnText='Добавить папку или файл'
                            onClick={() => files.addSubFile(id)}
                        />
                    </ModalWindow>
            }
            <div style={{border: '2px solid black', marginTop: '10px'}}>
                <span onClick={subItemsToggler}>{isSubItemsShown ? 'раскрыть' : 'закрыть'}</span>
                <p style={{ border: '1px solid red', margin: '3px'}}>Folder</p>
                <p onClick={modalWindowToggler} style={{ border: '1px solid green', margin: '3px' }}>Добавить папку</p>
                <p onClick={() => files.removeFile(id)}>Удалить папку</p>
            </div>
            {
                subFiles.length > 0 &&
                    subFiles.map(subFile => <DirectoryItem key={subFile.id} directory={subFile}/>)
            }
        </>
    )
})
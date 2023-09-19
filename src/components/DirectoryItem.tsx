import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FileSystemType } from '../types/types';
import files from '../store/fileSystem';
import {ModalWindow} from './ui/ModalWindow';
import {Button } from './ui/Button';
import { FileItem } from './FileItem';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../style/directoryItem.module.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import { DeleteModalWindow } from './ui/DeleteModalWindow';

type DirectoryProps = {
    directory: FileSystemType;
};

export const DirectoryItem: FunctionComponent<DirectoryProps> = observer(( {directory} ) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const [isSubItemsShown, setIsSubItemsShown] = useState(false)
    const [isDeleteItemModalShow, setIsDeleteItemModalShow] = useState(false)
    const { id, title, subFiles } = directory

    const modalWindowToggler = () => {
        setIsModalShown(prev => !prev)
    }

    const subItemsToggler = () => {
        setIsSubItemsShown(prev => !prev)
    }

    const showModalDeleteItem = () => {
        setIsDeleteItemModalShow(prev => !prev)
    }

    return (
        <>
            {
                isModalShown &&
                    <ModalWindow modalToggler={modalWindowToggler}>
                        <Button
                            btnText='Add'
                            onClick={() => files.addSubFile(id)}
                        />
                    </ModalWindow>
            }
            {
                isDeleteItemModalShow &&
                    <DeleteModalWindow modalToggler={showModalDeleteItem} title={title}>
                        <Button
                            btnText='Delete'
                            onClick={() => files.removeFile(id)}
                        />
                    </DeleteModalWindow>
            }
            <div className={styles.directoryItem}>
                <div>
                    <span onClick={subItemsToggler}>{isSubItemsShown ? <KeyboardArrowDownIcon className={styles.icons} /> : <KeyboardArrowRightIcon className={styles.icons} />}</span>
                    <span><FolderIcon className={styles.folder} />{title}</span>
                </div>
                <p className={styles.addDelete}>
                    <AddBoxIcon onClick={modalWindowToggler} className={styles.icons} />
                    <DeleteIcon onClick={showModalDeleteItem} className={styles.icons} />
                </p>
            </div>
            <div className={isSubItemsShown ? styles.subDirectory : styles.hide}>
            {
                subFiles.length > 0 &&
                        subFiles.map(subFile => !subFile.title.includes('.') ?
                                <DirectoryItem
                                    key={subFile.id}
                                    directory={subFile}
                                /> :
                                <FileItem
                                    key={subFile.id}
                                    directory={subFile}
                                />
                        )
                }
            </div>
        </>
    )
})
import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FileSystemType } from '../types/types';
import files from '../store/fileSystem';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../style/directoryItem.module.scss'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { DeleteModalWindow } from './ui/DeleteModalWindow';
import { Button } from './ui/Button';

type DirectoryProps = {
    directory: FileSystemType;
};

export const FileItem: FunctionComponent<DirectoryProps> = observer(({ directory }) => {
    const [isDeleteItemModalShow, setIsDeleteItemModalShow] = useState(false)
    const { id, title, subFiles } = directory

    const showModalDeleteItem = () => {
        setIsDeleteItemModalShow(prev => !prev)
    }

    return (
        <>
            {
                isDeleteItemModalShow &&
                <DeleteModalWindow modalToggler={showModalDeleteItem} title={title}>
                    <Button
                        btnText='Delete'
                        onClick={() => files.removeFile(id)}
                    />
                </DeleteModalWindow>
            }
            <div className={styles.subFile}>
                <div>
                    <InsertDriveFileIcon />
                    {title}
                </div>
                <DeleteIcon onClick={showModalDeleteItem} className={styles.file}/>
            </div>
            {
                subFiles.length > 0 &&
                subFiles.map(subFile => 
                    <FileItem key={subFile.id} directory={subFile} />
                )
            }
        </>
    )
})
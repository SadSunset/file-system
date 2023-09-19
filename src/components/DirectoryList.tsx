import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import files from '../store/fileSystem';
import { DirectoryItem } from './DirectoryItem';
import { FileItem } from './FileItem';

export const DirectoryList:FunctionComponent = observer(() => {
    return (
        <>
            {
                files.fileArray.map(item => !item.title.includes('.') ?
                    <DirectoryItem
                        key={item.id}
                        directory={item}
                    /> :
                    <FileItem key={item.id}
                        directory={item} />
                )
            }
        </>
    )
})
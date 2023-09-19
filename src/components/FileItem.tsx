import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FileSystemType } from '../types/types';
import files from '../store/fileSystem';
import { ModalWindow } from './ui/ModalWindow';
import { Button } from './ui/Button';
import { Dir } from 'fs';

type DirectoryProps = {
    directory: FileSystemType;
};

export const FileItem: FunctionComponent<DirectoryProps> = observer(({ directory }) => {
    const { id, title, subFiles } = directory

    return (
        <>
            <div style={{ border: '2px solid black', marginTop: '10px' }}>
                <p style={{ border: '1px solid red', margin: '3px' }}>File</p>
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
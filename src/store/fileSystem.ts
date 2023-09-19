import {makeAutoObservable} from 'mobx';
import {v4 as uuidv4} from 'uuid';
import {FileSystemType} from '../types/types';
import { recursionFilter, subFileAdding} from '../utils/utils';

class FileSystem {
    fileArray: FileSystemType[] = localStorage.files ? JSON.parse(localStorage.todos) : [];
    fileTitle = '';

    constructor() {
        makeAutoObservable(this)
    }

    titleHandler = (str: string) => {
        this.fileTitle = str;
    }

    addFile = () => {
        if (this.fileTitle.trim().length) {
            this.fileArray.push({
                id: uuidv4(),
                title: this.fileTitle,
                subFiles: [],
            });

            localStorage.setItem('files', JSON.stringify(this.fileArray));
            this.fileTitle = ''
        }
    }

    addSubFile = (id: string) => {
        if (this.fileTitle.trim().length) {
            const file = {
                id: uuidv4(),
                title: this.fileTitle,
                subFiles: [],
            };
            this.fileArray = subFileAdding(id, this.fileArray, file);
            localStorage.setItem('files', JSON.stringify(this.fileArray));
            this.fileTitle = ''
        }
    }

    removeFile = (id: string) => {
        this.fileArray = recursionFilter(id, this.fileArray);
        localStorage.setItem('todos', JSON.stringify(this.fileArray));

        if (!this.fileArray.length) {
            localStorage.removeItem('files')
        }
    }
}

const files = new FileSystem();

export default files;
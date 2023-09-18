import { FileSystemType } from "../types/types";

type SubFilesAddingProps = (
    id: string,
    array: FileSystemType[],
    files: FileSystemType,
) => FileSystemType[];

type RecursionProps = (
    id: string,
    array: FileSystemType[],
) => FileSystemType[];

export const subFileAdding: SubFilesAddingProps = (id, array, file) => {
    return (
        array.reduce((arr: FileSystemType[], item) => {
            if (item.id === id) {
                item.subFiles.push(file);
                arr.push(item);
            } else {
                arr.push({...item, subFiles: subFileAdding(id, item.subFiles, file)})
            }
            return arr;
        }, [])
    )
}

export const recursionFilter: RecursionProps = (id, array) => {
    return (
        array.reduce((arr: FileSystemType[], item) => {
            if (item.id !== id) {
                arr.push({...item, subFiles: recursionFilter(id, item.subFiles)});
            }
            return arr;
        }, [])
    )
}
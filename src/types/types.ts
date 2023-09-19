export type FileSystemType = {
    id: string;
    title: string;
    subFiles: FileSystemType[];
}
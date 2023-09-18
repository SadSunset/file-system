export type FileSystemType = {
    id: string;
    title: string;
    text: string;
    subFiles: FileSystemType[];
}
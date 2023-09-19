import { FunctionComponent } from 'react';

type HeaderProps = {
    modalToggler: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({modalToggler}) => {
    return (
        <>
            <div>
                <p>Main Folder</p>
                <button onClick={modalToggler}>Create</button>
            </div>
        </>
    )
}
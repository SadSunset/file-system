import { FunctionComponent } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

type HeaderProps = {
    modalToggler: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({modalToggler}) => {
    return (
        <>
            <div>
                <p>
                    Create <AddBoxIcon onClick={modalToggler} />
                </p>
            </div>
        </>
    )
}
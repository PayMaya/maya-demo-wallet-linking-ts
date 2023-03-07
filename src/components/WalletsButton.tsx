import { MouseEventHandler } from 'react';
import RedirectButton from "./RedirectButton"

interface HomeButtonProps {
    onClick?: MouseEventHandler
}

function WalletsButton({ onClick }: HomeButtonProps) {
    return (
        <div className="button-container nav-bar-item">
            <RedirectButton display='Wallets' url='/wallets' className='btn' onClick={onClick} />
        </div>
    )
}

export default WalletsButton
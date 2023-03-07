import CartSummaryButton from "../components/CartSummaryButton";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import NavBar from '../components/NavBar';
import TitleSection from "../components/TitleSection";
import UserCard from "../components/UserCard";
import WalletsButton from "../components/WalletsButton";
import { WalletList } from "../components/WalletList";

function WalletsPage() {
    return (
        <div className='body'>
            <NavBar
                left={<><HomeButton /><WalletsButton/></>}
                right={<><CartSummaryButton /><UserCard /></>}
            />
            <TitleSection text='Your Wallets'/>
            <ContentSection>
                <WalletList/>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default WalletsPage
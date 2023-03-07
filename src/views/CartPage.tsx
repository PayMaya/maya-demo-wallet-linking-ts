import { Dispatch } from 'redux';
import { useSelector, useDispatch } from "react-redux"
import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import CartList from '../components/CartList';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import ContentSection from '../components/ContentSection';
import { linkWalletThunk, payWithWalletThunk } from '../thunks/wallet';
import WalletsButton from '../components/WalletsButton';

function CartPage() {
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const wallet:WalletDetails = useSelector((state:AppState) => state.wallet)

  const dispatch: Dispatch<any> = useDispatch()
  const onCheckout = () => {
    dispatch(payWithWalletThunk(wallet, cart.totalAmount))
  }

  const onLinkWallet = () => {
    dispatch(linkWalletThunk());
  } 

  return (
    <div className='body'>
      <NavBar
        left={<><HomeButton /><WalletsButton/></>}
        right={<UserCard />}
      />
      <TitleSection text='Your Cart'/>
      <ContentSection>
        <CartList />
        <div className='redirect-button'>
          { wallet.customer ?           
          <button className='btn green large' onClick={() => onCheckout()}>Pay With Wallet</button> :
          <button className='btn green large' onClick={() => onLinkWallet()}>Link a Wallet</button>
  
 }
        </div>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default CartPage;

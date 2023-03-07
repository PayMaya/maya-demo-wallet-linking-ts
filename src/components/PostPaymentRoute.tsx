import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';

interface PostPaymentRedirectProps {
    children: JSX.Element
}

function PostPaymentRoute({ children }: PostPaymentRedirectProps) {
    const postPaymentRedirectUrl: string = useSelector((state: AppState) => state.postPaymentRedirectUrl)

    if (postPaymentRedirectUrl) {
        return ( <Navigate to={postPaymentRedirectUrl} replace={true} /> ) 
    } else {
        return ( children )
    }
}

export default PostPaymentRoute
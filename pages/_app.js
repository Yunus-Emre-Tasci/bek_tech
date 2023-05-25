import { StoreProvider } from '@/redux/store-provider'
import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import {
  ToastContainer
} from "react-toastify";
import ScrollToTop from '@/components/ScrollToTop';
import Switch from '@/components/Switch';


export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r from-[#ece9e6] to-white" >
    <StoreProvider>
      <ToastContainer/>
      < Component {
        ...pageProps
      }
      />
      <Switch/>
      < ScrollToTop />
    </StoreProvider>
    </div>
  )
}

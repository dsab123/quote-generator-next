import { Provider } from 'react-redux';
import { store } from '../store'; // daniel change this import
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

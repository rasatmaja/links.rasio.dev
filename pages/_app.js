import '../styles/tailwind.css';
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default MyApp;

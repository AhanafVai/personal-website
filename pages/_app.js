import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {" "}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { NumberProvider } from "@/context/NumberContext";

export default function App({ Component, pageProps }) {
  return (
    <NumberProvider>
      <Component {...pageProps} />
    </NumberProvider>
  );
}

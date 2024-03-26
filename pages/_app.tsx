import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="YOUR_CLIENT_ID"
      activeChain="ethereum"
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

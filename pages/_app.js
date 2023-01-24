import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { SessionProvider } from "next-auth/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig, useSigner } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const chains = [mainnet, polygon];
const projectId = "8bc78d25d0d8a616d7d8a3ddad523708";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: false,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,

  //walletConnectVersion: 2,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "Sora",
          "--w3m-accent-color": "#a21caf",
          "--w3m-background-color": "#09090b",
          "--w3m-logo-image-url":
            "https://93vrlm-3000.csb.app/img/logo-4mobeers.svg",
        }}
        termsOfServiceUrl="https://4mobeers.nft/terms"
        privacyPolicyUrl="https://4mobeers.nft/privacy"
        // explorerAllowList={          "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369,8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3,f759efd17edb158c361ffd793a741b3518fe85b9c15d36b9483fba033118aaf2"        }
        //Metamask|Rainbow|UnstoppableDomains|Opensea
      />
    </>
  );
}

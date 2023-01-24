import Link from "next/link";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useSession } from "next-auth/react";

export default function IndexPage() {
  const {
    connector: activeConnector,
    address,
    status,
    isConnected,
  } = useAccount();
  const { data } = useSession();
  return (
    <div>
      <div>
        <h1>Wallet Connect Web3Modal</h1>
      </div>
      <div>
        <Web3Button icon="hide" label="CONNECT" balance="hide" />
      </div>
      <div>{address}</div>
      <div>
        {!isConnected ? (
          <div>Connecting...</div>
        ) : (
          <div>
            Connected to {activeConnector.name}
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>{status}</div>
    </div>
  );
}

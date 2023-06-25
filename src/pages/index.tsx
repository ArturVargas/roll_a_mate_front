import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import ListExample from "../components/Navbar";
import Image from "next/image";
import mateLogo from "../public/images/logo.png";

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="content">
        <Image src={mateLogo} width={500} height={500} alt="logo" />

        <p>
          Send crypto payments (ETH) with at least 95% discount on Ethereum
          Mainnet!
        </p>
        <ConnectButton />
        {isConnected && <ListExample />}
      </div>
    </>
  );
}

export default Page;

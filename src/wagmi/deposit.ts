import { useCallback } from "react";
import { ethers } from "ethers";
import { usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { MateTreasury } from "../abis/MateTreasury";

export const deposit = () => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();

  const tx = signer.sendTransaction({
    to: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    value: ethers.utils.parseEther("0.2"),
  });

  return {
    tx,
  };
};

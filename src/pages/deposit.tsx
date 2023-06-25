import { deposit } from "../wagmi/deposit";
import { useAccount } from "wagmi";

export default function Deposit() {
  const { isConnected } = useAccount();
  console.log({ isConnected });

  const addDeposit = () => {
    try {
      const { tx } = deposit();
      console.log("--->> ", tx);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <h2>Deposit</h2>
      <input placeholder="Amount" />
      <button onClick={() => addDeposit()}>Deposit</button>
    </div>
  );
}

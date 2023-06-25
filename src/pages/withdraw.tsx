import { useAccount, useEnsName } from "wagmi";

export default function Withdraw() {
  return (
    <div className="content">
      <h2>Withdraw</h2>
      <input placeholder="Amount" />
      <button>Withdraw</button>
    </div>
  );
}

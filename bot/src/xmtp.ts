import { Client } from "@xmtp/xmtp-js";
import { ethers, Wallet } from  'ethers';
import { LitAuthClient } from '@lit-protocol/lit-auth-client';
import { ProviderType } from '@lit-protocol/constants';
//import { ethers } from "ethers";
//import { PKPEthersWallet } from '@lit-protocol/pkp-ethers';

export const chat =async (ctx: any, txHash: any) => {
  const data = ctx.update.message.text.split(' ');
  const wallet = data[1]; 
  const mymessage = data.slice(2).join(' ');
  let txHash2= '0x55c7a6203dc789f1ad465adc8d64b2a82c7eacc756a93357a5becd7fc6a42665';
  const authClient = new LitAuthClient({
      litRelayConfig: {
          relayApiKey: 'C69EBCED-E13C-44B0-89CD-F4050BDF09C4_erik',
      }
  });


  
  const sessionBot = authClient.initProvider(ProviderType.Otp,{
    //userId: '+527471086815', 
    userId: 'erik.valle@gmail.com', 
    emailCustomizationOptions: { fromName: 'Mate Project'}
});
  const response = await sessionBot.relay.pollRequestUntilTerminalState(
    txHash2
  );
  if (response.status !== 'Succeeded') {
    throw new Error('Minting failed');
  }
  

  console.log("wallet: ", response );
  //aqui tengo que cambiar la wallet que se genera con lit
  //const walletenvia2=ethers.Wallet.createRandom();
  const walletenvia2 = Wallet.fromPhrase('citizen recipe april concert luggage inject habit sustain nature vibrant fire vote');
  console.log('seed: ', walletenvia2.mnemonic );
  //const walletenvia = response.pkpEthAddress ? response.pkpEthAddress : '' ;
  //console.log(walletenvia);
  
   //const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/c85bf58182a946f986c50dc387a145c2'); // Configura tu proveedor JSON-RPC
   //const signer = await provider.getSigner(walletenvia);

/*
  const pkpWallet = new PKPEthersWallet({
    controllerAuthSig: signer,
    // Or you can also pass in controllerSessionSigs
    pkpPubKey: response.pkpPublicKey,
    rpc: 'https://chain-rpc.litprotocol.com/http'
  });
  await pkpWallet.init();
  */

   const xmtp = await Client.create(walletenvia2, {env: "production" });
   const conv = await xmtp.conversations.newConversation( wallet );
 const message = await conv.send(mymessage);
  ctx.reply('message delivered');
    
}
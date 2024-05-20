import { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";
require('dotenv').config();
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const suppliedToPubkey = process.argv[2] || null;
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");


console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);



const tx = new Transaction();

const LAMPORTS_TO_SEND = 100;


const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});


tx.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, tx, [
  senderKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}` 
);
console.log(`Transaction signature is ${signature}!`);
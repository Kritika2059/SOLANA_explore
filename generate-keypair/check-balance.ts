import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("GRpjWSf3gsJQab2yV7xpWYHyxxDSBnxnPwdJPBkNctqj");
const connection = new Connection("https://api.devnet.solana.com", "confirmed")
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInLamports}!`
  );


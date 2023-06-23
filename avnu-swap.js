const {
  executeSwap,
  fetchQuotes,
  buildGetNonce,
  signQuote,
} = require("@avnu/avnu-sdk");

const ethAddress =
  "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
const usdcAddress =
  "0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426";
const takerAddress =
  "0x022aAdB68263d40197452fe3e7b5172f156C12b01cFc0F969a391f076b203cC3";

const params = {
  sellTokenAddress: ethAddress,
  buyTokenAddress: usdcAddress,
  sellAmount: "0x02",
  takerAddress,
};

const getQuote = async () => {
  try {
    const quotes = await fetchQuotes(params);
    console.log(quotes);
    return quotes;
  } catch (error) {
    console.log("[Error !!] ", error);
  }
};

const getNonce = async () => {
  try {
    const nonce = await buildGetNonce(
      takerAddress,
      "0x534e5f474f45524c49",
      true
    );
    console.log("--->> ", nonce);
    return nonce;
  } catch (error) {
    console.log("[Error !!] ", error);
  }
};

const sign = async (quote) => {
  try {
    const signature = await signQuote(
      takerAddress,
      quote,
      "0",
      "0x534e5f474f45524c49"
    );
    console.log(signature);
    return signature;
  } catch (error) {
    console.log("[Error !!] ", error);
  }
};

sign({
  quoteId: "08a0ce16-aaf9-4c82-87d4-8654a0212574",
  sellTokenAddress:
    "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  sellAmount: 2n,
  sellAmountInUsd: 0,
  buyTokenAddress:
    "0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
  buyAmount: 0n,
  buyAmountInUsd: 0,
  estimatedAmount: true,
  chainId: "0x534e5f474f45524c49",
  blockNumber: "0xc8e27",
  expiry: null,
  routes: [[Object]],
  avnuFees: 0n,
  avnuFeesInUsd: 0,
  avnuFeesBps: 5n,
  integratorFees: 0n,
  integratorFeesInUsd: 0,
  integratorFeesBps: 0n,
  priceRatioUsd: 0,
  liquiditySource: "DEX_AGGREGATOR",
});

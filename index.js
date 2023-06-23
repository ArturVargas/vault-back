const express = require("express");
const axios = require("axios");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// prices for swap.
app.get("/price", async (req, res) => {
  try {
    const { sellAmount } = req.query;
    console.log({ sellAmount });

    const response = await axios.get(
      "http://goerli.api.avnu.fi/swap/v1/quotes",
      {
        params: {
          sellTokenAddress:
            "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7", // eth
          buyTokenAddress:
            "0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426", // usdc
          sellAmount: "0x02",
        },
      }
    );
    console.log(response.data);
    res.status(200).send("ok...");
  } catch (error) {
    console.log(["[ERROR !!]", error]);
  }
});
// swap with avnu.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

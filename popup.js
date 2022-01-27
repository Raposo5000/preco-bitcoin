let preco_compra = document.getElementById("preco-compra");
let preco_venda = document.getElementById("preco-venda");

const getBTCPrice = async () => {
  const response = await fetch("https://www.mercadobitcoin.net/api/BTC/ticker");
  const data = await response.json();

  const { buy, sell } = data.ticker;

  const compra = Number(buy).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const venda = Number(sell).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  preco_venda.innerHTML = compra;
  preco_compra.innerHTML = venda;
  return { buy, sell };
};

getBTCPrice();

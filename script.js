let bidder = 0;
const tæller = document.getElementById("tæller");

document.getElementById("knap").addEventListener("click", () => {
  bidder++;
  tæller.textContent = bidder < 10
    ? `Bidder: ${bidder}`
    : `Bidder: ${bidder}. Nu er du vist mæt.`;
});

export default function currencyFormatter(currency) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const formattedAmount = formatter.format(currency);
  return formattedAmount;
}

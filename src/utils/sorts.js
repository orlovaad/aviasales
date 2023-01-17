export function sortPrice(sortedTickets) {
  return sortedTickets.sort((a, b) => a.price - b.price);
}

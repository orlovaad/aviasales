// useEffect(() => {
//   setSearchId(searchID, searchIdStore.searchId);
//   for (let i = 0; i < ticketsStore.tickets.length; i++) {
//     setTickets(...tickets, ticketsStore.tickets[i]);
//   }
//   console.log(tickets);
// }, [searchID, tickets]);

// useEffect(() => {
//   setSortTickets(tickets.slice(0, 2));
// }, [stop, tickets]);

// useEffect(() => {
//   fetch('https://front-test.dev.aviasales.ru/search')
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       setSearchId(res.searchID);
//     })
//     .catch((e) => console.log(e));
// }, []);

// useEffect(() => {
//   if (searchID && stop === false) {
//     async function subscribe() {
//       let response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchID}`);

//       if (response.status === 502 || response.status === 500) {
//         await subscribe();
//       } else if (response.status === 404) {
//       } else if (response.status !== 200) {
//         console.error(response.statusText);
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         await subscribe();
//       } else {
//         let ticketsPart = await response.json();
//         setTickets([...tickets, ...ticketsPart.tickets]);

//         if (ticketsPart.stop) {
//           setStop(ticketsPart.stop);
//         }
//       }
//     }

//     subscribe();
//   }
// }, [searchID, tickets, stop]);

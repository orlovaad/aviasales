import logo from './assets/logo.svg';
import FilterTransfers from './components/FilterTransfers';
import FilterSuitable from './components/FilterSuitable';
import './App.css';
import searchIdStore from './responseSearchId.json';
import ticketsStore from './responseTickets.json';
import { useEffect, useState } from 'react';
import Ticket from './components/Ticket';

function App() {
  const [searchID, setSearchId] = useState();
  const [tickets, setTickets] = useState([]);
  const [sortTickets, setSortTickets] = useState([]);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    setSearchId(searchIdStore.searchId);

    if (searchID && stop === false) {
      function subscribe() {
        setTickets([...tickets, ...ticketsStore.tickets]);
        if (ticketsStore.stop) {
          setStop(ticketsStore.stop);
        }
      }
      subscribe();
    }

    setSortTickets(tickets.slice(0, 5));
  }, [searchID, tickets, stop]);
  return (
    <div className="App">
      <div className="appWrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <FilterTransfers />
          <FilterSuitable />
          <div className="tickets">
            {sortTickets.map((ticket) => (
              <Ticket {...ticket} />
            ))}

            <div className="moreTickets">Показать еще 5 билетов!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

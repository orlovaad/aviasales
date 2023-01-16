import logo from './assets/logo.svg';
import FilterTransfers from './components/FilterTransfers/FilterTransfers';
import FilterSuitable from './components/FilterSuitable';
import './App.css';
import ticketsStore from './responseTickets.json';
import { useState } from 'react';
import Ticket from './components/Ticket';
import { CHEAP_FILTER_TYPE, FAST_FILTER_TYPE, OPTIMAL_FILTER_TYPE } from './components/FilterSuitable/consts';
// import {
//   ALL_TRANSFERS_COUNT,
//   NULL_TRANSFERS_COUNT,
//   ONE_TRANSFERS_COUNT,
//   TWO_TRANSFERS_COUNT,
//   THREE_TRANSFERS_COUNT,
// } from './components/FilterTransfers/constsTransfers';
import { TRANSFER_LABELS, TRANSFER_LABELS_INDEX } from './components/FilterTransfers/constsTransfers';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [filterSuitable, setFilterSuitable] = useState(CHEAP_FILTER_TYPE);
  const [filterTransfers, setFilterTransfers] = useState(new Array(Object.keys(TRANSFER_LABELS).length).fill(false));
  const [maxCountTickets, setMaxCountTickets] = useState(5);

  const sortPrice = (sortedTickets) => {
    return sortedTickets.sort((a, b) => a.price - b.price);
  };
  const sortDuration = (sortedTickets) => {
    return sortedTickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  };
  const sortOptimal = (sortedTickets) => {
    return sortedTickets.sort(
      (a, b) =>
        a.price - b.price ||
        a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  };

  const getTransfersCount = () => {
    let indexTransfers = [];
    filterTransfers.map((elem, index) => {
      if (elem === true) {
        indexTransfers.push(index - 1);
      }

      return elem;
    });
    return indexTransfers;
  };

  const sortTransfers = () => {
    const transfersCount = getTransfersCount();
    console.log(transfersCount);

    if (transfersCount[0] === -1 || transfersCount.length === 0) {
      return [...ticketsStore.tickets].slice(0, maxCountTickets);
    }
    console.log(maxCountTickets);
    return [...ticketsStore.tickets]
      .filter((ticket, index) => {
        let isChecked = false;
        for (let i = 0; i < transfersCount.length; i++) {
          if (
            transfersCount[i] === ticket.segments[0].stops.length ||
            transfersCount[i] === ticket.segments[1].stops.length
          ) {
            isChecked = true;
          }
        }
        console.log(ticket, index, isChecked);
        return isChecked;
      })

      .slice(0, maxCountTickets);
  };

  const printTickets = () => {
    console.log(sortTransfers());
    if (filterSuitable === CHEAP_FILTER_TYPE) {
      return sortPrice(sortTransfers()).map((ticket) => <Ticket {...ticket} />);
    } else if (filterSuitable === FAST_FILTER_TYPE) {
      return sortDuration(sortTransfers()).map((ticket) => <Ticket {...ticket} />);
    } else {
      return sortOptimal(sortTransfers()).map((ticket) => <Ticket {...ticket} />);
    }
  };

  return (
    <div className="App">
      <div className="appWrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <FilterTransfers setFilterTransfers={setFilterTransfers} filterTransfers={filterTransfers} />
          <FilterSuitable setFilterSuitable={setFilterSuitable} filterSuitable={filterSuitable} />
          <div className="tickets">
            {printTickets()}
            <button
              className="moreTickets"
              style={{ visibility: maxCountTickets < ticketsStore.tickets.length ? 'visible' : 'hidden' }}
              onClick={() => setMaxCountTickets(maxCountTickets + 5)}
            >
              Показать еще 5 билетов!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

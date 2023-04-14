import pluralize from '../../utils/pluralize';
import { timeDeparture, timeArival } from '../../utils/calculateDate.js';

function Segment({ origin, destination, date, stops, duration }) {
  return (
    <div className="ticket_data">
      <div className="ticket_data__item">
        <p className="ticket_data__item__name">{`${origin} - ${destination}`}</p>
        <p className="ticket_data__item__value">{`${timeDeparture(date)} - ${timeArival(date, duration)} `}</p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__name">В пути</p>
        <p className="ticket_data__item__value">
          {`${Math.floor(duration / 60)}ч ${(duration % 60).toString().padStart(2, '0')}м`}
        </p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__name">{pluralize(stops.length, ['пересадка', 'пересадки', 'пересадок'])}</p>
        <p className="ticket_data__item__value">{stops.join(',')}</p>
      </div>
    </div>
  );
}

export default Segment;

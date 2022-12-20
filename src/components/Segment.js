import pluralize from '../utils/pluralize';
import { calculateDate, calculateNewDate } from '../calculateDate.js';

function Segment({ origin, destination, date, stops, duration }) {
  return (
    <div className="ticket_data">
      <div className="ticket_data__item">
        <p className="ticket_data__item__name">{`${origin} - ${destination}`}</p>
        <p className="ticket_data__item__value">
          {`${calculateDate(date).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
                         -       
                        ${calculateNewDate(date, duration).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      `}
        </p>
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

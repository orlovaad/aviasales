import aviaLogo from '../assets/avialogo.svg';
import Segment from './Segment.js';

function Ticket({ price, carrier, segments }) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price ">{`${price} Р`}</div>
        <div className="ticket__logo">
          <img src={aviaLogo} alt="" />
        </div>
      </div>
      <div className="ticket_data-wrapper">
        {/* Туда и обратно*/}
        {segments.map((segment) => (
          <Segment {...segment} />
        ))}
      </div>
    </div>
  );
}

export default Ticket;

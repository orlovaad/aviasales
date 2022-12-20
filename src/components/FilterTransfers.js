// import checkerOn from '../assets/checker-on.svg';
// import checkerOff from '../assets/checker-off.svg';
import '../styles/FilterTransfers.css';
import TransferLabel from './TransferLabel';

function FilterTransfers() {
  const labels = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  return (
    <div className="filterTransfers__wrapper">
      <div className="filterTransfers">
        <h3>Количество пересадок</h3>
        <form>
          {labels.map((label) => (
            <TransferLabel text={label} />
          ))}
        </form>
      </div>
    </div>
  );
}

export default FilterTransfers;

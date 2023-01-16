// import checkerOn from '../assets/checker-on.svg';
// import checkerOff from '../assets/checker-off.svg';
import '../../styles/FilterTransfers.css';
import TransferLabel from './TransferLabel';
// import {
//   ALL_TRANSFERS_COUNT,
//   NULL_TRANSFERS_COUNT,
//   ONE_TRANSFERS_COUNT,
//   TWO_TRANSFERS_COUNT,
//   THREE_TRANSFERS_COUNT,
// } from './constsTransfers';
import { TRANSFER_LABELS } from './constsTransfers';

function FilterTransfers({ filterTransfers, setFilterTransfers }) {
  // Замыкание
  const handleClickFilterTransfersElement = (filterType) => {
    return () => {
      const updatedFilterTransfers = filterTransfers.map((item, index) => (index === filterType ? !item : item));

      if (filterType === 0) {
        for (let index = 1; index < updatedFilterTransfers.length; index++) {
          updatedFilterTransfers[index] = false;
        }
      } else {
        updatedFilterTransfers[0] = false;
      }
      setFilterTransfers(updatedFilterTransfers);
    };
  };

  return (
    <div className="filterTransfers__wrapper">
      <div className="filterTransfers">
        <h3>Количество пересадок</h3>
        <form>
          {Object.values(TRANSFER_LABELS).map((label, index) => (
            <TransferLabel
              text={label}
              callback={handleClickFilterTransfersElement(index)}
              isChecked={filterTransfers[index]}
            />
          ))}
        </form>
      </div>
    </div>
  );
}

export default FilterTransfers;

import logo from './assets/logo.svg';
import checkerOn from './assets/checker-on.svg';
import checkerOff from './assets/checker-off.svg';
import aviaLogo from './assets/avialogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <div className="sidebar__wrapper">
            <div className="sidebar">
              <h3>Количество пересадок</h3>
              <form>
                <label>
                  <input type="checkbox" className="input visually-hidden" />
                  <span className="checker"></span> Все
                </label>
                <label>
                  <input type="checkbox" className="input visually-hidden" />
                  <span className="checker"></span> Без пересадок
                </label>
                <label>
                  <input type="checkbox" className="input visually-hidden" />
                  <span className="checker"></span>1 пересадка
                </label>
                <label>
                  <input type="checkbox" className="input visually-hidden" />
                  <span className="checker"></span>2 пересадки
                </label>
                <label>
                  <input type="checkbox" className="input visually-hidden" />
                  <span className="checker"></span>3 пересадки
                </label>
              </form>
            </div>
          </div>
          <div className="filter2">
            <div className="filter2__element filter2__low-price filter2__element__clicked ">Самый дешевый</div>
            <div className="filter2__element filter2__faster">Самый быстрый</div>
            <div className="filter2__element filter2__optimal">Оптимальный</div>
          </div>
          <div className="tickets">
            <div className="ticket">
              <div className="ticket__header">
                <div className="ticket__price ">13 400 P</div>
                <div className="ticket__logo">
                  <img src={aviaLogo} alt="" />
                </div>
              </div>
              <div className="ticket_data-wrapper">
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">10:45 – 08:00</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">21ч 15м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">2 пересадки</p>
                    <p className="ticket_data__item__value">HKG, JNB</p>
                  </div>
                </div>
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">11:20 – 00:50</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">13ч 30м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">1 пересадкa</p>
                    <p className="ticket_data__item__value">HKG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ticket">
              <div className="ticket__header">
                <div className="ticket__price ">13 400 P</div>
                <div className="ticket__logo">
                  <img src={aviaLogo} alt="" />
                </div>
              </div>
              <div className="ticket_data-wrapper">
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">10:45 – 08:00</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">21ч 15м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">2 пересадки</p>
                    <p className="ticket_data__item__value">HKG, JNB</p>
                  </div>
                </div>
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">11:20 – 00:50</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">13ч 30м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">1 пересадкa</p>
                    <p className="ticket_data__item__value">HKG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ticket">
              <div className="ticket__header">
                <div className="ticket__price ">13 400 P</div>
                <div className="ticket__logo">
                  <img src={aviaLogo} alt="" />
                </div>
              </div>
              <div className="ticket_data-wrapper">
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">10:45 – 08:00</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">21ч 15м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">2 пересадки</p>
                    <p className="ticket_data__item__value">HKG, JNB</p>
                  </div>
                </div>
                <div className="ticket_data">
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">MOW – HKT</p>
                    <p className="ticket_data__item__value">11:20 – 00:50</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">В пути</p>
                    <p className="ticket_data__item__value">13ч 30м</p>
                  </div>
                  <div className="ticket_data__item">
                    <p className="ticket_data__item__name">1 пересадкa</p>
                    <p className="ticket_data__item__value">HKG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="moreTickets">Показать еще 5 билетов!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

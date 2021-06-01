const generateNumbersrate = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () =>
  generateNumbersrate(1, 10)
    .map(seatNumber => `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`)
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();

  return generateNumbersrate(1, 10)
    .map(
      lineNumber =>
        `<div class="sector__line" data-line-number="${lineNumber}">${seatsString}</div>`,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorStrings = generateNumbersrate(1, 3)
    .map(
      sectorNumber =>
        `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorStrings;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectSeatElem = document.querySelector('.board__selected-seat');

  selectSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();

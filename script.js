const daysElement = document.getElementById('days');
const monthYearElement = document.getElementById('month-year');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
  daysElement.innerHTML = '';

  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    daysElement.appendChild(emptyCell);
  }

  for (let i = 1; i <= lastDate; i++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = i;
    daysElement.appendChild(dayCell);
  }
}

prevButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);

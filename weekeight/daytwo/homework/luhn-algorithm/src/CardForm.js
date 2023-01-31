import React from 'react';

function CardForm() {
  const [valid, setValid] = React.useState(false);
  const [card, setCard] = React.useState('');

  const validCard = (setValue) => {
    let ch = 0;
    const num = String(setValue).replace(/\D/g, '');
    const isOdd = num.length % 2 !== 0;
    if ('' === num) return false;
    for (let i = 0; i < num.length; i++) {
      let n = parseInt(num[i], 10);
      ch += (isOdd | 0) === i % 2 && 9 < (n *= 2) ? n - 9 : n;
    }
    return 0 === ch % 10;
  };

  React.useEffect(() => {
    setValid(validCard(card));
    console.log(valid);
  });

  function changeName(event) {
    setCard(event.target.value);
  }

  return (
    <div>
      <h3>{card}</h3>
      <div>
        <h2>{valid ? 'valid' : 'invalid'}</h2>
        <p>
          Card number: <input type='text' value={card} onChange={changeName} />
        </p>
      </div>
    </div>
  );
}

export default CardForm;

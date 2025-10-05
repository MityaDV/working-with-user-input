import { useState } from 'react';

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  // const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputLostFocusHandler = (e) => {
    setWasNameInputTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setWasNameInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
        />
        {isNameInputInvalid && <p className="error-text">Обязательное поле</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;

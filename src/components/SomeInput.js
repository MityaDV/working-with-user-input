import { useEffect, useRef, useState } from 'react';

const SomeInput = (props) => {
  // 2 подход
  const nameInputRef = useRef();

  // 1 подход
  const [enteredName, setEnteredName] = useState('');
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  useEffect(() => {
    if (isEnteredNameValid) {
      console.log('Данные валидны');
    }
  }, [isEnteredNameValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputLostFocusHandler = (e) => {
    setWasNameInputTouched(true);

    if (enteredName.trim() === '') {
      setIsEnteredNameValid(false);
      return;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasNameInputTouched(true);

    if (enteredName.trim() === '') {
      setIsEnteredNameValid(false);
      return;
    }

    setIsEnteredNameValid(true);

    console.log(enteredName);
    console.log(nameInputRef.current.value);
    setEnteredName('');
  };

  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputClasses = isNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          ref={nameInputRef}
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

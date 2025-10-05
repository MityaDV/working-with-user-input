import { useRef, useState } from 'react';

const SomeInput = (props) => {
  // 2 подход
  const nameInputRef = useRef();

  // 1 подход
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName);
    console.log(nameInputRef.current.value);
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;

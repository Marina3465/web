import React from 'react';
import './Modal.css';

function Modal({ toggleModal }) {
  return (
    <div className='modal-container' >
      <div className={`modal-content ${toggleModal ? 'active' : ''}`}>
        <h1>Фильтры</h1>
        <button onClick={() => toggleModal(false)}>&times;</button>
        <ul>
          <li>
            Способ приготовления
            <label for="filter">Выберите опцию:</label>
            <select id="filter">
              
              <option >Варка</option>
              <option>Жарка</option>
              <option>Тушение</option>
            </select>
            </li>
          <li>Тип блюда</li>
          <li>Вегетерианские блюда</li>
          <li>Происхождение кухни</li>
          <li>По времени приготовления</li>
          <li>Острое</li>
          <li>Низкокалорийное</li>
          <li>Время дня</li>
        </ul>

      </div>
    </div>
  );
}

export default Modal;

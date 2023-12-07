import React from 'react';
import './Modal.css';

function Modal({ toggleModal }) {
  return (
    <div className='modal-container' >
      <div className={`modal-content ${toggleModal ? 'active' : ''}`}>
        <div className='filter-header'>
          <h1>Фильтры</h1>
          <button className='filter-close' onClick={() => toggleModal(false)}>&times;</button>
        </div>
        <ul className='menu-filter'>
          <li className='item-filter'>
            <span>Способ приготовления</span>
            <ul className='list-filter-hidden'>
              <li className='item-filter-hidden'><span>Варка</span></li>
              <li className='item-filter-hidden'><span>Варка</span></li>
              <li className='item-filter-hidden'><span>Варка</span></li>
              <li className='item-filter-hidden'><span>Варка</span></li>
            </ul>
          </li>
          <li className='item-filter'><span>Тип блюда</span></li>
          <li className='item-filter'><span>Вегетерианские блюда</span></li>
          <li className='item-filter'><span>Происхождение кухни</span></li>
          <li className='item-filter'><span>По времени приготовления</span></li>
          <li className='item-filter'><span>Острое</span></li>
          <li className='item-filter'><span>Низкокалорийное</span></li>
          <li className='item-filter'><span>Время дня</span></li>
        </ul>

      </div>
    </div>
  );
}

export default Modal;

import React, { useState } from 'react';
import './Modal.css';

function Modal({ toggleModal }) {
  const handleReload = () => {
    window.location.reload();
  };
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
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
            </ul>
          </li>
          <li className='item-filter'><span>Тип блюда</span>
            <ul className='list-filter-hidden'>
            <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
              <li className='item-filter-hidden'><input type='checkbox'/><label>Варка</label></li>
            </ul>
          </li>
          <li className='item-filter'><span>Вегетерианские блюда</span></li>
          <li className='item-filter'><span>Происхождение кухни</span></li>
          <li className='item-filter'><span>По времени приготовления</span></li>
          <li className='item-filter'><span>Острое</span></li>
          <li className='item-filter'><span>Низкокалорийное</span></li>
          <li className='item-filter'><span>Время дня</span></li>
        </ul>
        <div className='modal-buttons'>
          <button className='modal-apply'>Применить</button>
          <button className='modal-reset' onClick={handleReload}>Сбросить</button>
        </div>

      </div>
    </div>
  );
}

export default Modal;

// import React from 'react'
// import style from '@/app/assets/styles/form.module.css';


// const OrderForm = () => {
//      const handleSubmit = (e: React.FormEvent) => {
//        e.preventDefault();

//        const token = '7399534092:AAEMHZLCKRIJIleRtLYca_6MvmqYviy87OQ'; 
//        const chat_id = '-1002170191645'; // Замените на ваш чат ID
//        const text = `Имя: `;

//        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

//        fetch(url, { method: 'GET' })
//          .then((response) => response.json())
//          .then((data) => {
//            if (data.ok) {
//              alert('Сообщение отправлено!');
//            } else {
//              alert('Произошла ошибка при отправке сообщения.');
//            }
//          })
//          .catch((error) => {
//            console.error('Ошибка:', error);
//            alert('Произошла ошибка при отправке сообщения.');
//          });
//      };
//   return (
//     <>
//       <h1>Замовити</h1>
//       <form onSubmit={handleSubmit} className={style.forms}>
//         <label>
//           <input placeholder="Ваше ім'я" type="text" />
//         </label>
//         <label>
//           <input type="tel" placeholder="Ваш телефон" />
//         </label>
//         <label>
//           <input type="email" placeholder="емеіл" />
//         </label>
//         <label>
//           <input type="text" placeholder="Ваше ім'я в телеграм" />
//         </label>
//         <label>
//           <input type="date" placeholder="на яку дату" />
//         </label>
//         <label>
//           <input type="time" placeholder="в якій годині" />
//         </label>
//         <label>
//           <input className={style.submitBtn} type="submit" placeholder="Замовити" />
//         </label>
//       </form>
//     </>
//   );
// }

// export default OrderForm
'use client'
import React, { useState } from 'react';
import style from '@/app/assets/styles/form.module.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', 
    telegramUsername: '',
    date: '',
    time: '',
  });
  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    const text = `Замовлення:\n
Ім'я: ${formData.name}\n
Телефон: ${formData.phone}\n
Емеіл: ${formData.email}\n
Телеграм: ${formData.telegramUsername}\n
Дата: ${formData.date}\n
Час: ${formData.time}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      if (data.ok) {
        alert('Сообщение отправлено!');
      } else {
        alert('Произошла ошибка при отправке сообщения.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке сообщения.');
    }
  };

  return (
    <>
      <form className={style.forms} onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Ваше ім'я"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="tel"
            placeholder="Ваш телефон"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="емеіл"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Ваше ім'я в телеграм"
            name="telegramUsername"
            value={formData.telegramUsername}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="date"
            placeholder="на яку дату"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="time"
            placeholder="в якій годині"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input className={style.submitBtn} type="submit" value="Замовити" />
        </label>
      </form>
    </>
  );
};

export default OrderForm;

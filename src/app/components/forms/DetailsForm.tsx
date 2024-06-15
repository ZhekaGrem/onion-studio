'use client';
import React, { useState } from 'react';
import style from '@/app/assets/styles/form.module.css';

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    clientdata: '',

  });
  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Звязатись з клієнтом:\n
Ім'я: ${formData.name}\n
Як звязатись з клієнтом: ${formData.clientdata}\n
`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      if (data.ok) {
        alert('Повідомлення відправленно!');
      } else {
        alert('Сталась помилка відправки позвоніть по номеру');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Сталась помилка відправки позвоніть по номеру');
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
            type="text"
            placeholder="як з вами звязатись?"
            name="clientdata"
            value={formData.clientdata}
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

export default DetailsForm;

'use client';
import React, { useState } from 'react';
import style from '@/app/assets/styles/form.module.css';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    telegramUsername: '',
    date: '',
    time: '',
    howmanytime: ''
  });
  const [error, setError] = useState('');
  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.phone && !formData.email && !formData.telegramUsername) {
      setError('Будь ласка, заповніть хоча б одне поле: телефон, email або Telegram');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const text = `Замовлення:\n
Ім'я: ${formData.name}\n
Для звязку з клієнтом:\n
Телефон: ${formData.phone}\n
Емеіл: ${formData.email}\n
Телеграм: ${formData.telegramUsername}\n
На яку годину клієнт хоче забронювати студію:\n
Дата: ${formData.date} Година: ${formData.time} Як довго:${formData.howmanytime}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
        text
      )}`;

      try {
        const response = await axios.get(url, {
          params: {
            chat_id: chat_id,
            text: text,
          },
        });
        if (response.data.ok) {
          alert('Повідомлення відправленно!');
        } else {
          alert('Сталась помилка відправки позвоніть по номеру');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('сталась помилка відправки позвоніть по номеру');
      }
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
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="емеіл"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Ваше ім'я в телеграм"
            name="telegramUsername"
            value={formData.telegramUsername}
            onChange={handleChange}
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
            type="number"
            placeholder="на скільки часу"
            name="howmanytime"
            value={formData.howmanytime}
            onChange={handleChange}
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

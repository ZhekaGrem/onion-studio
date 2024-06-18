import React from 'react';
import style from '@/app/assets/styles/form.module.css';
import ReactDOM from 'react-dom';
import OrderForm from './OrderForm'
import DetailsForm from './DetailsForm'

interface PortalProps {
 onClose: () => void;
 openWindow:string;
}

const Contacts = ({ onClose, openWindow }: PortalProps) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    console.error('Portal root element not found');
    return null;
  }
  return ReactDOM.createPortal(
    <div className={style.portal}>
      <div className={style.portalContent}>
        <button className={style.closePortalBtn} onClick={onClose}>
          ×
        </button>
        {openWindow === 'DetailsForm' && <DetailsForm onClose={onClose} />}
        {openWindow === 'OrderForm' && <OrderForm onClose={onClose} />}
      </div>
    </div>,
    portalRoot
  );
};

export default Contacts;



import React from 'react';
import style from '@/app/assets/styles/form.module.css';
import ReactDOM from 'react-dom';
import OrderForm from './OrderForm'

interface PortalProps {
 onClose: () => void;
}

const Contacts = ({ onClose }: PortalProps) => {
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
        
        <OrderForm />
      </div>
    </div>,
    portalRoot
  );
};

export default Contacts;



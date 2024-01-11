import { useState } from 'react';
import IconPlus from '../../assets/images/icon-plus.svg';
import IconMinus from '../../assets/images/icon-minus.svg';
import './Accordion.css';

function Accordion({ title, content, isOpen = false, isLastElement = false }) {
  const [isActive, setIsActive] = useState(isOpen);
  return (
    <>
      <div
        className="card-content-faq__list-header"
        onClick={() => setIsActive(!isActive)}
      >
        <h5>{title}</h5>

        {isActive ? (
          <img src={IconPlus} alt="Plus" />
        ) : (
          <img src={IconMinus} alt="" />
        )}
      </div>
      {isActive && <p>{content}</p>}
      {!isLastElement && <hr />}
    </>
  );
}

export default Accordion;

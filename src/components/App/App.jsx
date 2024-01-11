import IconStar from '../../assets/images/icon-star.svg';
import Accordion from '../Accordion/Accordion';
import accordionData from './data.faq.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header />

      <main className="wrapper">
        <div className="card">
          <div className="card-header-faq">
            <img src={IconStar} alt="Star" />
            <h1>FAQs</h1>
          </div>
          <div className="card-content-faq">
            <ul>
              {accordionData.map((data) => (
                <li key={data.id}>
                  <Accordion
                    title={data.title}
                    content={data.content}
                    isOpen={data.isOpen}
                    isLastElement={accordionData.length === data.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Accordion />
    </div>
  );
}

function Accordion() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div className="outer">
      {faqs.map((faq, i) => (
        <AccordionItem faq={faq} num={i + 1} key={i} />
      ))}
    </div>
  );
}

function AccordionItem({ faq, num }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`accItem ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <div className="topLine"></div>
      <div className="content">
        <span className="number">{num < 9 && `0${num}`}</span>
        <div className="qna">
          <div className="title">{faq.title}</div>
          {active && <div className="subtitle">{faq.text}</div>}
        </div>
        <span>
          <span className="toggle">
            {active ? (
              <i className="fa-solid fa-minus"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}
          </span>
        </span>
      </div>
    </div>
  );
}
export default App;

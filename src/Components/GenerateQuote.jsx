import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GenerateQuote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data);
    });
  }
  return (
    <div className="quote-container">
      <p className="quote">{quote.content}</p>
      <p className="author">- {quote.author}</p>

      <button onClick={getQuote} className="gen-quote-btn">
        Generate new Quote
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";

function Course({ name, sentence, price, img, onDelete }) {
  const [purchased, setPurchased] = useState(false);
  const [discount, setDiscount] = useState(price);

  function buyCourse(amt) {
    setPurchased(true);
    setDiscount(prev => prev - amt);
  }

  useEffect(() => {
    console.log('inside course use effect')})

  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{sentence}</p>
      <h4>Price: ₹{discount}</h4>

      <button onClick={() => buyCourse(20)}>
        Buy Now
      </button>

      <button onClick={onDelete}>
        Delete
      </button>

      <p>
        {purchased ? "Already Purchased" : "Get it Now!"}
      </p>
    </div>
  );
}

export default Course;

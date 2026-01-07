function Course({ name, sentence, img }) {

    function BuyCourse(){
        console.log(purchased)
    }
  return (
    <div className="card">
      <img src={img} alt="course" />
      <h3>{name}</h3>
      <p>{sentence}</p>
      <button onclick="">Buy </button>
    </div>
  );
}

export default Course;

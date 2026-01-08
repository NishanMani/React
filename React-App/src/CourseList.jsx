import { useState, useEffect } from "react";
import Course from "./Course";
import HTML from "./assets/ss.png";

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, name: "HTML", sentence: "HTML course by code io", price: 100, img: HTML },
    { id: 2, name: "CSS", sentence: "CSS course by code io", price: 200, img: HTML },
    { id: 3, name: "JS", sentence: "JS course by code io", price: 300, img: HTML }
  ]);
  useEffect(() => {
    console.log('use Effect called');
});

  function handleDelete(id) {
    setCourses(prevCourses =>
      prevCourses.filter(course => course.id !== id)
    );
  }

  return (
    <>
      {courses.map(course => (
        <Course
          key={course.id}
          name={course.name}
          sentence={course.sentence}
          img={course.img}
          price={course.price}
          onDelete={() => handleDelete(course.id)}
        />
      ))}
    </>
  );
}

export default CourseList;



import Course from './Course';
import HTML from './assets/ss.png';

function CourseList() {
  const courses = [
    { name: "HTML", sentence: "HTML course by code io", img: HTML },
    { name: "CSS", sentence: "CSS course by code io", img: HTML },
    { name: "JS", sentence: "JS course by code io", img: HTML }
  ];

  

  return (
    <>
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          sentence={course.sentence}
          img={course.img}
        />
      ))}
    </>
  );
}

export default CourseList;

import Course from './Course'
import JAVA from './assets/java-logo.png'
import py from './assets/py.png'
import reactjs from './assets/Reactjs.png'
import boot from './assets/boot.png'
function CourseList(){
    const courses = [
        {
            key: 1,
            image:JAVA,
            name:"JAVA",
            content: "Full stack java development",
            price: "100$"
        },
        {
            key: 2,
            image:py,
            name:"PYTHON",
            content: "Full stack python development",
            price: "200$"
        },
        {
            key: 3,
            image:reactjs,
            name:"REACTJS",
            content: "Full stack Web development",
            price: "300$"
        },
        {
            key: 4,
            image:boot,
            name: "Bootstrap",
            content: "Complete Bootstrap",
            price: "50$"
        },
        {
            key : 5,
            image:py,
            name:"Hello",
            content:"HI",
            price:"200$"
        },
        
    ]
    const courseList = courses.map((course)=>
            <Course key = {course.key}name = {course.name} price={course.price} image = {course.image} content={course.content}      />
    )
return(
    <>
        {courseList}
    </>

);
}

export default CourseList
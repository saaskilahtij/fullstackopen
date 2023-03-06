import Course from './components/Course'
import courses from './components/courses'

const App = () => {
  
  return (
    <div>
      {courses.map((course) => 
        <Course key={course.id} course={course}/>)}
    </div>
  )
}

export default App;
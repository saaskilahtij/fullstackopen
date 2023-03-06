
// Laajenna sovellusta siten että kursseja voi olla
// mielivaltainen määrä

const Course = ({ course }) => {
  
  const Header = ({ header }) => {
    return <h1>{header}</h1>;
  }; 
  
  const Content = ({ course }) => {
    
    const Part = ({ name, exerciseQty}) => {
      return (
        <div>
          <p>
            {name} {exerciseQty}
          </p>
        </div>
      );
    };
    
    return (
    <div>
      {course.parts.map((part) => 
      <Part key={part.id} name={part.name} 
        exerciseQty={part.exercises}/>
        )}
    </div>
    );
  };

  const Total = ({ course }) => {
    
    const totalExercises = course.parts.reduce((sum, part) =>
      sum + part.exercises, 0 );
    
    return (
      <div>
        <p>
          total of {totalExercises} exercises
        </p>
      </div>
    );
  };    
  

  return (
    <div>
      <Header header={course.name}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}


const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} /> 
    </div>
  )
}

export default App;
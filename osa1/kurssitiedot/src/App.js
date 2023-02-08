const Header = ({props}) => {
  return (
    <h1>{props.kurssinNimi}</h1>
    );
  }; 
  
  
  const Content = ({props}) => {
    return (
    <div>
      <Osa props={props.osat[0]}/>
      <Osa props={props.osat[1]}/>
      <Osa props={props.osat[2]}/>
    </div>
  );
};


const Total = ({props}) => {
  return (
    <div>
      <p>
      Number of exercises { props.osat[0].tehtavienLkm + 
      props.osat[1].tehtavienLkm + props.osat[2].tehtavienLkm }
      </p>
    </div>
  );
};


const Osa = ({props}) => {
  return (
    <div>
      <p>
        {props.nimi} {props.tehtavienLkm}
      </p>
    </div>
  );
};


const App = () => {

  const sisalto = {
    kurssinNimi: 'Half Stack application development',

    osat: [
      {
        nimi: 'Fundamentals of React',
        tehtavienLkm: 10
      },
      {
        nimi: 'Using props to pass data',
        tehtavienLkm: 7
      },
      {
        nimi: 'State of a component',
        tehtavienLkm: 14
      }
    ]
  };
    
  return (
    <div>
      <Header props={sisalto}/>
      <Content props={sisalto}/>
      <Total props={sisalto}/>
    </div>
  );
};

export default App;
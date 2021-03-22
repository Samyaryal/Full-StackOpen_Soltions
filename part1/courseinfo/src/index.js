import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content =(props)=>{
  const lists = props.parts.map(function(item){
    return (
      <div>
      <p>{item.name} : {item.exercises}</p>
      </div>
    )
  })
  return lists

}
const Total = (props) =>{
  return (
    <div>
    <h1>Number of Exercises = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises  }</h1>
    </div>
  )
  
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts = {parts}/>
    </div>
  )
};
  

ReactDOM.render(<App />, document.getElementById('root'))





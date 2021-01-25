//1.1 Course Information, Step 1

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course ={course}/>
      <Content 
      part1={part1}
      exercises1={exercises1}
      part2={part2}
      exercises2={exercises2}
      part3={part3}
      exercises3={exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) =>{
  return (
    <div>
    <h1>The name of the course {props.course}.</h1>
    </div>
  )
}
const Content = (props) => {
	return (
		<div>
			<p>
				{props.part1}: {props.exercises1}
			</p>
			<p>
				{props.part2}: {props.exercises2}
			</p>
			<p>
				{props.part3}: {props.exercises3}
			</p>
		</div>
	)
};

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));



//1.2 Course Information, Step 2
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	  const course = 'Half Stack application development'

	  return (
		<div>
			<Header course = {course} />
			<Content />
			<Total />
		</div>
	  )
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Total = () => {
	var num = 0
	
	for (var i = 0; i < PartLists.length; i++) {
		num = num + PartLists[i].exercises
	}
	
	return (
		<div>
			<p>Number of exercises: {num}</p>
		</div>
	)
};

const Content = () => {
	const lists = PartLists.map(
		function(list) {
			return (
				<div>
					<Part part={list.part} exercises={list.exercises} />
				</div>
			)
		})
	
	return lists
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part}: {props.exercises}
			</p>
		</div>
	)
};
const PartLists = [
	{
		id: 1,
		part: 'Fundamentals of React',
		exercises: 10
	},
	{
		id: 2,
		part: 'Using props to pass data',
		exercises: 7
	},
	{
		id: 3,
		part: 'State of a component',
		exercises: 14
	}
];

ReactDOM.render(<App />, document.getElementById('root'));


//1.3: course information step3
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course ={course}/>
      <Content 
      part1={part1.name}
      exercises1={part1.exercises}
      part2={part2.name}
      exercises2={part2.exercises}
      part3={part3.name}
      exercises3={part3.exercises} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}
const Header = (props) =>{
  return (
    <div>
    <h1>The name of the course {props.course}.</h1>
    </div>
  )
}

const Part1 = props => (
  <p>
    {props.part1} contains {props.exercises1} exercises.
  </p>
);

const Part2 = props => (
  <p>
    {props.part2} contains {props.exercises2} exercises.
  </p>
);

const Part3 = props => (
  <p>
    {props.part3} contains {props.exercises3} exercises.
  </p>
);

const Content = (props) =>{
  return (
    <div>
      <Part1  part1={props.part1} exercises1={props.exercises1}/>
      <Part2  part2={props.part2} exercises2={props.exercises2}/>
      <Part3  part3={props.part3} exercises3={props.exercises3}/>  
    </div>
  )
}
const Total = (props) =>{
  return (
    <div>
    <p>Total number of exercises is {part1.exercises + part2.exercises + part3.exercises}.</p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

//1.4: course information step4

import React from 'react'
import ReactDOM from 'react-dom'

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
    var score = 0
    const lists = props.parts.map(function(item){
      score = score + item.exercises
      return (
        <div>
        <p>Number of exercises: {score} </p>
        </div>
      )
    })
   return lists
  }


ReactDOM.render(<App />, document.getElementById('root'))

//Part 1.5
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	}

	return (
		<div>
			<h1>{course.name}</h1>
			<Content course={course} />
			<Total course={course} />
		</div>
	)
};

const Content = (props) => {
	const lists = props.course.parts.map(function(item) {
		return (
			<div>
				<p>{item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

const Total = (props) => {
	var score = 0
	
	const lists = props.course.parts.map(function(item) {
		
		score = score + item.exercises
		
		return score
	})
	
	return (
		<div>
			<p>Number of exercises: {score}</p>
		</div>
	)
};
ReactDOM.render(<App />, document.getElementById('root'));

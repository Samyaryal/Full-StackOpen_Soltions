
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => <h1>Give Feedback</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {all===0 ? (
        <div>No feedback has given</div>
      ) : (
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />

      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      all={good + neutral + bad }
      average = {(good -bad)/(good+bad+neutral)}
      positive = {((good+neutral) * 100) /(good+bad+neutral) + "%"} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));




// //Exercises 1.6.-1.14.

// //1.6: unicafe step1
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h1>Give feedback</h1>
//     <button onClick ={() => setGood + 1}>good</button>
//     <button onClick ={() => setNeutral +1 }>neutral</button>
//     <button onClick ={() => setBad + 1 }>bad</button>

//     <h2>Statistics</h2>
//     <p>good: {good}</p>
//     <p>neutral: {neutral}</p>
//     <p>bad: {bad}</p> 
//     </div>
//   )
// }

// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// //1.7: unicafe step2
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h1>Give feedback</h1>
//     <button onClick ={() => setGood + 1}>good</button>
//     <button onClick ={() => setNeutral +1 }>neutral</button>
//     <button onClick ={() => setBad + 1 }>bad</button>

//     <h2>Statistics</h2>
//     <p>good: {good}</p>
//     <p>neutral: {neutral}</p>
//     <p>bad: {bad}</p>
//     <p>all: {good + neutral + bad} </p>
//     <p>average: {(good -bad)/(good+bad+neutral)}</p>
//     <p>positive: {(good+neutral)/(good+bad+neutral)}</p>
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// //1.8: unicafe step3
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Statistics =(props)=>{
//   return (
//     <div>
//     <p>good: {props.good}</p>
//     <p>neutral: {props.neutral}</p>
//     <p>bad: {props.bad}</p>
//     <p>all: {props.all} </p>
//     <p>average: {props.average}</p>
//     <p>positive:{props.positive}</p>
//     </div>

//   )

// }
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h1>Give feedback</h1>
//     <button onClick ={() => setGood + 1}>good</button>
//     <button onClick ={() => setNeutral +1 }>neutral</button>
//     <button onClick ={() => setBad + 1 }>bad</button>

//     <h2>Statistics</h2>
//     <Statistics
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     average = {(good -bad)/(good+bad+neutral)}
//     positive = {(good+neutral)/(good+bad+neutral)}
//     />
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// //1.9: unicafe step4

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';

// const Statistics =(props)=>{
//   if (props.All ===0 ){
//     return (
//       <div><h1>No feedbacks has been gathered</h1></div>
//     )
//   }
//   return (
//     <div>
//     <p>good: {props.good}</p>
//     <p>neutral: {props.neutral}</p>
//     <p>bad: {props.bad}</p>
//     <p>all: {props.all} </p>
//     <p>average: {props.average}</p>
//     <p>positive:{props.positive}</p>
//     </div>

//   )

// }
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h1>Give feedback</h1>
//     <button onClick ={() => setGood + 1}>good</button>
//     <button onClick ={() => setNeutral +1 }>neutral</button>
//     <button onClick ={() => setBad + 1 }>bad</button>

//     <h2>Statistics</h2>
//     <Statistics
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     All={good + neutral + bad }
//     average = {(good -bad)/(good+bad+neutral)}
//     positive = {(good+neutral)/(good+bad+neutral)}
//     />
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// //1.10: unicafe step5
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';

// const Statistics =(props)=>{
//   if (props.All ===0 ){
//     return (
//       <div><h1>No feedbacks has been gathered</h1></div>
//     )
//   }
//   return (
//     <div>
//     <p>good: {props.good}</p>
//     <p>neutral: {props.neutral}</p>
//     <p>bad: {props.bad}</p>
//     <p>all: {props.all} </p>
//     <p>average: {props.average}</p>
//     <p>positive:{props.positive}</p>
//     </div>

//   )

// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h1>Give feedback</h1>
//     <button onClick ={() => setGood + 1}>good</button>
//     <button onClick ={() => setNeutral +1 }>neutral</button>
//     <button onClick ={() => setBad + 1 }>bad</button>

//     <h2>Statistics</h2>
//     <Statistics
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     All={good + neutral + bad }
//     average = {(good -bad)/(good+bad+neutral)}
//     positive = {(good+neutral)/(good+bad+neutral)}
//     />
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )


//1.10: unicafe step5





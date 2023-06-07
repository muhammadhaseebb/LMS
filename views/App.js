import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import SubmitAssignment from './SubmitAssignment';
import ViewAssignment from './ViewAssignment';
import ViewGrades from './ViewGrades';
import ViewMarks from './ViewMarks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Assignment" component={ViewAssignment} />
        <Route exact path="/SubmitAssignment" component={SubmitAssignment} />
        <Route exact path="/Grade" component={ViewGrades} />
        <Route exact path="/Marks" component={ViewMarks} />
      </Switch>
    </Router>
  );
}

export default App;

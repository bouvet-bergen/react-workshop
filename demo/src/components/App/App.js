import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getTasks } from './../../actions/';
import { getAllTasks } from './../../api/Tasks';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.doFetchTasks = this.doFetchTasks.bind(this);
  }

  doFetchTasks() {

    let data = {
      tasks: [],
      fetching: true,
      error: null
    };

    this.props.fetchTasks(data);

    getAllTasks().then((tasks) => {
      data = {
        tasks: tasks,
        fetching: false,
        error: null
      };

      this.props.fetchTasks(data);
    });
  }

  render() {

    return (
      <div className="App">
        <h1>React workshop demo</h1>
        <Button variant="contained" color="primary" onClick={this.doFetchTasks}>Get all tasks</Button>

        <div className='task-container'>
          {this.props.data?.tasks &&
            <List component="nav" aria-label="tasks" className='task-list'>
              {this.props.data.tasks.map((item, key) =>
                <ListItem>
                  <ListItemText key={item.id}>{item.id} - {item.name} - {item.description}</ListItemText>
                </ListItem>
              )}
            </List>
          }
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.taskReducer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (data) => dispatch(getTasks(data))
  };
}

App.propTypes = {
  // Properties
  data: PropTypes.object.isRequired,

  // Functions
  fetchTasks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

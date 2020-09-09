import React, { Component } from 'react'
import './App.css'
import Addwork from './components/Addwork'
import Control from './components/Control'
import TaskList from './components/TaskList'

import { v4 as uuidv4} from 'uuid';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDisplay : false,
      tasks: [],
      taskEditing: null,
      keywords: '',
      filter: {
          name: '',
          status : -1
      },
      sort: 0
      

    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })

    }
  }


  onHide = (params) => {
    this.setState({
      isDisplay: params
    })
  }

  

  onData = (data) => {
    let {tasks} = this.state;
    data.id = uuidv4();
    tasks.push(data);
    this.setState({
      tasks : tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }


  onUpdateStatus = (id) => {
      let {tasks} = this.state;
      let index = this.findIndex(id);
      if(index !== -1) {
        tasks[index].status = !tasks[index].status;
        this.setState({
          tasks: tasks
        })
      } 
      localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  onDelete = (id) => {
    let {tasks} = this.state;
      let index = this.findIndex(id);
      if(index !== -1) {
        tasks.splice(index,1)
        this.setState({
          tasks: tasks
        })
      } 
      localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  onUpdate = (id,name) => {
      let {tasks} = this.state
      let index = this.findIndex(id);//this.state.tasks[index]
      if(index !== -1) {
        tasks[index].name = name;
        this.setState({
          tasks: tasks
        })
      }
      localStorage.setItem('tasks',JSON.stringify(tasks))
      this.setState((prevState,props) => ({
          taskEditing : prevState.tasks[index]
      }));
  }




  onShow = (keywords) => {
    this.setState({
      isDisplay: true,
    })
  }

  

  onSearch = (keywords) => {
    this.setState({
      keywords: keywords
    })
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onSort = (sort) => {
    this.setState ({
      sort: sort
    })
  }


  findIndex = (id) => {
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach((task,index) => {
        if(task.id === id) {
          result = index;
        }
        
    });
    return result;
  }

  render() {

    let {tasks, isDisplay,taskEditing, keywords,filter,sort} = this.state;
      // if(filter){
      //   tasks = tasks.filter((task) => {
      //     return task.status.indexOf(filter) !== -1;
      // })
      // }
      if(filter) {
        if(filter.name){
          tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(filter.name) !== -1
          })
        }
        tasks = tasks.filter((task) => {
          if(filter.status === -1) {
            return task;
          }else {
            return task.status === (filter.status === 1 ? true : false);
          }
        })
      }


      if(keywords){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(keywords) !== -1;
      })
      }


      if(sort){
        tasks = tasks.sort((a,b) => {
          if(a.name > b.name) return -sort;
          else if(a.name < b.name) return sort;
          else return -0;
        })
      }



    let elmTaskForm = isDisplay ? <Addwork taskEditing={ taskEditing }   onData = {this.onData} tasks = { tasks } /> : "";
    return (  
      <div className="container">
          <h1 className="d-flex justify-content-center">TODOLIST APP</h1>
          <div className="container-fluid row mt-5">
            <div className="col-4">
                {elmTaskForm}
                
            </div>
            <div className={isDisplay ? "col-8" : "col-12"}>
                <Control onSort = {this.onSort} onSearch={this.onSearch} onHide={this.onHide} onShow={this.onShow}/>
                <TaskList onFilter = {this.onFilter} tasks = { tasks } onUpdate = {this.onUpdate} onDelete = {this.onDelete} onUpdateStatus = {this.onUpdateStatus} />
            </div>
          </div>
      </div>
    )
  }
}

export default App

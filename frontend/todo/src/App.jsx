import React, { Component } from "react";

const tasks = [
  {
    id: 1,
    title: "Do home work",
    description: "You must do it",
    is_completed: true,
  },
  {
    id: 2,
    title: "Repair the nuclear",
    description: "to iran",
    is_completed: false,
  },
  {
    id: 3,
    title: "Make at missile",
    description: "You must do it",
    is_completed: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: true,
      taskList: tasks,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setstatus({ viewCompleted: true });
    } else {
      return this.setstatus({ viewCompleted: false });
    }
  };

  renderTabList = () => {
    return (
      <div className="flex justify-center">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          In completed
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      (item) => item.is_completed === viewCompleted
    );
    return newItems.map((item) => (
      <li key={item.id}>
        <span>{item.title}</span>
      </li>
    ));
  };

  render() {
    return (
      <main className="m-10">
        <h1 className="uppercase text-4xl text-center">Task manager</h1>
        <div className="p-2 bg-slate-800 text-white font-bold w-[110px] text-center rounded cursor-pointer">
          Add task
        </div>
        <div className="flex items-start mt-6">{this.renderTabList()}</div>
        <ul className="">{this.renderItems}</ul>
      </main>
    );
  }
}

export default App;

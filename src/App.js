import "./style.css";
import React from "react";
import SubmitUnicorn from "./components/submitUnicorn";
import ListUnicorn from "./components/listUnicorn";

class App extends React.Component {
  state = {
    _id: 0,
    name: "",
    age: 0,
    colour: "",
    dataList: [],
    dataObj: {},
    isChange: false,
  };

  getAll = () => {
    let dataList;

    fetch("https://crudcrud.com/api/3eac39473ace4df29888a3d044debfac/unicorns")
      .then((resp) => resp.json())
      .then((data) => {
        dataList = [...data];
        this.setState({ dataList });
        console.log(dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postData = (...properties) => {
    const [name, age, colour] = properties;
    // this.setState({name, age, colour});

    fetch(
      "https://crudcrud.com/api/3eac39473ace4df29888a3d044debfac/unicorns",
      {
        method: "POST",
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ name, age, colour }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.getAll();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  putData = (...properties) => {
    const [id, name, age, colour] = properties;

    fetch(
      `https://crudcrud.com/api/3eac39473ace4df29888a3d044debfac/unicorns/${id}`,
      {
        method: "PUT",
        headers: {
          //   "access-control-allow-origin": "no-cors",
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ name, age, colour }),
      }
    )
      .then((data) => {
        console.log(data);
        this.getAll();
        this.setState({ _id: 0 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteData = (id) => {
    fetch(
      `https://crudcrud.com/api/3eac39473ace4df29888a3d044debfac/unicorns/${id}`,
      {
        method: "DELETE",
        header: { "content-type": "application/json" },
      }
    )
      .then((data) => {
        console.log(data);
        this.setState({ _id: 0 });
        this.getAll();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getKey = (id) => {
    let dataObj;

    this.state.dataList.forEach((obj) => {
      if (obj._id === id) dataObj = obj;
    });

    console.log(dataObj);
    const { _id, name, age, colour } = dataObj;
    this.setState({ _id, name, age, colour, isChange: true });
  };

  resetProps = (...properties) => {
    const [_id, name, age, colour] = properties;
    this.setState({ _id, name, age, colour });
  };

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div className="parentContainer">
        <div className="parentContainer__left">
          <SubmitUnicorn
            postData={this.postData}
            putData={this.putData}
            deleteData={this.deleteData}
            resetProps={this.resetProps}
            _id={this.state._id}
            name={this.state.name}
            age={this.state.age}
            colour={this.state.colour}
            isChange={this.state.isChange}
          />
        </div>
        <div className="parentContainer__right">
          <ListUnicorn getKey={this.getKey} dataList={this.state.dataList} />
        </div>
      </div>
    );
  }
}

export default App;

import "../style.css";
import React from "react";

class SubmitUnicorn extends React.Component {
  state = { name: "", age: 0, colour: "" };

  addData = () => {
    this.props.postData(this.props.name, this.props.age, this.props.colour);
  };

  updateData = () => {
    if (this.props._id === 0) alert("Please select data before update.");
    else
      this.props.putData(
        this.props._id,
        this.props.name,
        this.props.age,
        this.props.colour
      );
  };

  removeData = () => {
    if (this.props._id === 0) alert("Please select data before update.");
    else this.props.deleteData(this.props._id);
  };

  onTextChange = (e) => {
    // console.log(e.target.dataset);
    if (e.target.dataset.name === "name")
      this.props.resetProps(
        this.props._id,
        e.target.value,
        this.props.age,
        this.props.colour
      );
    else if (e.target.dataset.name === "age")
      this.props.resetProps(
        this.props._id,
        this.props.name,
        e.target.value,
        this.props.colour
      );
    else if (e.target.dataset.name === "colour")
      this.props.resetProps(
        this.props._id,
        this.props.name,
        this.props.age,
        e.target.value
      );
  };

  render() {
    return (
      <form className="submitForm">
        <div className="submitForm__fields">
          <label className="submitForm__fieldsLabel">Name</label>
          <input
            type="text"
            data-name="name"
            value={this.props.name}
            onChange={this.onTextChange}
            placeholder="Enter the name"
            required
          />
        </div>
        <div className="submitForm__fields">
          <label className="submitForm__fieldsLabel">Age</label>
          <input
            type="text"
            data-name="age"
            value={this.props.age}
            onChange={this.onTextChange}
            placeholder="Enter the age"
            required
          />
        </div>
        <div className="submitForm__fields">
          <label className="submitForm__fieldsLabel">Colour</label>
          <input
            type="text"
            data-name="colour"
            value={this.props.colour}
            onChange={this.onTextChange}
            placeholder="Enter the colour"
            required
          />
        </div>
        <div className="submitForm__buttons">
          <input type="button" value="Submit" onClick={this.addData} />
          <input type="button" value="Update" onClick={this.updateData} />
          <input type="button" value="Delete" onClick={this.removeData} />
        </div>
      </form>
    );
  }
}

export default SubmitUnicorn;

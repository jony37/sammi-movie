import "../movies-add-form/movies-add-form.css";
import { Component } from "react";

class MoveAddForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: "",
      views: "",
    };
  }

  changeHendlarInput = (e) => {
    console.log(e.target.value);
    
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.views]: e.target.value
    })
  };

  render = () => {
    const {name, views} = this.state

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qoshish</h3>
        <form action="" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino? "
            onChange={this.changeHendlarInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba korilgan?"
            onChange={this.changeHendlarInput}
            name="views"
            value={views}
          />
          <button type="button" className="btn btn-outline-dark">
            Qoshish
          </button>
        </form>
      </div>
    );
  };
}
export default MoveAddForm;

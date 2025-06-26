import { Component } from "react";
import "../move-list-item/move-list-item.css";

class MoveListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      like: true
    };
  }

  checkFavorite = () => {
    this.setState(({ favorite }) => ({
      favorite: !favorite,
    }));
    console.log("Hello");
    
  };

  onLike = () => {
    this.setState(({ like}) => ({
      like: !like
    }))
  }

  render = () => {
    const { name, viewers } = this.props;
    const { favorite, like } = this.state;

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${favorite ? "favorite" : "red"} ${like && 'like'}`}
      >
        <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="list-group-item btn-cookie btn-sm"
            onClick={this.checkFavorite}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="list-group-item btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  };
}

// const MoveListItem = ({ name, viewers, favorite }) => {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between fovorite ${
//         favorite && "favorite"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-between align-items-center">
//         <button type="button" className="list-group-item btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="list-group-item btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MoveListItem;

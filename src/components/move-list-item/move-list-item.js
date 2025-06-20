import "../move-list-item/move-list-item.css";

const MoveListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">peaky blinders</span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue="989"
      />
      <div className="d-flex justify-content-between align-items-center">
        <button type="button" className="list-group-item btn-cookie btn-sm">
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

export default MoveListItem;

import "../move-list/move-list.css";
import MoveListItem from "../move-list-item/move-list-item";

const MoveList = ({data}) => {
  return (
    <ul className="move-list">
      {
        data.map(item => (          
          <MoveListItem name = {item.name} viewers = {item.viewers} favorite = {item.favorite}/>
          
        ))
      }
    </ul>
  );
};

export default MoveList;

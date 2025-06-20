import "../app/App.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MoveList from "../move-list/move-list";
import MoveAddForm from "../movies-add-form/movies-add-form";

function App() {
  const data = [
    { name: "peaky blinders", viewers: 911, favorite: true},
    { name: "game of thrones", viewers: 890989098, favorite: false},
    { name: "breaking bad", viewers: 912323232321, favorite: false},
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <div className="">
          <MoveList data={data}/>
          <MoveAddForm />
        </div>
      </div>
    </div>
  );
}

export default App;

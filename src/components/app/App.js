import '../app/App.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MoveList from '../move-list/move-list';
import MoveAddForm from '../movies-add-form/movies-add-form';

function App() {
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
        <div className=''>
          <MoveList/>
          <MoveAddForm/> 
        </div>


      </div>
    </div>
  );
}

export default App;


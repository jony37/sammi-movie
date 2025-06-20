import "../app-filter/app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group mt-3">
      <button className="btn btn-dark" type="button">
        Barcha kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Mashjurr kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Eng kop korilgan kinolar
      </button>
    </div>
  );
};

export default AppFilter;

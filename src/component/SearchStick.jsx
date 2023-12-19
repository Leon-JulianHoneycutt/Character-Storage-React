import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import './SearchStick.css';
function SearchStick(search) {
  return (
    <>
      <div className="col-md-4" id="names">
        <label htmlFor="txtNameKeywords" className="form-label">
          Search by Name
          <input
            type="text"
            id="txtNameKeywords"
            name="FirstNameSearch"
            className="form-control"
            placeholder="Default"
            onChange={(e) => search.setKeywords(e.currentTarget.value)}
            value={search.keywords}
          />
        </label>
      </div>
      <div className="col-md-4 mt-4">
        <select value={search.Age} onChange={(e) => search.setAge(e.currentTarget.value)} className="form-select">
          <option value="">Select Age</option>
          {_(search.allSticks)
            .map((stick) => stick.Age)
            .sort()
            .uniq()
            .map((Age) => (
              <option key={Age} value={Age}>
                {Age}
              </option>
            ))
            .value()}
        </select>
      </div>
      <div className="col-md-4 mt-3 ps-5">
        <button className="btn btn-danger btn-lg" type="button" onClick={search.stickFigureSearch}>
          Search Students <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export default SearchStick;

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddStick.css';
function AddStick(props) {
  const [firstName, setFirstName] = useState('');
  const [hp, setHp] = useState('');
  const [atk, setAtk] = useState('');
  const [sp, setSp] = useState('');
  const [age, setAge] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const imageUpdate = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const AddAStick = () => {
    const newStick = {
      id: nanoid(),
      FirstName: firstName,
      HP: hp,
      ATK: atk,
      Special: sp,
      image: URL.createObjectURL(selectedFile),
      Age: age,
    };
    props.addStickFigure(newStick);
    };
  return (
    <>
      <div className="row mt-5" id="addStick">
        <h3 className="text-success text-center pb-2 bouncy">Add a Character</h3>
        <div className="col-md-2">
          <label htmlFor="txtName" className="form-label">
            Name
            <input
              type="text"
              id="txtName"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setFirstName(e.currentTarget.value)}
              value={firstName}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="txtHp" className="form-label">
            HP:
            <input
              type="text"
              id="txtHp"
              placeholder="0"
              className="form-control"
              onChange={(e) => setHp(e.currentTarget.value)}
              value={hp}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="txtAtk" className="form-label">
            ATK:
            <input
              type="text"
              id="txtAtk"
              placeholder="0"
              className="form-control"
              onChange={(e) => setAtk(e.currentTarget.value)}
              value={atk}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="txtSpecial" className="form-label">
            Special:
            <input
              type="text"
              id="txtSpecial"
              placeholder="Hollow Purple"
              className="form-control"
              onChange={(e) => setSp(e.currentTarget.value)}
              value={sp}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="txtAge" className="form-label">
            Age:
            <input
              type="text"
              id="txtAge"
              placeholder="0"
              className="form-control"
              onChange={(e) => setAge(e.currentTarget.value)}
              value={age}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="fileUpload" className="form-label">
            Image:
            <input
              type="file"
              id="fileUpload"
              name='file'
              placeholder="0"
              className="form-control"
              onChange={(imageUpdate)}
            />
          </label>
        </div>
        <div className="mt-2" id='addBtn'>
          <button type="button" id="btnAdd" className="btn btn-success btn-lg" onClick={AddAStick}>
            Add Student <FontAwesomeIcon  icon={faPlusCircle} />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddStick;

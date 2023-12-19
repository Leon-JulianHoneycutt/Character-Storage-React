import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import './StickCards.css';

function StickCards(info) {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [hp, setHp] = useState('');
  const [atk, setAtk] = useState('');
  const [sp, setSp] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    setFirstName(info.stick.FirstName);
    setHp(info.stick.HP);
    setAtk(info.stick.ATK);
    setSp(info.stick.Special);
    setAge(info.stick.Age);
  }, [info.stick.FirstName, info.stick.HP, info.stick.ATK, info.stick.Special, info.stick.Age]);

  const saveStickFigureInfo = () => {
    const updatedStickFigure = {FirstName: firstName, HP: hp, ATK: atk, Special: sp, Age: age, id: info.stick.id, image: info.stick.image};
    info.updatingStickFigureInfo(updatedStickFigure);
    setEditMode(false);
  };

  return (
    <>
    <div className='card'>
      <img src={info.stick.image} alt='Character Image' className='card-img-top mx-auto' id='CardImg'/>
      {!editMode && (
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center"><h5>Name:</h5>{info.stick.FirstName}</li>
            <li className="list-group-item text-center"><h5>HP:</h5> {info.stick.HP}</li>
            <li className="list-group-item text-center"><h5>ATK:</h5> {info.stick.ATK}</li>
            <li className="list-group-item text-center"><h5>Special:</h5>{info.stick.Special}</li>
            <li className="list-group-item text-center"><h5>Age:</h5>{info.stick.Age}</li>
            <button type="button" className="btn btn-danger p-2" onClick={() => info.removeStickFigure(info.stick)}>
              Delete Student <FontAwesomeIcon className='bouncy' icon={faMinusCircle} />
            </button>
            <button type="button" className="btn btn-warning p-2 mt-1 btn2" onClick={() => setEditMode(true)}>
              Edit <FontAwesomeIcon className='bouncy' icon={faMagicWandSparkles} />
            </button>
          </ul>
        )}
      {editMode && (
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center"><label>Name:<input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}/></label></li>
                    <li className="list-group-item text-center"><label>HP:<input type="text" className="form-control" value={hp} onChange={(e) => setHp(e.currentTarget.value)}/></label></li>
                    <li className="list-group-item text-center"><label>ATK:<input type="email" className="form-control" value={atk} onChange={(e) => setAtk(e.currentTarget.value)}/></label></li>
                    <li className="list-group-item text-center"><label>Special<input type="text" className="form-control" value={sp} onChange={(e) => setSp(e.currentTarget.value)}/></label></li>
                    <li className="list-group-item text-center"><label>Age<input type="text" className="form-control" value={age} onChange={(e) => setAge(e.currentTarget.value)}/></label></li>
                    <li className="list-group-item text-center"><button type="button" id="btnSave" className="btn btn-secondary" onClick={saveStickFigureInfo}>Save</button></li>
                  </ul>
        )}
    </div>
    </>
  )
}

export default StickCards
import { nanoid } from 'nanoid';
import { useState, useEffect} from 'react';
import AddStick from './component/AddStick';
import SearchStick from './component/SearchStick';
import StickCards from './component/StickCards';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [allSticks, setAllSticks] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [keywords, setKeywords] = useState('');
  const [age, setAge] = useState('');

  //Load page & Saves to Local Storage
  useEffect(() => {
    if (localStorage) {
      const stickFigureLocalStorage = JSON.parse(localStorage.getItem('sticks'));
      if (stickFigureLocalStorage) {
        saveSticks(stickFigureLocalStorage);
      } else {
        saveSticks(stickFigure);
      }
    }
  }, []);
  
  //Update & Save data
  const saveSticks = (sticks) => {
    setAllSticks(sticks);
    setSearchResults(sticks);
    if (localStorage) {
      localStorage.setItem('sticks', JSON.stringify(sticks));
    }
  };

  //Add new data
  const addStickFigure = (newStickFigure) => {
    const updatedStickFigures = [...allSticks, newStickFigure];
    saveSticks(updatedStickFigures);
  };

  //Edit some data
  const updatingStickFigureInfo = (stickFigureInfo) => {
    const updatedStickFigureArray = allSticks.map((stick) =>
      stick.id === stickFigureInfo.id ? { ...stick, ...stickFigureInfo } : stick
    );
    saveSticks(updatedStickFigureArray);
  };

  //Delete a piece of data
  const removeStickFigure = (stickFigureDelete) => {
    const newStickFigures = allSticks.filter((stick) => stick.id !== stickFigureDelete.id);
    saveSticks(newStickFigures);
  };

  //Search through data
  const stickFigureSearch = () => {
    let keywordsArray = [];
    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }
    if (age) {
      keywordsArray.push(age.toString());
    }
    if (keywordsArray.length > 0) {
      const searched = allSticks.filter((stick) => {
        for (const word of keywordsArray) {
          if (
            stick.FirstName.toLowerCase().includes(word) ||
            stick.Special.toLowerCase().includes(word) ||
            stick.Age == parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searched);
    } else {
      setSearchResults(allSticks);
    }
  };

  //Stored data
  const stickFigure = [
    {
      id: nanoid(),
      FirstName: 'Beast Boy',
      HP: 80,
      ATK: 50,
      Special: 'Animal Shape Shifting',
      image: 'images/BeastBoy.jpg',
      Age: 14,
    },
    {
      id: nanoid(),
      FirstName: 'Raven',
      HP: 70,
      ATK: 90,
      Special: 'Azarath Metrion Zinthos',
      image: 'images/Raven.jpg',
      Age: 16,
    },
    {
      id: nanoid(),
      FirstName: 'Doodle Bob',
      HP: 1,
      ATK: "∞",
      Special: 'Eraser',
      image: 'images/Doodle-Bob.jpg',
      Age: "?",
    },
    {
      id: nanoid(),
      FirstName: 'Hikari',
      HP: 100,
      ATK: 150,
      Special: 'Idle Death Gamble',
      image: 'images/hikari.jpg',
      Age: 18,
    },
    {
      id: nanoid(),
      FirstName: 'Obito',
      HP: 100,
      ATK: 120,
      Special: 'Kamui',
      image: 'images/Meowito.jpg',
      Age: 31,
    },
    {
      id: nanoid(),
      FirstName: 'Henry Stickman',
      HP: 90,
      ATK: 99,
      Special: '2D',
      image: 'images/Henry.jpg',
      Age: "?",
    },
    {
      id: nanoid(),
      FirstName: 'Nobara',
      HP: 90,
      ATK: 110,
      Special: 'Straw Doll technique',
      image: 'images/nobara.jpg',
      Age: 16,
    },
    {
      id: nanoid(),
      FirstName: 'Sukuna',
      HP: 500,
      ATK: 1000,
      Special: 'malevolent shrine',
      image: 'images/Sukuna.jpg',
      Age: "1000+",
    },
    {
      id: nanoid(),
      FirstName: 'Gojo',
      HP: 600,
      ATK: 1200,
      Special: 'Infinity',
      image: 'images/Gojo.jpg',
      Age: 28,
    },
    {
      id: nanoid(),
      FirstName: 'Dabi',
      HP: 100,
      ATK: 100,
      Special: 'blue flame quirk',
      image: 'images/dabi.jpg',
      Age: 24,
    },
  ];


  return (
    <>
    <body>
      <div id='Shell' className='container'>
        <div className='row' id='cardOuter'>
          <h3 className='text-center bouncy'>Current Characters <FontAwesomeIcon className='bouncy' icon={faPalette} /></h3>
          {searchResults &&
            searchResults.map((stick) => (
              <div className='col-md-2 pt-3' id='Cards' key={stick.id}>
                <StickCards
                  stick={stick}
                  removeStickFigure={removeStickFigure}
                  updatingStickFigureInfo={updatingStickFigureInfo}
                />
              </div>
            ))}
        </div>
        <AddStick addStickFigure={addStickFigure} />
        <div className='row mt-4' id='searchOuter'>
          <h3 className='text-center bouncy'>Search Characters</h3>
          <SearchStick
            stickFigureSearch={stickFigureSearch}
            setAge={setAge}
            setKeywords={setKeywords}
            keywords={keywords}
            Age={age}
            allSticks={allSticks}
          />
        </div>
      </div>
      </body>
    </>
  );
}

export default App;

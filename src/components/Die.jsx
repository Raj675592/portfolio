import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix);

const faceMap = {
  one: faDiceOne,
  two: faDiceTwo,
  three: faDiceThree,
  four: faDiceFour,
  five: faDiceFive,
  six: faDiceSix,
};

const Die = ({ face, rolling }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faceMap[face]}
        className={`Die ${rolling ? 'Die-shaking' : ''}`}
        size="4x"
      />
    </div>
  );
};
export default Die;
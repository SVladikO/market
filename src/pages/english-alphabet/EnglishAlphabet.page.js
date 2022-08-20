import {useState} from 'react';

import {Header, AppTag, Input, ButtonList, Letter} from './EnglishAlphabet.style';

import alphabet from "./alphabet.json";
import useLocalStorage from '../../hooks/useLocalStorage.js'

import Popup from '../../components/popup';
import {LightButton} from "../../components/button/button.style";
import Introduction from "./component/introduction/introduction.component";

function EnglishAlphabet() {
    let [englishText, setEnglishText] = useState("");
    let [ isOpenIntroductionPopup, setIsOpenIntroductionPopup] = useLocalStorage(' isOpenIntroductionPopup', true);

    const closePopup = () => setIsOpenIntroductionPopup(!isOpenIntroductionPopup);
    const deleteEnglishText = () => setEnglishText("");
    const deleteLastLetterFromEnglishText = () => setEnglishText(englishText.slice(0, -1));

    const addLetter = letter => () => setEnglishText(prevValue => prevValue + letter);

    let alphabetButtons = alphabet.map(
        ([letter, engTranscription]) =>
            <LightButton key={engTranscription} onClick={addLetter(letter)}>
                <Letter>{letter}</Letter>[{engTranscription}]
            </LightButton>
    );

    return (
        <AppTag>
            <div>Practice English alphabet</div>
            <Header>
                <Input type="text" value={englishText} readOnly/>
                <LightButton minWidth={'50px'} onClick={deleteLastLetterFromEnglishText} >C</LightButton>
                <LightButton minWidth={'50px'} onClick={deleteEnglishText}>X</LightButton>
            </Header>
            <ButtonList>
                {alphabetButtons}
            </ButtonList>

            {
                 isOpenIntroductionPopup
                    ? <Popup closePopup={closePopup}>
                        <Introduction handleClick={closePopup}/>
                    </Popup>
                    : null
            }
        </AppTag>
    );
};

export default EnglishAlphabet;

//                 isOpenIntroductionPopup

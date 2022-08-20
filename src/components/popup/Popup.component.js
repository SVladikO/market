import {Wrapper, Content} from './Popup.style.js'

function Popup({closePopup, children}) {
    return (
        <Wrapper onClick={closePopup}>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Popup;
// <div className="f_popup_close_button" onClick={switchPopup}><span>&#10005;</span></div>
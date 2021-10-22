import './sBox.css'
const SBox = ({sBDC}) => {
    return (
        <input type="search" placeholder="Search Box" onChange={sBDC}/>
    );
}

export default SBox;
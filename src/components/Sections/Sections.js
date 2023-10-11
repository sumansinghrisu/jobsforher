import './Sections.css';
import editIcon from '../../Assets/edit.svg';

function Sections(props) {
  return (
    <div className="section-container">
      <div className="section-header"><h2>{props.name}</h2></div>
      <img src={editIcon} alt="Description of Icon" /></div>
  );
}

export default Sections;


import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <ul className='nav' style={navListStyle}>
        <Link to='/add' style={linkStyle}>
          <li style={navItemStyle}>add</li>
        </Link>
        <Link to='/todos' style={linkStyle}>
          <li style={navItemStyle}>todos</li>
        </Link>
        <Link to='/liked' style={linkStyle}>
          <li style={navItemStyle}>liked</li>
        </Link>
        <Link to='' style={linkStyle}>
          <li style={navItemStyle}>basket</li>
        </Link>
      </ul>
    </div>
  );
}

// Define styles as objects
const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0',
  margin: '0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const navItemStyle = {
  padding: '8px',
  cursor: 'pointer',
};


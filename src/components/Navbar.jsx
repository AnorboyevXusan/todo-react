import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <ul className='nav' style={navListStyle}>
        <ButtonLink to='/add' label='add' />
        <ButtonLink to='/todos' label='todos' />
        <ButtonLink to='/liked' label='liked' />
        <ButtonLink to='' label='basket' />
      </ul>
    </div>
  );
}

function ButtonLink({ to, label }) {
  return (
    <Link to={to} style={linkStyle}>
      <li style={navItemStyle}>{label}</li>
    </Link>
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
  border: '1px solid white', // Borderni qo'shish
};

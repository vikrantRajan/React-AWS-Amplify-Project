import React from 'react';
import './header.styles.scss';
const Header = ({title}) => {
return (
    <h1 className="title-header">{title}</h1>
)

}

export default Header
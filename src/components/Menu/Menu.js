import React from 'react';
import ItemMenu from '../ItemMenu';

const Menu = props => (
    <ul className="menu">
        {
            this.props.options.map((item) => {
                <ItemMenu option={item} />
            })
        }
    </ul>
);

export default Menu;
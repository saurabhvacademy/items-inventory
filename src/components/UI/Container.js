
import React from 'react';

const Container = (props) => {
    const classes = 'container ' + props.class_name;
    const id = 'container_'+props.id;
    return <div id={id} className={classes}>{props.children}</div>
}

export default Container;
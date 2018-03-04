import React from 'react';

class ResizedImage extends React.Component{

    constructor(props){
        this.state = {dimensions: {}};
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageLoad({target: img}){
        this.setState({dimensions: {height: img.offsetHeight, width: img.offsetWidth}});
    }

    render(){
        return(
            <div>

            </div>
        ) 
    }

}
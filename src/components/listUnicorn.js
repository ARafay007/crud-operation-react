import '../style.css'
import React from 'react';

class ListUnicorn extends React.Component{
    state = {dataList: []};

    getData = () => {
        return this.props.dataList.map(el => {
            return <div className="listUnicorn__container" key={el._id} onClick={() => this.props.getKey(el._id)}>
                        <div className="listUnicorn__subContainer">
                            <div className="listUnicorn__heading">Name</div>
                            <div className="listUnicorn__data">{el.name}</div>
                        </div>
                        <div className="listUnicorn__subContainer">
                            <div className="listUnicorn__heading">Age</div>
                            <div className="listUnicorn__data">{el.age}</div>
                        </div>
                        <div className="listUnicorn__subContainer">
                            <div className="listUnicorn__heading">Colour</div>
                            <div className="listUnicorn__data">{el.colour}</div>
                        </div>
                    </div>
            });
    };

    // componentDidMount(){
    //     this.setState({dataList: this.getData()});
    // }

    render(){
        return(
            <div className="listUnicorn">
                {this.getData()}
            </div>
        );
    }
}

export default ListUnicorn;
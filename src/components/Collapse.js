import React from "react";

class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: true
        }
    }

    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }

   /*  componentDidMount(){
        console.log("componet stood up");
    }
    componentDidUpdate(){
        console.log("componet updated");
    } */

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                   {React.Children.map(this.props.children, (children) => children.props.cardTitle)}
                </button>
                {
                    this.state.showContent ? (<div className="collapse show">
                        {this.props.children}
                    </div>) : null
                }


            </div>
        )
    }
};

export default Collapse; // Bileşeni dışa aktar
import React  from "react";




const ValidationComponent = (props) => {
   // let numeIntrodus = this.props.location.state.numeIntrodus;
    return (
      <React.Fragment>
    {(() => {
        if (props.nameLength >= 5 ) {
           return (<p>Text long enough!</p>);
        }

        else {
            return (<p>Text too short!</p>);
        }       
      })()}
            
      </React.Fragment>
    );
  }

export default ValidationComponent;

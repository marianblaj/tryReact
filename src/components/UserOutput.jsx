import React  from "react";



const UserOutput = (props) => {
   // let numeIntrodus = this.props.location.state.numeIntrodus;
    return (
      <React.Fragment>
       {/* // <p>{numeIntrodus}</p> */}
        <p>Nume introdus:</p>
        <p>{props.userName}</p>
       
      </React.Fragment>
    );
  }

export default UserOutput;

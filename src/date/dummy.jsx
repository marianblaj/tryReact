const categorii = [
  {
    "name": "televizoare",
    "element": [{ name: "sony" }, { name: "samsung" }, { name: "philips" }],
  },
  {
    "name": "telefoane",
    "element": [{ name: "apple" }, { name: "xiamomi" }],
  },
  {
    "name": "roti",
    "element": [{ name: "rotiMari" }, { name: "rotiMici" }],
  },
];


export default categorii;
    // return (
    //   <div>
    //   {this.state.categorii.map(function(d, idx){
    //      return (<h1 key={idx}>{d.name}</h1>
    //   )})}
    //   </div>
    // );

    //  return (
      //   <div>
      //   {this.state.categorii.map(function(d, idx){
      //      return (<h1 key={idx}>{d.name}</h1>,
      //              d.element.map(function(a, bidx){
      //                 return (<li key={bidx}>{a.name}</li>)
      //              }))
      //    })}
      //   </div>
    // );


    //   const dMap = this.state.altEx.map(function(value, id){
    //    return(<h1 key={id}>  {value.elemente.map(n => <li> {n.nume} </li>) } </h1>)
    // });
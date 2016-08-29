import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {name: "Will"};
  // }

  // render(){
  //   setTimeout(()=>{
  //     this.setState({name: "Bob"});
  //   }, 1000)
  //   return(
  //     <div>
  //       {this.state.name}
  //       <Header/>
  //       <Footer/>
  //     </div>
  //   );
  // }

      constructor(){
        super();
          this.state = {
            title: "Welcome",
          }
      }

     render(){
        setTimeout(() =>{
          this.setState({title:"Welcome Will!"})
        }, 2000);
        // const title = "Welcome Will!";
      return(
        <div>
          <Header title = {this.state.title}/>
          <Header title = {"Other Title"}/>
          <Footer/>
        </div>
      );
    }
}
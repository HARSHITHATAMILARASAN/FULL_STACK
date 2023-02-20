import React from "react";

class Sample extends React.Component{
    render(){
        return(
            <div>
                <h1>ANSWERS USING CLASS</h1>
                <Classcube/>
            </div>
        )
    }
}
class Classcube extends React.Component{
    render(){
    var s="10";
    
    var  volumecube=s*s*s;
    return(
        <div>
            <p>VOLUME OF CUBE: {volumecube}</p>
            <Classcuboid/>
        </div>
    )
}
}

class Classcuboid extends React.Component{
    render(){
    var length="10"
    var breadth="10";
    var height="5";
    var  volumecuboid=length*breadth*height;
    return(
        <div>
            <p>VOLUME OF CYLINDER: {volumecuboid}</p>
            <Classcylinder/>
        </div>
    )
}
}
class Classcylinder extends React.Component{
    render(){
    var radius="10";
    var height="5";
    var  areacylinder=3.14*radius*radius*height;
    return(
        <div>
            <p>AREA OF CYLINDER: {areacylinder}</p>
            <Classsquare/>
        </div>
    )
}
}
class Classsquare extends React.Component{
    render(){
    var side="10";
    var  areasquare=side*side;
    return(
        <div>
            <p>AREA OF SQUARE: {areasquare}</p>
            <ClassTriangle/>
        </div>
    )
}
}
class ClassTriangle extends React.Component{
    render(){
    var base="10";
    var height="5";
    var  areatriangle=0.5*base*height;
    return(
        <div>
            <p>AREA OF TRIANGLE: {areatriangle}</p>

        </div>
    )
}
}
export default Sample
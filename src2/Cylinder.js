
function Cylinder(props)
{
    var radius=props.radius;
    var height=props.height;
    var areacylinder=(3.14*radius*height);


return(
    <div>
        <p>AREA OF CYLINDER:
    {areacylinder}
    </p>
    </div>
);
}

export default Cylinder;

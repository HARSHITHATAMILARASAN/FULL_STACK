
function Cuboid(props)
{
    var l=props.l;
    var b=props.b;
    var h=props.h;
    var volumecuboid=(l*b*h);


return(
    <div><p>VOLUME OF CUBOID:
   { volumecuboid}</p>
    </div>
);
}

export default Cuboid;


function Cube(props)
{
    var s=props.s;
    var volumecube=(s*s*s);


return(
    <div>
    <p>VOLUME OF CUBE:
    {volumecube}</p>
    </div>
);
}

export default Cube;

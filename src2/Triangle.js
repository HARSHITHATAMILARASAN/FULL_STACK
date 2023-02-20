function Triangle(props)
{
    var base=props.base;
    var height=props.height;
    var areatriangle=(height*base);


return (
    <div>
<p>AREA OF TRIANGLE:
    {areatriangle}</p>
    </div>
);
}

export default Triangle;
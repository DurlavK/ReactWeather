var React = require('react');


/*var WeatherMsg = React.createClass({
    render: function(){
        var {temp,location}=this.props;
        return(
            <div>
                <h1> Its {temp} degree in {location}</h1>
            </div>
        );
    }
});*/

var WeatherMsg = ({temp,location})=>{
    
    return(
        <div>
            <h1> Its {temp} degree in {location}</h1>
        </div>
    );
};



module.exports = WeatherMsg; 
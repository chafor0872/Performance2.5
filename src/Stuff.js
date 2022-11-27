import React, {Component} from "react";

class Stuff extends Component {
    render() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>This is a 5 line list of stuff, 
                    using ol and il:</p>
                <ol>
                    <li>1.Line1</li>
                    <li>2.Line2</li>
                    <li>3.Line3</li>
                    <li>4.Line4</li>
                    <li>5.Line5</li>
                </ol>
            </div>
        );
    }
}
export default Stuff;
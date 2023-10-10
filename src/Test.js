import React, {Component} from 'react'

class Test extends Component{

    render(){
        let getData = function(){
           
            //fetch('http://localhost:8080/get')
            fetch('https://backend-pigeon.azurewebsites.net/get')
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data)
                    })
                    .catch(error => console.error(error));    
           }
           
        return(
            <div>
                <p>testing new azure react app</p>
                <p>october 2023</p>
            </div>
        )
    }
}
export default Test;
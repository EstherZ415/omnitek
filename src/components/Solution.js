import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function Solution(){

    const [solutionitem, setSolutionitem] = useState([]);

    useEffect(() => {

        fetch("test1.json")
        .then(response => response.json())
        .then(data => setSolutionitem(data));
        
    },[]);

    return ( 
        <div>
            <div class="xl-space"></div>
            <div className='solution-text'>
                <h2>Solutions built for you</h2>
                <div class="m-space"></div>
                <h3>Tailored cable solutions for precision, performance, and innovation across industries.</h3>
                <div class="l-space"></div>
                <div className='solution-content'>
                    {
                        solutionitem.map(item => (
                            <div key={item.id} className="solution-item">
                                <img src={`images/${item.image}`} alt={item.title}/>
                                <div class="l-space"></div>
                                <div>
                                    <s1 className="body">{item.title}</s1>
                                    <div class="m-space"></div>
                                    <p className="body">{item.content}</p>
                                    <div class="m-space"></div>
                                </div>   
                            </div>
                        ))
                    }   
                </div>                      
            </div>  
            <div class="xl-space"></div>
        </div>
    );
}



import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams,NavLink,Link} from "react-router-dom";
// import web from '../img1.jpeg'
function Listing (){

    const [item, setitem] = useState([]);
    // const [pagecount,setpagecount] =useState([])
    // const limit;
        useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                 `https://www.haveinlist.com/api/listing.php?page=1&limit=12`
            );
            const data = await res.json();
            setitem(data);
        }   

         getComments();

    }, []);

    const Wrapper =styled.div `
    h6{
        font-size:12px;
        margin:2%;
        ${'' /* text-align:center; */}
    }
    h2{
        ${'' /* text-align:center; */}
        font-size:25px;
        margin-left:2%;
        margin-top:5%;
    }
    h5{
        margin-top:6%;
        font-size:18px;
        margin-left:2%
    }
  `

    
    return (

      <>
        <h1>Listing</h1>
        <div className="container" style={{marginTop:'2rem'}}>
            <div className="row">
            {item.map((item1) => {
                var newurl = (item1.url).replace("https://www.haveinlist.com/", "/");
               return <div key={item1.id} className="col-md-4 cardcss">
                <Wrapper>
                <Link to={newurl}><img src={item1.image} className="img-fluid" alt="kuh" style={{marginTop:'4%'}} /></Link>
                    <h6>{item1.address}</h6>
                    <h2>{item1.name}</h2>
                    <h5>{item1.category}</h5>
                </Wrapper>
                </div>
                
                }
            )}
            </div>
        </div>
      </>

    )
}
export {Listing}
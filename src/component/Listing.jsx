import React, { useEffect, useState } from "react";
// import { useEffect, useState } from 'react';
import { useParams,NavLink,Link} from "react-router-dom";
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

    
    return (

        <div className='container'>
            <div className="row">
                {item.map((item1) => {
                    var newurl = (item1.url).replace("https://www.haveinlist.com/", "/");
                    return <div key={item1.id} className="col-md-4 v my-2 mx-0">
                        <div className="card shadow ">
                            <div className="card-body shadow">
                                {/* <h5 className='card-title text-center h2'>Id : {item1.id}</h5> */}
                             <Link to={newurl}><img src={item1.image} className="img-fluid" alt="kuh" /></Link>
                                <h6 className='mt-1'>{item1.address}</h6>
                                <h3 className="text-center">{item1.name}</h3>
                                <h5>{item1.category}</h5>
                                {/* <p className='card-text'>{item1.body}</p> */}
                            </div>
                        </div>
                    </div>

                }
                )}
            </div>

        </div>

    )
}
export {Listing}
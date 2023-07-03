import React, { useEffect, useState } from "react";
// import { useEffect, useState } from 'react';
import { useParams,Link} from "react-router-dom";
function ListingDetailPage (){

    const { pid }: {pid: string} = useParams();
    
   
    const pid_array = pid.split('-');

    const [item, setitem] = useState([]);
   
   
    let postId = pid_array[(pid_array.length - 1)];

        useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                 `https://www.haveinlist.com/api/detail.php?id=${postId}`
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
                    return <div key={item1.id} className="col-md-12">
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
export {ListingDetailPage}
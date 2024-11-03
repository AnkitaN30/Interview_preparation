import { useEffect, useState } from "react";


const SortingComponent = () => {
  const [userData,setUserData]=useState([]);
  const [configData,setConfigData] = useState({key:'',direction :'asc'});

  const getUserData = async()=>{
   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await resp.json();
   setUserData(data);
  }

  useEffect(()=>{
    getUserData();
  },[])
   
  const handleSort=(key)=>{
   
    let direction = 'asc';

    if(configData?.key===key && configData?.direction === 'asc'){
        direction = 'desc';
    }

    const newData = [...userData].sort((a,b)=>
       { 
         if(a[key] < b[key] ) {
          return direction === 'asc' ? -1: 1;
        }
         if(a[key] > b[key]) {
          return direction === 'asc' ? 1: -1;
        }

         return 0;
        });
        setUserData(newData);
        
        setConfigData({key,direction});
  }
  
  
  return (
    <>
       <h2>UserData</h2>
       <table>
          <tr>
            <th onClick={()=>handleSort('id')} tyle={{ cursor: 'pointer' }}>Id</th>
            <th onClick={()=>handleSort('name')} tyle={{ cursor: 'pointer' }}>Name</th>
            <th onClick={()=>handleSort('username')} tyle={{ cursor: 'pointer' }}>UserName</th>
            <th onClick={()=>handleSort('email')} tyle={{ cursor: 'pointer' }}>Email</th>
          </tr>
            {
              userData && userData?.map(item=>(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td> 
                </tr>
              ))
            }
       </table>
    </>
  );
};

export default SortingComponent;

import React, {useEffect,useState} from 'react';
import Axios from "axios";


const Test = (props) => {

    const [state, setData] = useState({
        users: []
    });

    const fetchData = async (pageNumber  = 2) => {
        const api = await fetch(`employee/list?page=${pageNumber}`);
        setData({
            users: await api.json()
        });


    };

    useEffect(() => {
        fetchData();
    }, [])



    return (
      <div>
          <table className="table table-bordered table-striped">
              <thead>
              <tr>
                  <th>SR</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {state?.users?.list?.length == 0 ?
                  <tr>
                      <td colSpan="5" className="text-center"> No Record Found</td>
                  </tr>
                  : state?.users?.list?.map((user,i)  =>
                      <tr key={i}>
                          <td>{user?.id}</td>
                          <td>{user?.name}</td>
                          <td>{user?.email}</td>
                          <td>{user?.phone}</td>
                      </tr>
                  )}
              </tbody>
          </table>
      </div>
    );
}

export default Test;

                                // {
                                //     state?.users?.data ?
                                //         state?.users?.data?.map((user) => (
                                //             <tr key={user?.id}>
                                //                 <td>{user?.id}</td>
                                //                 <td>{user?.name}</td>
                                //                 <td>{user?.email}</td>
                                //             </tr>
                                //         )) : "Loading..."
                                // }

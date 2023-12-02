import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../components/tab.css';
import Vieww from "./Vieww";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Watermark from "./Watermark";
const Tab = (props) => {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    // const handleView = (item) => {
    //     // Implement your logic for handling the "View" action here
    //     console.log('View button clicked for:', item);
    // };

    const data = [
        { id: 1, name: 'John Doe', phoneNumber: '123-456-7890', place: 'City A' },
        { id: 2, name: 'Jane Doe', phoneNumber: '987-654-3210', place: 'City B' },
        // Add more data as needed
    ];

    // State to manage the data
    const [tableData, setTableData] = useState(data);
    const [topics, setTopics] = useState([]);
    const getTopics = async () => {
        try {
            const response = await fetch('http://localhost:8090/' + props.top, {
                method: 'GET'
            });

            const result = await response.json();
            setTopics(result);
            console.log(props.top);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTopics();
    }, []);
    const [vi, setvi] = useState(false);
    const handleView = (e) => {
        localStorage.setItem('view', JSON.stringify(e));
        localStorage.setItem('back', props.top);
        navigate('/View');
    }
    const handleEdit=(e)=>{
        localStorage.setItem('edit',JSON.stringify(e));
        localStorage.setItem('back', props.top);
        navigate('/Edit');
    }
    const [bacs, setbacs] = useState(false);
    const backk = (e) => {
        setbacs(true);
    }
    if (bacs) {
        navigate('/Home')
    }



    return (
        <>
        <Watermark />
            <h1 className="he">{props.top} </h1>
            <div className="tabl">
                <table>
                    <thead>
                        <tr className="trr">
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Place</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="dataa">
                        {topics.map((item) => (
                            <tr key={item._id} className="inside">
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button onClick={() => handleView(item)}>View</button>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={backk} >Back</button>

            </div>
            
        </>
    )
}
export default Tab;
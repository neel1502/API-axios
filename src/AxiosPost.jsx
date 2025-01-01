import { useState } from "react";
import axios from 'axios'; 

const AxiosPost = () => {
    const data={fname:" ",lname:" "};
    const[inputData,setInputData]=useState(data);
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response) => {
            console.log(response);
        })
    }
    function handleUpdate(e){
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response) => {
            console.log(response);
        })
    }
    function handleDelete(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            console.log(response);
        })
    }
  return (
    <div>
      <div className="input-group mt-2 mb-3  ms-4 w-50">
        <span className="input-group-text">First name</span>
        <input type="text" aria-label="First name" name="fname" value={inputData.fname} className="form-control" onChange={handleData} />
      </div>
      <div className="input-group ms-4 mb-3 w-50">
        <span className="input-group-text">Last name</span>
        <input type="text" aria-label="Last name" name="lname" value={inputData.lname} className="form-control" onChange={handleData} />
      </div>
      <input onClick={handleSubmit} className="btn btn-primary ms-4" type="submit" value="Submit"></input>
      <input onClick={handleUpdate} className="btn btn-primary ms-4" type="submit" value="Update"></input>
      <input onClick={handleDelete} className="btn btn-primary ms-4" type="submit" value="Delete"></input>


    </div>
  );
};
export default AxiosPost;

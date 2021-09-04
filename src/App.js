import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

    const [toDoList, setTodo] = useState([]);
    const [task, setTask] = useState("");

    useEffect(async () => {
        fetchTask()

    }, [])

    let fetchTask = async () => {
        try {
            //    let product=await axios.get("http://localhost:3000/list_all_todo")
            //    console.log(product)
            let toDolistDate = await axios.get("https://b5gnode.herokuapp.com/list_all_todo");
            // console.log(toDolistDate)
            setTodo([...toDolistDate.data]);
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleCreateTask = async () => {

        try {
            let postData = await axios.post("https://b5gnode.herokuapp.com/create_task", { message: task })
            fetchTask();
            // alert(postData.data.message)
            setTask("")
        }
        catch (error) {
            alert(error)

        }

    }

    const handleChange = async (e, id) => {
        try {
            let updateData = await axios.put(`https://b5gnode.herokuapp.com/update_task/${id}`, { status: e.target.checked })
            fetchTask();
        }
        catch (error) {
            alert(error)
        }
        //console.log(e);
    }

    const handleDelete=async(id)=>{
        try{
        await axios.delete(`https://b5gnode.herokuapp.com/${id}`)
        fetchTask();
        }
        catch(error){
            alert(error)
        }
    }

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-10">
                    <h1>TO DO LIST</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task......" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button onClick={handleCreateTask} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>

                </div>
                <div className="col-lg-10">
                    <ul class="list-group">
                        {
                            toDoList.map((item) => {
                                return <li class="list-group-item justify-content-between align-items-center">
                                    <input class="form-check-input me-1" checked={item.status} type="checkbox" value="" aria-label="..." onChange={(e) => handleChange(e, item._id)} />
                                    <span style={{ textDecoration: item.status ? "line-through" : "" }}>{item.message}</span>
                                    <span class="badge bg-primary ml-4" onClick={()=>handleDelete(item._id)}>Delete</span>
                                </li>
                                
                               
                            })
                        }
                    </ul>




                </div>

            </div>



        </div>
    );

}

export default App;
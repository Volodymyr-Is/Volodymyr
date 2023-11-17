import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'https://gorest.co.in/public/v2/users'

const Users = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    const [newUser, setNewUser] = useState({});

    const handleNewUser = (e) => {
        const data = userData;

        if(e.target.id == 'name'){
            data['name'] = e.target.value;
        }
        else if(e.target.id == 'email'){
            data['email'] = e.target.value;
        }
        else if(e.target.id == 'male'){
            data['gender'] = "male";
        }
        else if(e.target.id == 'female'){
            data['gender'] = 'female';
        }
        else if(e.target.id == 'active'){
            data['status'] = "active";
        }
        else if(e.target.id == 'inactive'){
            data['status'] = "inactive";
        }
        setNewUser(data)
        //  console.log(e.target.id);
    }
    console.log(newUser);

    const handleCreateNewUser = (e) => {
        const tmpToken = localStorage.getItem('token')
        e.preventDefault();

        console.log(newUser);
        fetch(API_URL,{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${tmpToken}`
            },
            body: JSON.stringify(newUser)
        }).then(r => r.json()).then(data => setUserData(data));
    }

    useEffect(() => {
        const tmpToken = localStorage.getItem('token')
        if(!tmpToken){
            navigate('/')
        }
        else {
            fetch(API_URL,{
                    headers: {
                        Authorization: `Bearer ${tmpToken}`
                    }
                }).then(r => r.json()).then(data => setUserData(data))
        }
    }, [])
    return(
        <div>
            <div style={{fontWeight: "bold", margin: "10px, 0px, 20px, 0px"}}>User List</div>
            {userData.map(user => <div key={user.id}>{user.name}</div>)}

            <div style={{fontWeight: "bold", marginTop: "20px"}}>Create New User</div>
            <form>
                <div>
                    <label>Name</label>
                    <div>
                        <input type='text' onChange={handleNewUser}/>
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input type='text' onChange={handleNewUser}/>
                    </div>
                </div>
                <div>
                    <label>Gender</label>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type='radio' id="male" name="male" value="male" onChange={handleNewUser}/>
                        <label htmlFor="female">Female</label>
                        <input type='radio' id="female" name="female" value="female" onChange={handleNewUser}/>
                    </div>
                </div>
                <div>
                    <label>Status</label>
                    <div>
                        <label htmlFor="active">Active</label>
                        <input type='radio' id="active" name="active" value="active" onChange={handleNewUser}/>
                        <label htmlFor="inactive">Inactive</label>
                        <input type='radio' id="inactive" name="inactive" value="inactive" onChange={handleNewUser}/>
                    </div>
                </div>
                <input type="submit" onClick={handleCreateNewUser}/>
            </form>
        </div>
    );
};

export default Users;
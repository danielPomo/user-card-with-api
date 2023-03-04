import axios from "axios";
import { useState, useEffect } from "react";

const UserCard = () => {

    const [user, setUser] = useState({})

    useEffect ( () => {
        axios.get("https://randomuser.me/api/")
             .then( (resp) => {
                // console.log(resp.data.results[0])
                setUser(resp.data.results[0])
             } )
             .catch( (error) => {
                console.log(error)
             } )
    }, [] )

    return (
        <div className="card">
            <div className="imgBx">
                <img className="card__img" src="/users/user1.png" alt="foto de un usuario" />
            </div>
            <div className="card__content">
                <div className="card__details">
                    <h2 className="card__userName">{user.name?.title} {user.name?.first} {user.name?.last}</h2>
                    <h3>{user.dob?.age} años</h3>
                    <div className="card__data">
                        <p><i className='bx bx-home'></i> {user.location?.street.number} {user.location?.street.name}</p>
                        <p>{user.location?.country}</p>
                        <p><i className='bx bx-envelope' ></i> {user.email}</p>
                        <p><i className='bx bxs-phone-incoming' ></i>  {user.phone}</p>
                        <p><i className='bx bx-mobile-alt' ></i> {user.cell}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
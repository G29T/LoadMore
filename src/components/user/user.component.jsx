const User = ({...props}) => {

    const address = `${props.address.street}, ${props.address.suite}, ${props.address.city}`;

    return(
        <div className="user-container" key={props.id}>
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Address: {address}</p>
        </div>
    );
}

export default User;
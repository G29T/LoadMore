import User from '../user/user.component';
import './users.styles.css';

const Users = ({users}) => {
    return(
        <div className="users-container">
            {users.map((user) => (
                <User name={user.name} username={user.username} email={user.email} address={user.address} />
            ))}
        </div>
    )
}

export default Users;
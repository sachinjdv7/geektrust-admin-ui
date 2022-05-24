import { useRef } from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  return (
    <tr key={user.id}>
      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>
      <td>
        <input
          readOnly={!user.edit}
          type="text"
          ref={nameRef}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>
      <td>
        <input
          readOnly={!user.edit}
          type="email"
          ref={emailRef}
          name="email"
          defaultValue={user.email}
        />
      </td>
      <td>
        <input
          readOnly={!user.edit}
          type="text"
          ref={roleRef}
          name="role"
          defaultValue={user.role}
        />
      </td>
      <td>
        {user.edit ? (
          <button
            onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)}
            className="fas fa-save btn btn-info"
          ></button>
        ) : (
          <button
            onClick={() => editUser(user.id)}
            className="fas fa-edit btn btn-primary"
            style={{ margin: 5 }}
          ></button>
        )}

        <button
          onClick={() => deleteUser(user.id)}
          className="fas fa-trash-alt btn btn-danger"
          style={{ margin: 5 }}
        ></button>
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  saveUser: PropTypes.func,
  selectOne: PropTypes.func
};

export default User;

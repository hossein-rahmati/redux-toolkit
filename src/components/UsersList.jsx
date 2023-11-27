import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAsyncUsers());
    // dispatch(getAsyncUsers({ id: 1, name: "test" }));
  }, [dispatch]);

  return (
    <div>
      <h2>Users List</h2>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
}
export default UsersList;

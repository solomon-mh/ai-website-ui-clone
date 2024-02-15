import { jibyteUsers } from "../data/jibyteUsersData";
import JiByteUsersBox from "../utils/JiByteUsersBox";

const JibyteAiUsers = () => {
  const indUsers = jibyteUsers.map((user) => (
    <JiByteUsersBox key={user.id} name={user.name} color={user.color} />
  ));
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
      {indUsers}
    </div>
  );
};

export default JibyteAiUsers;

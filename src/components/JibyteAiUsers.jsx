import { jibyteUsers } from "../data/jibyteUsersData";
import JiByteUsersBox from "../utils/jiByteUsersBox";

const JibyteAiUsers = () => {
  const indUsers = jibyteUsers.map((user) => (
    <JiByteUsersBox key={user.id} name={user.name} color={user.color} />
  ));
  return <div className='grid grid-cols-3 gap-4'>{indUsers}</div>;
};

export default JibyteAiUsers;

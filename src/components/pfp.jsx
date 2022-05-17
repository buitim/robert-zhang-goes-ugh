// Imports //

import { Avatar } from "@nextui-org/react";

function ProfilePicture() {
  return (
      <>
        <Avatar 
            src='https://avatars.githubusercontent.com/u/39298411'
            css={{ size: '18rem'}}
            color="gradient"
            bordered
        />
      </>
  );
}

export default ProfilePicture;

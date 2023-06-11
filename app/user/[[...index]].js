import { UserProfile } from '@clerk/nextjs';

//const currentuser = await currentUser();

{
  /*const Greeting = () => {
  // Use the useUser hook to get the Clerk.user object
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <div>{user.firstName}</div>
      <div>
        {user.username ? (
          <div>'BeerName'{user.username} </div>
        ) : (
          'Please create a username'
        )}
      </div>
    </div>
  );
};
*/
}

const UserProfilePage = () => {
  return (
    <div className="90vw container col-auto mx-auto grid justify-center p-8 text-center uppercase">
      <UserProfile path="/user" routing="path" />
    </div>
  );
};
export default UserProfilePage;

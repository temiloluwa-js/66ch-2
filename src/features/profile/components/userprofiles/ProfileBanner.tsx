import { useEffect } from "react";
import { useViewProfile } from "../../api/useViewProfile";
import moment from "moment";

export default function ProfileBanner() {
  const { user } = useViewProfile()!;
  useEffect(() => {
    document.title = `${user?.name} - Profile`;
  }, [user]);

  return (
    <div
      className="mx-auto md:w-11/12 block
 font-supreme  p-2 mt-4"
    >
      {user && (
        <div className="flex items-center">
          <img
            className=" md:w-3/12 w-4/12 border border-white rounded-full
            max-h-profile object-cover md:mb-4 aspect-square"
            src={user.photoURL!}
            alt={user.name!}
          />
          <aside className="md:w-9/12 w-8/12 ml-16 mt-8">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl
         font-bold font-supreme md:mb-4 mb-1"
            >
              {user.name}
            </h1>
            <h2 className="text-md font-bold opacity-70 md:text-xl lg:text-2xl mb-2">
              Joined {moment(user.dateCreated).format("ddd  hA  y")}
            </h2>
          </aside>
        </div>
      )}
    </div>
  );
}

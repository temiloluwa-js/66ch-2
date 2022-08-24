import { MainLayout } from "src/components/Layout/Layout";
import ProfileBanner from "../components/userprofiles/ProfileBanner";
import UserPosts from "../components/userprofiles/UserPosts";

export default function UserProfile() {
  return (
    <MainLayout>
      <div className="flex flex-wrap">
        <div className="md:w-4/12 lg:w-3/12 md:sticky md:top-20 bg-secondary">
          <ProfileBanner />
        </div>
        <div className="md:w-8/12 lg:w-9/12 md:border-l-2 md:border-l-secondary">
          <UserPosts />
        </div>
      </div>
    </MainLayout>
  );
}

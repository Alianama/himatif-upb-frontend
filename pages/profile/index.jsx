import { useEffect, useState } from "react";
import Image from "next/image";
import fetchDataProfile from "../../config/profileApi/fetchData";
import logo from "@/public/image/logo.png";
import ActionSection from "./action";
import History from "./history";
import Head from "next/head";

const AboutSection = ({ profile }) => (
  <div className="about flex flex-col justify-center items-center border-b-2">
    <div className="flex w-full justify-center items-center">
      <h1 className="text-4xl text-0 font-manguiera">About HIMATIF</h1>
    </div>
    <div className="flex justify-center items-center flex-col mb-10 text-center">
      <Image src={logo} alt="logo" />
      {profile && profile.body ? (
        <div dangerouslySetInnerHTML={{ __html: profile.body }} />
      ) : (
        <p>Memuat...</p>
      )}
    </div>
  </div>
);

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchDataProfile();
      setProfile(data);
    };
    getProfile();
  }, []);

  return (
    <div className="py-10 px-10">
      <Head>
        <title>About Us - Himatif Website</title>
      </Head>
      <AboutSection profile={profile} />
      <div className="pt-10 flex flex-row max-md:flex-col gap-10 items-start ">
        <ActionSection />
        <History id="history" />
      </div>
    </div>
  );
};

export default ProfilePage;

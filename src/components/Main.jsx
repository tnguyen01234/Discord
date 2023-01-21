import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ServerIcon from "./ServerIcon";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Channel from "./Channel";
import { db } from "../firebase";
import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  QuerySnapshot,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";

function Main() {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [docs, setDocs] = useState([]);

  const handleAddChannel = async () => {
    const channelName = prompt("Enter a New Channel Name");

    if (channelName) {
      await addDoc(collection(db, "Channels"), {
        channelName: channelName,
        user: user.uid,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Channels"), (snapshot) => {
      setDocs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {!user && navigate("/")}
      <div className="flex min-h-screen max-h-screen ">
        <div className="flex flex-col space-y-3 bg-discord__container p-3">
          <div className="server__default hover:bg-discord_purple">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
              alt=""
              className="discord__img"
            />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://w0.peakpx.com/wallpaper/666/961/HD-wallpaper-anime-jujutsu-kaisen-satoru-gojo.jpg" />
          <ServerIcon image="https://wallpaperaccess.com/full/6905324.jpg" />
          <div className="server__default hover:bg-discord_green group">
            <AddIcon className="text-discord_green w-10 h-10 text-4xl group-hover:text-white" />
          </div>
        </div>
        <div className="bg-discord__sidebar flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-600 p-4 hover:bg-discord__serverNameBg cursor-pointer">
            Official Yakuza Server...{" "}
            <KeyboardArrowDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-discord__channel flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2 ">
              <KeyboardArrowDownIcon className="h-3 mr-2" />
              <h4 className="font-semibold">Channels</h4>
              <AddIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleAddChannel}
              />
            </div>
            <div className="flex flex-col space-y-2 px-2 mb-4">
              {docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data.channelName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

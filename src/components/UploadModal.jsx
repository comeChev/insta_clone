"use client";
import React, { useRef, useState } from "react";
import { modalState } from "@/lib/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { AiOutlineCamera } from "react-icons/ai";
import Image from "next/image";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [captionPost, setCaptionPost] = useState("");
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const { data: session } = useSession();

  function closeModal() {
    setCaptionPost("");
    setSelectedFile(null);
    setOpen(false);
  }

  async function uploadPost() {
    if (loading) return;
    //setLoading(true);
    //uploading data to firestore
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionPost,
      username: session.user.username,
      profilePic: session.user.image,
      timestamp: serverTimestamp(),
    });
    //creating a reference to the image in firebase storage
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    //uploading image to firebase storage
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        //getting the download url of the image
        const downloadURL = await getDownloadURL(imageRef);
        //updating the image url in firestore
        await updateDoc(doc(db, "posts", docRef.id), {
          imagePost: downloadURL,
        });
      }
    );
  }

  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  return (
    open && (
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className=" max-w-lg w-[90%] absolute left-[50%] translate-x-[-50%] top-56 bg-white border-2 border-gray-700 rounded-md shadow-md focus:ring-0"
      >
        <div className="flex flex-col items-center justify-center p-6">
          {selectedFile ? (
            <Image
              src={selectedFile}
              height={200}
              width={200}
              onClick={() => setSelectedFile(null)}
              alt="Temporary post image"
              className="w-full cursor-pointer object-cover"
            />
          ) : (
            <>
              <AiOutlineCamera
                className="text-red-500 text-6xl bg-red-200 rounded-full p-2 cursor-pointer border-2"
                onClick={() => filePickerRef.current.click()}
              />
              <input
                type="file"
                name="postPicture"
                id="postPicture"
                onChange={addImageToPost}
                ref={filePickerRef}
                className="hidden"
              />
            </>
          )}
          <input
            type="text"
            name="postCaption"
            id="postCaption"
            placeholder="Please enter your caption here ..."
            maxLength="150"
            onChange={(e) => setCaptionPost(e.target.value)}
            value={captionPost}
            ref={captionRef}
            className="m-4 border-none text-center w-full focus:ring-0 "
          />
          <button
            disabled={captionPost == "" || !selectedFile || loading}
            onClick={uploadPost}
            className="w-full bg-red-600 text-white p-2 shadow-md rounded-md hover:brightness-110 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:brightness-100"
          >
            Upload post
          </button>
          {/* <p>{JSON.stringify(session)}</p> */}
        </div>
      </Modal>
    )
  );
}

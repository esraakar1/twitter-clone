import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React from 'react'
import {  FaHeart, FaRegComment, FaRegHeart, FaRetweet, FaShareNodes } from 'react-icons/fa6'
import { auth, db } from '../../firebase';

const Buttons = ({tweet}) => {
    
      // aktif kullanıcının id si tweet i like layanların arasında mı?
        const isLiked = tweet.likes.includes(auth.currentUser.uid); 

    const toogleLike = async () => {
        // günellenecek dökümanın referansını al
       const docRef = doc(db, "tweets", tweet.id);
        // like ladıysam kullanıcı id sini likes dizisinden kaldır

        // like lamadıysam kullanıcı id sini likes dizisinden kaldır
        await updateDoc (docRef, {
             likes: isLiked ? arrayRemove(tweet.user.id) : arrayUnion(tweet.user.id),
        });
    };

  return (
    <div className='flex justify-between items-center text-zinc-500'>
        <button className='post-icon hover:text-blue-400 hover:bg-blue-300/20'>
            <FaRegComment />
        </button>

        <button className='post-icon hover:text-green-400 hover:bg-green-400/20'>
            <FaRetweet />
        </button>

        <button onClick={toogleLike} className='flex items-center hover:text-pink-500 relative'>
            <span className='post-icon hover:bg-pink-400/20'>
            {isLiked ? <FaHeart className='text-pink-500' /> : <FaRegHeart />}
            </span>
            <span className={`absolute -end-1 ${isLiked && "text-pink-500"}`}>{tweet.likes.length} </span>
        </button>

        <button className='post-icon hover:text-blue-400 hover:bg-blue-300/20'>
            <FaShareNodes />
        </button>
    </div>
  )
}

export default Buttons
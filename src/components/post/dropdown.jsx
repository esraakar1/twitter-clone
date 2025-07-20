import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { auth, db } from '../../firebase'
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import EditModal from '../modal/edit-modal';

const DropDown = ({tweet}) => {

    const [isOpen, setIsOpen] = useState(false);

    // TWEET i gönderen kişinin id si ve oturumu açık olan kişinin id si aynı mı?
    const isOwn = tweet.user.id === auth.currentUser.uid;

    // sil butonuna tıklanınca 
    const handleDelete = () => {
        if (!confirm("Kaldırmak istediğinizden emin misiniz?"))
            return;

        // silinecek dökümanın referansını al
        const docRef = doc(db, "tweets", tweet.id);

        // dokümanı sil
        deleteDoc(docRef)
        .then(() => toast.info("tweet akıştan kaldırıldı"));
    };

   return (
    isOwn && (
      <>
        <label class="popup">
          <input type="checkbox"/>
          <div class="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav class="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button
                  onClick={() => {
                    // modal'ı aç
                    setIsOpen(true);
                    // dropdown'ı kapat
                    checkboxRef.current.checked = false;
                  }}
                >
                  <MdEdit className="text-blue-500 text-base" />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <MdDelete className="text-red-500 text-base" />
                  <span>Kaldır</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal isOpen={isOpen} tweet={tweet} close={() => setIsOpen(false)} />
      </>
    )
  );
};
export default DropDown
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import PageLoader from '../loader/page-loader';

// outlet : kapsayıcı route içerisinde alt route un elementini ekrana basar.

const Protected = () => {


    //  oturumu açık olan kullanıcının state 'i
    const [user, setUser] = useState(undefined);

    // kullanıcının oturum verilerini al
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setUser(user));

      return () => unsub(); 
    }, []);
    //   oturum verileri gelene kadar ekrana yükleniyor bas
     if (user === undefined) {
        return <PageLoader />
     }
    // eğer kullanıcını oturumu kapalı veya epostası doğrulanmamışsa 
    if(user === null || user?.emailVerified === false) {
        if(user?.emailVerified === false) toast.info("Mailinizi Doğrulayın");
        // logine yönlendir
        return <Navigate to="/" replace />;
    }

    // oturumu açık ve epostası doğrulandıysa sayfayı ekrana bas   
    return <Outlet context={user} />;
};

export default Protected;
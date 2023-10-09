
createUser(email,password)
  .then(result=>{
    console.log(result);
    toast.success('Successfully Register ');
    // navigate(location?.state? location.state: '/');

    // update photoUrl
    handleUpdateProfile(name,profile)
    .then(res=>{
      console.log(res,'succesfull');
    
    })
    .catch(err=>{
      console.log(err.message);
      
    })
  })
  .catch(err=>{
    console.log(err.message);
    setError(err.message);

  })





const Profile = props =>{
   
    /** charger l'event */
  
   /** default props */
       Profile.defaultProps = {
        fullName: "Eya",
        bio:"engineer",
        profession:"engineer"
       };   

   
      const styleImage ={borderRadius:'50%',width:'20%',height:'20%',display:'block',marginLeft:'auto',marginRight:'auto'}
      const styleText ={textAlign:'center',color:'rgb(96 85 85)',fontWeight:400}
    return (

        <>
       
         <img src={props.src} alt="profile"  style={styleImage}/>{props.children}
         <h2 style={styleText}><span style={{fontWeight:600}}>FullName :</span> {props.fullName} </h2>
         <h2 style={styleText}><span style={{fontWeight:600}}>Profession :</span>{props.profession}</h2>
         <h2 style={styleText}><span style={{fontWeight:600}}>Bio :</span> {props.bio}</h2>
         
         
         
     
        </>

    );

   
};

export default Profile;
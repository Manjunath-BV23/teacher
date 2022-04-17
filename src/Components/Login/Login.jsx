import { XIcon } from '@heroicons/react/outline'
import axios from 'axios';
import { useEffect, useRef, useState } from "react";



export const Login = ()=>{
    const [check, setCheck] = useState(false);
    
    const change = () => {
        setCheck(true)
    }

    const [value, setValue] = useState(false)
    

    const [user, setUser] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:8080/admindata", {withCredentials:true}).then(res => setUser(res.data))
    },[])
    return (
        <>
           {/* Sign In page */}
           <div className = "signIn" style = {{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "30%",
            border : "2px solid gray",
            width : "50%",
            height : "650px",
            margin : "auto",
            marginTop : "30px",
            borderRadius : "5px",
            fontFamily : "IBMPlexSans,sans-serif"
          }}>
        
          <div style={{
            width : "84%",
            height : "650px",
            backgroundColor : "white",
            justifyContent: "center",
            textAline: "center"
          }}>
            <XIcon style={{
              width : "35px",
              height : "35px",
              marginLeft : "94%",
              marginTop : "20px",
              color : "grey"
            }}/>
            <div style={{
              fontFamily : "IBMPlexSans,sans-serif",
              fontWeight : "400",
              marginLeft: "15%",
              justifyContent: "center",
            }}>
              <h3 style={{fontFamily : "IBMPlexSans,sans-serif"}}>Login</h3>
              <p style={{
                fontSize : "13px",
                width : "65%",
                lineHeight: "20px",
                color :"gray"
              }}>By continuing, you agree to our <spam style ={{color : "#0079d3"}}>User Agreement</spam> and <spam style ={{color : "#0079d3"}}>Privacy Policy</spam>. </p>
              <div style={{
                display : "flex",
                border : "1px solid gray",
                width : "45%",
                height : "40px",
                borderRadius : "30px",
                marginTop : "40px",
  
              }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" style={{
                  width : "20px",
                  height : "20px",
                  marginLeft : "10px",
                  marginTop : "10px",
                }}/>
                <p style={{
                  marginTop : "8px",
                  marginLeft : "30px",
                  color : "gray",
                }}>Continue with Google</p>
              </div>
              <div style={{
                display : "flex",
                border : "1px solid gray",
                width : "45%",
                height : "40px",
                borderRadius : "30px",
                marginTop : "20px",
  
              }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20211218170823" style={{
                  width : "20px",
                  height : "20px",
                  marginLeft : "10px",
                  marginTop : "10px",
                }}/>
                <p style={{
                  marginTop : "8px",
                  marginLeft : "30px",
                  color : "gray",
                }}>Continue with Apple</p>
              </div>
          
                <hr style={{
                  width : "18%",
                  marginLeft : "0px",
                  marginTop : "35px"
                }}></hr>
                <h3 style={{
                  marginLeft :"20%",
                  marginTop :"-20px",
                  color : "gray ",
                }}>OR</h3>
                  <hr style={{
                  width : "18%",
                  marginLeft : "26%",
                  marginTop : "-30px"
                }}></hr>
                {/* same till now */}


  
                <input type= "text" placeholder='     User Name' style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }}></input> <br></br>
                
                <input type= "password" placeholder='     Password' style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }}></input> <br></br>
                <a val = {check} href='/'><button onClick={change} style={{
                    width : "45%",
                    height : "45px",
                    marginTop : "20px",
                    borderRadius : "50px",
                    border : "1px solid #0079d3",
                    backgroundColor : "#0079d3",
                    color :"whitesmoke",
                    fontWeight : "800"
                }} >Log In</button></a>
  
                <p style={{
                  fontSize :"12px",
                  color: "gray"
                }}>Forgot your <spam style = {{
                    color : "#0079d3",
                    fontSize :"13px"
                  }}>username</spam> or <spam style = {{
                  color : "#0079d3",
                  fontSize :"13px"
                }}>password</spam> ?</p>
              
                <p style={{
                  marginTop :"20px",
                  fontSize :"12px",
                  color: "gray"
                }}>New to Reddit?<spam style = {{
                  fontWeight : "600",
                  color : "#0079d3",
                  fontSize :"13px"
                }}><a href='/register'  style = {{color : "#0079d3", textDecoration : "none"}}>   SIGN UP</a></spam></p>
            </div>  
          </div>
        </div>
        </>
    )
}

// export default SignIn;
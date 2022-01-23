import React from 'react'
import { Link,useHistory } from "react-router-dom";
import "../Style2.css"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Navbar({ token, setToken }) {
  const history = useHistory();

  let navLink = document.getElementById("navLink")
  function showMnue () {
    navLink.style.right = "0"
  }
  
  function hideMnue () {
    navLink.style.right = "-200px"
  }


    return (
      <div className="navB">

        
         <img id="lo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBUlthFW7iUXmASKBcvdni_K8mZ6CDYM4Ag&usqp=CAU"  />
         <h3>بــالانـــس</h3>
        
         <div className="navL" id="navLink">

        {token ? (
          <div>
          <AiOutlineCloseCircle onClick={()=>{hideMnue()}} className='btn'/>

        <ul> 
          <li>
            <Link className="link"  to="/login" onClick={()=>{setToken("");}}>
              تسجيل خروج </Link>
          </li>
          {/* <li>
            <Link className="link" to="/account">اصوات</Link>
          </li> */}
          <li>
            <Link className="link" to="/chat">الرسائل</Link>
          </li>
          <li>
            <Link className="link" to="/favorite">التفضيلات</Link>
          </li>
          <li>
            <Link className="link" to="/post">طمنا عنك</Link>
          </li>
          <li>
            <Link className="link" to="/Consultants">الأستشاريون</Link>
          </li>
          <li>
            <Link className="link" to="/Video">فيديو تحفيزي</Link>
          </li>
           {/* {token && admin == 2 (<div><ul>
<li>
<Link className="link" to="/OntvangerMsg"> الاستشارات الواردة</Link>
</li>
</ul>
</div>)} */}
         
        </ul>
        </div>
        ):(
          <div>
          <AiOutlineCloseCircle onClick={()=>{hideMnue()}} className='btn'/>
             <ul>
               <li>
                 <Link href='/CallUs'> اتصل بنا </Link>
               </li>
                <li>
               <Link href='/AboutUs'>عننا </Link>
              </li>

               <li>
                 <Link href='/'>الرئيسية</Link>
               </li>
             </ul>
             <div className='helloBox'>
        <h1>مـرحبــا بكــم فـي بــالانـــس</h1>
        <Link href='/login'>تسجيل دخول</Link>
        <Link href='/signUp'> أنشاء حساب</Link>
          </div>
           </div>
        ) }   

        </div>
            
        <GiHamburgerMenu onClick={()=>{showMnue()}} className='btnM'/>

          
     
      </div>
    );
}
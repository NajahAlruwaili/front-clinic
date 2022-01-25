import React from 'react'
import { Link } from "react-router-dom";
import "../Style2.css"


export default function Navbar({ token, setToken }) {


    return (
      <div className="navB">

        
         <img id="lo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBUlthFW7iUXmASKBcvdni_K8mZ6CDYM4Ag&usqp=CAU"  />
         <h3>بــالانـــس</h3>
        
         <div className="navL" id="navLink">

        {token ? (
          <div>

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
             <ul>
               <li>
                 <Link to='/CallUs'> اتصل بنا </Link>
               </li>
                <li>
               <Link to='/AboutUs'>عننا </Link>
              </li>

               <li>
                 <Link to='/'>الرئيسية</Link>
               </li>
             </ul>
            
           </div>
        ) }   

        </div>
            

          
     
      </div>
    );
}
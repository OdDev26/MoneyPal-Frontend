import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function UserFooter() {
  return (         
         <div className='main-footer'>
          <div className='row'>
             {/**Column 1 */}
             <div className='col'>
               <h4>GET HELP</h4>
               <ul className='list-unstyled'>
               <li>
                <Link to="/contact/admin">Contact admin</Link>
               </li>
               <li><Link to="/app/manual">How to use app</Link></li>
               </ul>
             </div>
              {/**Column 2 */}
              <div className='col'>
              <h4>About MoneyPal</h4>
              <ul className='list-unstyled'>
              <li>
              <Link to="/about/moneypal">What the app does</Link>
              </li>
              </ul>
              </div>
              </div>
              <hr/>
              <div className='row'>
              <p className='col-sm'>
               &copy;{new Date().getFullYear()} MoneyPal | All rights reserved
              </p>
              </div>
              </div>
        )
      }

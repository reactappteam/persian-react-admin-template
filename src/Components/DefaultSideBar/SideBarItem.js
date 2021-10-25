import React,{useState} from 'react'
import {Iconly} from 'react-iconly'
import {NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const SideBarItem =(props)=> {
  const {label, path, icon,submenu,index} = props
  const [clicked,setClicked] = useState(false)
    const toggle = index=>{
        if(clicked===index)
        {
            return setClicked(null)
        }
        setClicked(index)
    }
  
  return (
    <React.Fragment>
      <li  >
          <NavLink exact  to={path} activeClassName="active" className="flex flex-row-reverse items-center">
            {
             
             icon ? <Iconly name={icon}   className="text-white"   />:null
            }
            
            <span className="mr-3">{label}</span>
           
        </NavLink>
        {
           submenu.length>0?clicked===index ?<Iconly name='ChevronDown'  set="curved" className= " absolute left-0"  size="small" onClick={()=>toggle(index)}  />
                :<Iconly name='ChevronLeft'  set="curved" className=" absolute left-0" size="small" onClick={()=>toggle(index)}  />:null
                
        }
      </li>

      <ol className="mr-4 list-disc">
        {
           clicked===index ?
            submenu.map(child=>  
              <NavLink exact key={child.title}  to={child.path} activeClassName="nav-link-active" className="flex flex-row-reverse items-center py-2">
                {child.icon ? <Iconly name={child.icon}   className="text-white"   />:null}
                <span className="mr-3 text-white">{child.title}</span>
              </NavLink>
            )          
            :null
        }
        </ol>
    </React.Fragment>
      
      
      
  )
}
SideBarItem.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
export default SideBarItem

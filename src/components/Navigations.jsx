import '../styles/Navigations.css'
import Nav  from './Nav'

import { TbDashboard } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { SlUserFollow } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { GrMoney } from "react-icons/gr";
import { MdOutlinePostAdd } from "react-icons/md";
import { LuMessageCirclePlus } from "react-icons/lu";

function Navigations() {
  return (
    <div className='Navigation'>
      <header>
        <div className="profile">
            <img src="https://images.unsplash.com/photo-1647685658173-94c4f42725fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="profile picture" className="profile-img" />
        </div>

        <span>creative ambition</span>
      </header>

      <Nav  title='dashboard' Icon={TbDashboard}/>
      <Nav  title='Analytics' Icon={IoMdAnalytics}/>
      <Nav  title='messages' Icon={TiMessages}/>
      <Nav  title='Followers' Icon={SlUserFollow }/>
      <Nav  title='Modifications' Icon={FaPen}/>
      <Nav  title='Following' Icon={SlUserFollowing}/>
      <Nav  title='Earnings' Icon={GrMoney}/>
      <Nav  title='Posts' Icon={MdOutlinePostAdd}/>
      <Nav  title='Message request' Icon={LuMessageCirclePlus}/>
      <Nav  title='Change Account' Icon={MdManageAccounts}/>
      <Nav  title='Change Theme' Icon={FaThemeisle}/>
      <Nav  title='More Details' Icon={TbListDetails}/>

    </div>
  )
}

export default Navigations

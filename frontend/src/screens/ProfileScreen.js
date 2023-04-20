import { useSelector } from 'react-redux'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  console.log(userInfo)
  return (
    <div>
      <h1>welcome</h1>
      {/* <figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
        because you're logged in
      </span> */}
    </div>
  )
}

export default ProfileScreen

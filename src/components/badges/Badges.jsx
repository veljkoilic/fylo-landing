import './badges.scss'
import { Badge } from "../badge/Badge"

export const Badges = () => {
  const badges = [
    {
      id: 1,
      icon: 'icon-access-anywhere.svg',
      title: "Access your files, anywhere",
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. "
    },
    {
      id: 2,
      icon: 'icon-security.svg',
      title: "Security you can trust",
      text:"2-factor authentication and user controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      id: 3,
      icon: 'icon-collaboration.svg',
      title: "Real-time collaboration",
      text:"Securely share files and foldrers with friends, family and collagues for live collaboration. No email attachments required."
    },
    {
      id: 4,
      icon: 'icon-any-file.svg',
      title: "Store any type of file",
      text:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
    },
    
  ]
  return (
    <div className="badges">
      {badges.map(badge=><Badge key={badge.id} badge = {badge}/>)}
    </div>
  )
}

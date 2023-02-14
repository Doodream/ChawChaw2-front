import React from 'react'
import Image from 'next/image'

type UserImageProps = {
  src: string
  username: string
  size: number
}

const UserImage = ({ src, username }: UserImageProps) => {
  return (
    <div className="relative h-35 w-35 rounded-full ">
      <Image className="rounded-full" fill src={src} alt={username} />
    </div>
  )
}

export default UserImage

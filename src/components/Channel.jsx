import React from 'react'
import TagIcon from '@mui/icons-material/Tag';

function Channel({ id, channelName }) {
  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-discord__channelBg p-1 rounded-md hover:text-white'>
        <TagIcon />
        {channelName}
    </div>
  )
}

export default Channel
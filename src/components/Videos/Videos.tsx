import React from 'react'
import { IVideos } from './type'

interface IVideoProps {
    videos: IVideos[]
}

const Videos = ({ videos }: IVideoProps) => {
    return (
        <div>Videos</div>
    )
}

export default Videos
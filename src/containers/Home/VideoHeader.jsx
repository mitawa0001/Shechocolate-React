import ReactPlayer from 'react-player';

const VideoHeader = () => {
    const videoUrl = 'https://cdn.shopify.com/videos/c/vp/e910ec708e7e4a448de9086e2f29f5b1/e910ec708e7e4a448de9086e2f29f5b1.HD-1080p-7.2Mbps-19366411.mp4';

    return (
        <>
            <div className="video-player-wrapper">
                <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="112vh"
                    className="player-wrapper"
                    loop="true"
                    muted="false"
                    playing="true"
                    // controls="false"
                />
                <div className='bg-wrapper'></div>
            </div>
        </>
    )
}
export default VideoHeader
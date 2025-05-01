import ChatContainer from "./ChatContainer.tsx";
import MusicContainer from "./MusicContainer.tsx";
import VideosContainer from "./VideosContainer.tsx";

export default function CallScreen() {
    return (
        <div className='flex max-h-full h-full justify-stretch'>
            <MusicContainer />
            <VideosContainer />
            <ChatContainer />
        </div>
    )
}
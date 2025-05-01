export default function ChatContainer() {
    return (
        <div className='h-full max-h-full pb-8 flex flex-1/6 flex-col min-w-80 gap-2'>
            <h3>Chat</h3>
            <div className='h-full w-full flex flex-col-reverse items-stretch justify-stretch'>
                <div className='flex'>
                    <input className='text-slate-500 p-1 w-full bg-slate-50' type="text"/>
                    <div className='p-1 px-4 hover:cursor-pointer bg-blue-500'>
                        Send
                    </div>
                </div>
                <div className='flex flex-col p-2'>
                    <div className='self-end flex flex-col items-end w-1/2'>
                        <div className='bg-cyan-500 p-2 rounded-lg'>
                            This is the actual message
                        </div>
                    </div>
                    <div className='self-start flex flex-col items-start w-1/2'>
                        <div className='pl-2 text-sm'>
                            Brandon
                        </div>
                        <div className='bg-zinc-500 p-2 rounded-lg flex-wrap'>
                            This is the actual message, this is testing how much it wil actualy watotwao
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
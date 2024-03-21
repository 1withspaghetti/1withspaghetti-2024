
export default function ProfilePicture() {

    return (
        <div className="relative">
            <img 
                src="/imgs/wave_sticker.png" 
                width={512} 
                height={512} 
                alt="" 
                className="" 
                style={{WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"}}
            />
            <div className="absolute text-4xl text-yellow-300 scale-y-150 -translate-x-1/2 -translate-y-1/2" 
                style={{top: "30%", left: "26%"}}>
                ✦
            </div>
            <div className="absolute text-2xl text-yellow-300 scale-y-150 -translate-x-1/2 -translate-y-1/2" 
                style={{top: "36%", left: "30%"}}>
                ✦
            </div>
        </div>
    )
}
import Image from "next/image";
import top_left from "/public/images/ring-top-left.svg"
import top_right from "/public/images/ring-top-right.svg"

export default function Hero(){
    return(
        <>
        <section className="relative h-[100vh] w-full bg-black">
            <Image className="hidden md:block absolute top-0 left-0 h-[110vh] w-auto" width={300} height={300} src={top_left} alt="Ring top left" />
            <Image className="absolute top-0 right-0 h-[140vh] w-auto min-w-fit" width={800} height={800} src={top_right} alt="Ring top right" />
            <div className="relative w-full h-full z-10 flex flex-col justify-center items-center">
                <div className="text-white text-center w-[80%] md:w-[50%]">
                    <h1 className="text-3xl md:text-7xl font-bold">#1 Tamil Community at VIT Chennai</h1>
                    <p className="m-9 text-lg md:text-2xl">Hey, Great to see you here. Explore Us and Join our community. We make anything and everything to make your life at VIT smoother. If you feel we are missing out something let us know and we will fill that gap too.</p>
                </div>
            </div>
        </section>
        </>
    )
} 

import Image from 'next/image'
import KPO from '../../../public/images.jpeg'
import Cartmade from '../../../public/cartmade_logo.jpg'
import Channakya from '../../../public/Channakya.jpeg'


const EXPERIENCE_DATA = [
    {
        image: Cartmade,
        title: "Cartmade Limited",
        location: "Sanepa , Lalitpur",
        role: "Full Stack Developer",
        dateFrom: "August 2024",
        dateTo: "PRESENT"
    }
    ,
    {
        image: Channakya,
        title: "Channakya Software",
        location: "Sinamangal , Kathmandu",
        role: "Full Stack Developer",
        dateFrom: "February 2023",
        dateTo: "August 2024"
    }
    ,
    {
        image: KPO,
        title: "KPO and Company",
        location: "Chabahill , Kathmandu",
        role: "Content Writer",
        dateFrom: "2021 September",
        dateTo: "2022 August"
    }
]

const Experience = () => {
    return (
        <div className="mt-12">
            <div className="flex flex-col">
                <span className="font-quicksand text-[32px]">My Work <span className="text-customGreen text-opacity-75">Experience</span></span>
                <span className="font-quicksand text-[20px] text-customGray text-opacity-70">Take a brief look at my work experience over the past years.</span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                {
                    EXPERIENCE_DATA.map((data)=> (
                 <div className='rounded-md flex items-center cursor-pointer w-full h-[115px] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative'>
                    <div className='w-16 h-16'>
                        <Image src={data.image} alt="Awakened Devs" />
                    </div>
                    <div className='flex flex-col items-center'>
                    <div className='flex flex-col ml-8 '>
                        <span className='font-quicksand text-[18px] font-semibold text-customGreen text-opacity-75'>{data.title} {""} <span>({data.role})</span></span>
                        <span className='font-quicksand text-[18px] font-semibold'>{data.location}</span>
                    <div>
                        {data.dateFrom} - <span className='font-quicksand text-customGreen text-opacity-75'>{data.dateTo}</span>
                    </div>
                    </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Experience
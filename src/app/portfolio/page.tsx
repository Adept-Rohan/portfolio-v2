import Image from 'next/image'
import Project1 from '../../../public/project1.png'
import Project2 from '../../../public/Work2.png'
import Project3 from '../../../public/khaltie-sewa.webp'
import Portfolio1 from '../../../public/portfoliov1.png'
import Project4 from '../../../public/channakya.jpg'
import Link from 'next/link'


const PROJECT_1 = [
    {
        id: 1,
        title: 'React.js'
    },
    {
        id: 2,
        title: 'Context API'
    },
    {
        id: 3,
        title: 'Firebase'
    },
    {
        id: 4,
        title: 'Tailwind CSS'
    }
    ,
    {
        id: 5,
        title: 'Framer Motion'
    },
]

const PROJECT_2 = [
    {
        id: 1,
        title: 'Next Js'
    }, {
        id: 2,
        title: "Firebase"
    },
    {
        id: 3,
        title: "IME Pay"
    }, {
        id: 4,
        title: 'Zustand'
    },
    {
        id: 5,
        title: "Redis"
    },
    {
        id: 6,
        title: "Axios"
    }
]

const PROJECT_3 = [
    {
        id: 1,
        title: 'Khalti Payment Integration'
    }, {
        id: 2,
        title: "E-sewa Payment Integration"
    }
]

const PROJECT_4 = [
    {
        id: 1,
        title: 'Nest Js'
    },
    {
        id: 2,
        title: 'Nodemailer'
    },
    {
        id: 3,
        title: "CASL Authorization"
    },
    {
        id: 4,
        title: "Maria DB"
    },
    {
        id: 5,
        title: "Knex"
    }
]

const Portfolio = () => {
    return (
        <div className="mt-6 mb-16">
            <div className="flex flex-col">
                <span className="font-quicksand text-[32px]">My <span className="text-customGreen text-opacity-75">Projects</span></span>
                <span className="font-quicksand text-[20px] text-customGray text-opacity-70">Take a brief look at my projects over the past years.</span>
            </div>
            <div className="w-full h-[1px] bg-slate-700 mb-4 mt-6 "></div>
            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6'>
                <div className='w-full'>
                    <div className='w-full h-auto cursor-pointer'>
                        <Link href='https://food-delivery-app-firebase.vercel.app/'><Image src={Project1} alt="E-commerce Project" /></Link>
                    </div>
                    <div className='flex items-center gap-4 mt-2 flex-wrap'>
                        {
                            PROJECT_1.map((project) => (
                                <div key={project.id} className="rounded-md text-customGreen text-opacity-75 flex items-center cursor-pointer w-[130px] h-[40px] dark:backdrop-blur-2xl font-quicksand transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">{project.title}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-auto cursor-pointer'>
                        <Link href=''><Image src={Project2} alt="Kheldim" /></Link>
                    </div>
                    <div className='flex items-center gap-4 mt-2 flex-wrap'>
                        {
                            PROJECT_2.map((project) => (
                                <div key={project.id} className="rounded-md text-customGreen text-opacity-75 flex items-center cursor-pointer w-[130px] h-[40px] dark:backdrop-blur-2xl font-quicksand transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">{project.title}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-auto cursor-pointer'>
                        <Link href='https://github.com/Adept-Rohan/e-sewa-payment-backend'><Image src={Project3} alt="Payment Integration" /></Link>
                    </div>
                    <div className='flex items-center gap-4 mt-2 flex-wrap'>
                        {
                            PROJECT_3.map((project) => (
                                <div key={project.id} className="rounded-md text-customGreen text-opacity-75 flex items-center cursor-pointer w-[230px] h-[40px] dark:backdrop-blur-2xl font-quicksand transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">{project.title}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-auto cursor-pointer'>
                        <Link href=''><Image src={Project4} alt="Channkya Meeting" /></Link>
                    </div>
                    <div className='flex items-center gap-4 mt-2 flex-wrap'>
                        {
                            PROJECT_4.map((project) => (
                                <div key={project.id} className="rounded-md text-customGreen text-opacity-75 flex items-center cursor-pointer w-[130px] h-[40px] dark:backdrop-blur-2xl font-quicksand transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4 relative">{project.title}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-700 mb-4 mt-6 "></div>
            <span className="font-quicksand text-[32px]">My <span className="text-customGreen text-opacity-75">Portfolio V1</span></span>
            <div className='mt-4'>
                <div className='w-full h-auto cursor-pointer'>
                    <Link href='https://portfolio-eta-hazel-30.vercel.app/#home'><Image src={Portfolio1} alt="Portfolio v1" /></Link>
                </div>
            </div>
        </div>
    )
}


export default Portfolio
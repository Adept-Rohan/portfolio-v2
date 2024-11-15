import Link from "next/link"


const HEADLINE_DATA = [
    {
        id: 1,
        title: 'Blog',
        description: 'Catch out my exciting blog on revolving technology on Meduim',
        link: 'https://medium.com/@rohan1d20'
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'Catch out my exciting projects on web development.',
        link: 'portfolio'
    },
    {
        id: 3,
        title: 'Work Experience',
        description: 'My experience around different Software developing organizations.',
        link: 'experience'
    },
    {
        id: 4,
        title: 'Catch Me Up',
        description: 'Wanna Collaborate With Me?',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rohan1d20@gmail.com'
    }
]

export const Headline = () => {
    return (
        <div className="mt-6">
            <div className="w-full h-[1px] bg-slate-700 mb-4 "></div>
            <div className="grid gap-4 md:grid-cols-2">
                {
                    HEADLINE_DATA.map((headline) => (
                        <Link href={headline.link} key={headline.id} className="rounded-md flex flex-col items-start justify-center cursor-pointer w-full h-[105px] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0 bg-[#ffffff0a] hover:bg-[#ffffff0f] p-4">
                            <h3 className="text-base mb-1  font-semibold text-[18px] font-quicksand">{headline.title}</h3>
                            <span className="text-customGray text-sm mb-0 font-quicksand">{headline.description}</span>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}
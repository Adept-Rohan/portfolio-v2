import { CssIcon } from "@/assest/CssIcon"
import { DockerIcon } from "@/assest/Docker"
import { ExpressJsIcon } from "@/assest/ExpressJsIcon"
import { GitHubIcon } from "@/assest/GitHubIcon"
import { HtmlIcon } from "@/assest/HtmlIcon"
import { JavascriptIcon } from "@/assest/JavascriptIcon"
import { MySqlIcon } from "@/assest/MySqlIcon"
import { NestJsIcon } from "@/assest/NestJsIcon"
import { NextJsIcon } from "@/assest/NextJsIcon"
import { NodeJsIcon } from "@/assest/NodeJsIcon"
import { NpmIcon } from "@/assest/NpmIcon"
import { PostgresSqlIcon } from "@/assest/PostgresIcon"
import { ReactIcon } from "@/assest/ReactIcon"
import { TailwindCssIcon } from "@/assest/TailwindCss"
import { TypeScriptIcon } from "@/assest/TypeScript"
import { VsCodeIcon } from "@/assest/VsCodeIcon"
import { SingleTechnology } from "./SingleTechnology"

export const Technology = () => {
    return (
        <div className="mt-14">
            <div>
                <span className="mb-4 text-[28px] font-quicksand">Technologies Used</span>
                <div className="w-full h-[1px] bg-slate-700 mb-4 "></div>
            </div>
            <div className="mt-12">
                <span className="text-[20px] font-quicksand">Frontend</span>
                <div className="mt-4 grid grid-cols-1 w-full lg:grid lg:grid-cols-4 place-content-center gap-6">
                    <SingleTechnology svg={<HtmlIcon width={32} height={32} />} title="HTML" />
                    <SingleTechnology svg={<CssIcon width={30} height={30} />} title="CSS" />
                    <SingleTechnology svg={<JavascriptIcon width={32} height={32} />} title="JavaScript" />
                    <SingleTechnology svg={<TypeScriptIcon width={32} height={32} />} title="TypeScript" />
                    <SingleTechnology svg={<TailwindCssIcon width={32} height={32} />} title="Tailwind CSS" />
                    <SingleTechnology svg={<ReactIcon width={32} height={32} />} title="React" />
                    <SingleTechnology svg={<NextJsIcon width={32} height={32} />} title="Next Js" />
                </div>
            </div>
            <div className="mt-12">
                <span className="text-[20px] font-quicksand">Backend</span>
                <div className="mt-4 grid grid-cols-1 w-full lg:grid lg:grid-cols-4 place-content-center gap-6">
                    <SingleTechnology svg={<NodeJsIcon width={32} height={32} />} title="Node Js" />
                    <SingleTechnology svg={<ExpressJsIcon width={30} height={30} />} title="Express Js" />
                    <SingleTechnology svg={<NestJsIcon width={32} height={32} />} title="Nest Js" />
                    <SingleTechnology svg={<TypeScriptIcon width={32} height={32} />} title="TypeScript" />
                    <SingleTechnology svg={<MySqlIcon width={32} height={32} />} title="MySQL" />
                    <SingleTechnology svg={<PostgresSqlIcon width={32} height={32} />} title="PostgresSQL" />
                </div>
            </div>
            <div className="mt-12">
                <span className="text-[20px] font-quicksand">Tools</span>
                <div className="mt-4 grid grid-cols-1 w-full lg:grid lg:grid-cols-4 place-content-center gap-6">
                    <SingleTechnology svg={<VsCodeIcon width={32} height={32} />} title="VS Code" />
                    <SingleTechnology svg={<GitHubIcon width={30} height={30} />} title="GitHub" />
                    <SingleTechnology svg={<NpmIcon width={32} height={32} />} title="NPM" />
                    <SingleTechnology svg={<DockerIcon width={32} height={32} />} title="Docker" />
                </div>
            </div>
        </div>
    )
}
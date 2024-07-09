import Image from 'next/image'
import Link from 'next/link'

export default function About() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-800 text-white">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<Link href="/">
					<p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl text-black font-bold bg-gradient-to-b from-emerald-300 to-cyan-400 border-zinc-900">
						Radiant Pine LLC
					</p>
				</Link>

				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none"></div>
			</div>
			<Image className="" src="/LogoMain.svg" alt="Radiant Pine Logo" width={180} height={370} priority />
			<div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br  sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<h2 className="text-rose-600 text-3xl mt-6">My background</h2>
				<p className="indent-4 mt-4 mb-12 w-[80%]">
					My professional background has been as a web developer, coder, and quality assurance engineer. I
					have over 7 years of experience working for a wide variety of companies from startups to large
					corporations. Having spent years doing quality assurance and testing on web applications has given
					me the knowledge and experience to deeply understand how websites work and quickly identify issues
					with usability or common pain points for customers.
				</p>

				<h2 className="text-rose-600 text-3xl mt-6">Business offerings</h2>
				<p className="indent-4 mt-4 mb-12 w-[80%]">
					I am focusing on helping small bussinesses and individuals that have a current website but may be
					struggling to set things up properly or would like some guidance on how to manage and improve what
					they have. I am concentrating on a couple different CMS platforms such as WordPress, Squarespace,
					Wix, and Webflow. I believe that it is better for small businesses to own their assets and
					architecture related to their business website rather than paying for a company to manage their
					website for them.
				</p>

				<p className="mt-4">
					If you have any questions or need assistance with anything just email me at{' '}
					<span className="text-cyan-400">office@radiantpine.com</span>
				</p>
			</div>
		</main>
	)
}

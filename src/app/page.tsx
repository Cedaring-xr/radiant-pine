import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-800 text-white">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl text-black font-bold bg-gradient-to-b from-emerald-300 to-cyan-400 border-zinc-900">
					Radiant Pine LLC
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none"></div>
			</div>
			<Image className="" src="/LogoMain.svg" alt="Radiant Pine Logo" width={180} height={370} priority />

			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl before:dark:bg-gradient-to-br  sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<p className="text-2xl">
					I am currently working on building out a business website from scratch. This is just a quick landing
					page for now.
				</p>
			</div>
			<div className="relative flex place-items-center">
				<p className="text-2xl">
					If you have any questions or need assistance with anything just email me at{' '}
					<span className="text-cyan-400">office@radiantpine.com</span>
				</p>
			</div>

			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
				<a href="https://mattraydev.com" className="group px-5 py-4" target="_blank" rel="noopener noreferrer">
					<h2 className="mb-3 text-3xl font-semibold group-hover:underline">
						Old Dev work
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-rose-600">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm">
						Other web development and coding projects that I have worked on recently.
					</p>
				</a>

				<a
					href="https://radiantpine-devblog.com"
					className="group px-5 py-4 transition-colors"
					rel="noopener noreferrer"
					target="_blank"
				>
					<h2 className="mb-3 text-3xl font-semibold group-hover:underline">
						Blog Articles{' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-rose-600">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm">Some techincal articles and personal writings.</p>
				</a>

				<Link href="/about" className="group px-5 py-4 transition-colors" rel="noopener noreferrer">
					<h2 className="mb-3 text-3xl font-semibold group-hover:underline">
						About business{' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-rose-600">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm">
						About my background and why I am starting a website consulting business
					</p>
				</Link>
			</div>
		</main>
	)
}

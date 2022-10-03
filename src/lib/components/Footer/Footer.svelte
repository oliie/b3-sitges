<script>
	import logo from './coderight-logo-white.svg';
	/* import { page } from '$app/stores';
	import facebook from '../icons/icon_Facebook.svg';
	import linkedin from '../icons/icon_LinkedIn.svg';
	import instagram from '../icons/icon_Instagram.svg'; */
</script>

<div class="flex justify-center bg-black-coderight">
	<footer class="flex flex-col container md:flex max-w-4xl text-accent-secondary-coderight">
		<div class="flex flex-col container max-w-6xl md:justify-between p-12 lg:flex-row lg:px-8">
			<div class="flex">
				<ul>
					<li class="pt-4 pb-2 lg:pb-2">
						<strong class="text-accent-primary-coderight">Adress</strong>
					</li>
					<li>
						<p>URH Sitges Playa</p>
						<p>Port Alegre 53</p>
						<p>08870 Sitges</p>
						<p>Barcelona</p>
					</li>
				</ul>
			</div>
			<div class="flex">
				<ul>
					<li class="pt-4 pb-2 lg:pb-2">
						<strong class="text-accent-primary-coderight">Kontakt</strong>
					</li>
					<li>
						<p>hello@coderight.se</p>
						<p>08-410 143 40</p>
					</li>
				</ul>
			</div>
			<div class="flex">
				<nav>
					<ul>
						<li class="pt-4 pb-2 lg:pb-2">
							<strong class="text-accent-primary-coderight">Gå till</strong>
						</li>
						<li>
							<a class="hover:text-secondary-coderight-lighter" data-sveltekit:prefetch href="/"
								>Start</a
							>
						</li>
					</ul>
				</nav>
			</div>
			<div class="flex">
				<nav>
					<ul>
						<li class="pt-4 pb-2 lg:pb-2">
							<strong class="text-accent-primary-coderight">Kul att göra</strong>
						</li>
						<li>
							<a class="hover:text-secondary-coderight" data-sveltekit:prefetch href="/">Sitges</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<hr class="border-accent-primary-coderight" />
		<div class="flex flex-col sm:flex-row justify-between sm:items-end my-6 px-12">
			<div class="pb-2">
				<a href="/">
					<img src={logo} alt="B3 logo" width="150" />
				</a>
			</div>
			<div>
				<p class="text-sm sm:text-md text-white">B3 CodeRight org nr: 556938-7458</p>
			</div>
		</div>
	</footer>
</div>

<style>
</style>

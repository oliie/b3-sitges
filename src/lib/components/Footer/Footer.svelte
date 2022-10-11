<script>
	import logo from './coderight-logo-white.svg';
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
						<p>Direktlinje Ivo: </p>
						<p>0730 41 22 00</p>
						<p class="mt-2">Direktlinje Nicklas: </p>
						<p>0706 45 00 03</p>
						<p class="mt-2">Ytterligare hjälp ring: </p>
						<p>112</p>
					</li>
				</ul>
			</div>
			<div class="flex">
				<nav>
					<ul>
						<li class="pt-4 pb-2 lg:pb-2">
							<strong class="text-accent-primary-coderight">Länkar</strong>
						</li>
						<li>
							<a	
								target="_blank"
								class="hover:text-secondary-coderight-lighter"
								data-sveltekit:prefetch
								href="https://netigate.se/ra/s.aspx?s=1086996X347883259X26336"
								>Medarbetarundersökning</a
							>
						</li>
						<li>
							<a	
								target="_blank"
								class="hover:text-secondary-coderight-lighter"
								data-sveltekit:prefetch
								href="https://b3it.sharepoint.com/teams/Intranet/SitePages/Nu-lanseras-B3s-h%C3%A5llbarhetsutbildning.aspx"
								>Hållbarhetsutbildning</a
							>
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

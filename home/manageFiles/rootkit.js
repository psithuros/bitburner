// File pathing: home~/manageFiles/rootkit.js
// RAM: 3.30 GB

export async function main(ns) {

	let target = ns.args[0]

	const ROOT_KIT = [`BruteSSH.exe`, `FTPCrack.exe`, `relaySMTP.exe`, `HTTPWorm.exe`, `SQLInject.exe`]
	const ROOT_COM = [ns.brutessh, ns.ftpcrack, ns.relaysmtp, ns.httpworm, ns.sqlinject]



	if (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(target)) {
		
		let j = 0;
		for (let i = 0; i < 5; i++) {
			if (ns.hasRootAccess(target)) {
				ns.exit()
			}
			if (ns.fileExists(ROOT_KIT[i])) {
				ROOT_COM[i](target);
				j++;
			}
			if (ns.getServerNumPortsRequired(target) <= j) {
				ns.nuke(target)
				ns.tprint(`${target} successfully accessed.`)
			}
			if (ns.hasRootAccess(target)) {
				ns.run("test.js", 1, target)
			}
		}
	}
}
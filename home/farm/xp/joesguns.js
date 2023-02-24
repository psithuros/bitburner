//  File pathing: home~/farm/xp/joesguns.js
// RAM: 3.05 GB

export async function main(ns) {
	let target =`joesguns`
	let host = ns.args[0]

	function tCount(server) {
		return Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / 2)
	}
	while(true) {
		ns.exec(`/hgw/oneShot/weak.js`, host, tCount(host), target)
		await ns.sleep(ns.getWeakenTime(target) + 50)
	}
}
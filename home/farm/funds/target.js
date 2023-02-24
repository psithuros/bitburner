// File pathing: home~/farm/funds/target.js
// RAM: 5.50 GB

export async function main(ns) {

	let target = ns.args[0];
	let host = ns.args[1] || ns.getHostname();
	let target_max_funds = ns.getServerMaxMoney(target);
	let target_min_sec = ns.getServerMinSecurityLevel(target);
	
		let tCount_weak = (Math.ceil(ns.getServerSecurityLevel(target) - target_min_sec) * 20)
		let tCount_grow = (Math.ceil(ns.growthAnalyze(target, ((ns.getServerMaxMoney(target) / ns.getServerMoneyAvailable(target))))))

			if (target_min_sec < ns.getServerSecurityLevel(target)) {
			let weakenTime = ns.getWeakenTime(target);
			ns.exec("/hgw/oneShot/weak.js", host, tCount_weak, target);
			await ns.sleep(weakenTime);
			}

            await ns.sleep(50);

			if (target_max_funds > ns.getServerMoneyAvailable(target)) {
			let growTime = ns.getGrowTime(target);
			ns.exec("/hgw/oneShot/grow.js", host, tCount_grow, target);
			await ns.sleep(growTime);
			}
	
            await ns.sleep(50);

	while(true) {

		tCount_weak = (Math.ceil(ns.getServerSecurityLevel(target) - target_min_sec) * 20)
		let tCount_hack = (Math.floor(ns.hackAnalyzeThreads(target, Math.floor(target_max_funds / 2))))
		tCount_grow = (Math.ceil(ns.growthAnalyze(target, 3)))

		if (target_min_sec < ns.getServerSecurityLevel(target)) {
			let weakenTime = ns.getWeakenTime(target);
			ns.exec("/hgw/oneShot/weak.js", host, tCount_weak, target);
			await ns.sleep(weakenTime);
		}
		else if (target_max_funds == ns.getServerMoneyAvailable(target)) {
			let hackTime = ns.getHackTime(target);
			ns.exec("/hgw/oneShot/hack.js", host, tCount_hack, target);
			await ns.sleep(hackTime);
		}
		else if (target_max_funds > ns.getServerMoneyAvailable(target)) {
			let growTime = ns.getGrowTime(target);
			ns.exec("/hgw/oneShot/grow.js", host, tCount_grow, target);
			await ns.sleep(growTime);
		}
			await ns.sleep(50)
	} 
}
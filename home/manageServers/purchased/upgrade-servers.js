// File pathing: home~/manageServers/purchased/upgrade-servers.js
// RAM: 2.10 GB

export async function main(ns) {

    ns.disableLog("ALL")

    const serverList = [
        `kizz-0`, `kizz-1`, `kizz-2`, `kizz-3`, `kizz-4`, 
        `kizz-5`, `kizz-6`, `kizz-7`, `kizz-8`, `kizz-9`, 
        `kizz-10`, `kizz-11`, `kizz-12`, `kizz-13`, `kizz-14`, 
        `kizz-15`, `kizz-16`, `kizz-17`, `kizz-18`, `kizz-19`, 
        `kizz-20`, `kizz-21`, `kizz-22`, `kizz-23`, `kizz-24`
    ]

	function display() {
		ns.clearLog();
		serverList.forEach(element => ns.print(`${element} : ${ns.formatRam(ns.getServerMaxRam(element))}`))
	}

	function upgrade(server) {
		for ( let i = 1 ; i < 20 ; i++ ) {

			if ((ns.getServerMaxRam(server) == Math.pow(2, i)) 
				&& (ns.getServerMoneyAvailable(`home`) >= ns.getPurchasedServerUpgradeCost(server, Math.pow(2, (i + 1))))) 
			{
				ns.upgradePurchasedServer(server, Math.pow(2, (i + 1)))
			}			
		}
	}

    while(ns.getServerMaxRam(`kizz-24`) < Math.pow(2, 20)) {
		serverList.forEach(upgrade) 
		display()
		await ns.sleep(50)
	}
}
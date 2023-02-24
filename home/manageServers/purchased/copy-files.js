// File pathing: home~/manageServers/purchased/copy-files.js
// RAM: 2.30 GB

export async function main(ns) {

	ns.disableLog("ALL")
	
		let serverList = []

        let hgw_oneShot = [
            `/hgw/oneShot/hack.js`,
            `/hgw/oneShot/grow.js`,
            `/hgw/oneShot/weak.js`,
        ]

		let farm = [
			`/farm/xp/joesguns.js`,
			`/farm/funds/target.js`
		]

		let manageFiles = [
			`/manageFiles/rootkit.js`,
		]

//      let manageServers_native = [
//          `/manageServers/native/copy-files.js`,
//      ]

 		let manageServers_purchased = [
            `/manageServers/purchased/buy-servers.js`,
            `/manageServers/purchased/copy-files.js`,
			`/manageServers/purchased/farm-xp.js`,
            `/manageServers/purchased/upgrade-servers.js`,
        ]

    while(true) {
        
		for (let i = 0 ; i < 25 ; i++) {

			let serverName = `kizz-${i}`

			if ((ns.serverExists(serverName)) && (serverList.includes(serverName) == false)) {
				serverList.push(serverName)
			}
			await ns.sleep(50)
		}

		ns.clearLog()

		for (let i = 0 ; i < 25 ; i++) {

			let serverName = `kizz-${i}`

			if (serverList.includes(serverName)) {
				ns.print(`${serverName}`)
			}
		}

		for (let i = 0 ; i < 25 ; i++) {

			let serverName = `kizz-${i}`

			if (serverList.includes(serverName)) {
				ns.scp(hgw_oneShot, serverList[i]);
				ns.scp(farm, serverList[i]);
				ns.scp(manageFiles, serverList[i]);
//				ns.scp(manageServers_native, serverList[i]);
				ns.scp(manageServers_purchased, serverList[i]);
			}
			await ns.sleep(50)
		}

		await ns.sleep(50)

    }

}
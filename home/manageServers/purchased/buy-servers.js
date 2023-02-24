// File pathing: home~/manageServers/purchased/buy-servers.js
// RAM: 5.30 GB

export async function main(ns) {

    ns.disableLog("ALL")

    let i = 0

    while(ns.serverExists("kizz-24") == false) {

        if(ns.getServerMoneyAvailable("home") >= ns.getPurchasedServerCost(Math.pow(2, 1))) {  
            if(ns.serverExists(`kizz-${i}`)) {
                i++
            }
            else {
                ns.purchaseServer(`kizz-${i}`, Math.pow(2, 1))
                ns.clearLog()
                for ( let j = i ; j >= 0 ; j-- ) {
                    ns.print(`Successfully purchased server: kizz-${j}`)
                }
            }
        }
        await ns.sleep(50)
    }
    ns.run("manageServers/purchased/copy-files.js")
    ns.run("manageServers/purchased/upgrade-servers.js")   
}
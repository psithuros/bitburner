// File pathing: home~/manageServers/purchased/farm-xp.js
// RAM: 2.10 GB

export async function main(ns) {

    const serverList = [
        `kizz-0`, `kizz-1`, `kizz-2`, `kizz-3`, `kizz-4`, 
        `kizz-5`, `kizz-6`, `kizz-7`, `kizz-8`, `kizz-9`, 
        `kizz-10`, `kizz-11`, `kizz-12`, `kizz-13`, `kizz-14`, 
        `kizz-15`, `kizz-16`, `kizz-17`, `kizz-18`, `kizz-19`, 
        `kizz-20`, `kizz-21`, `kizz-22`, `kizz-23`, `kizz-24`
    ]

    function farm(host) {
        if ((ns.serverExists(host))
            && (ns.getServerUsedRam(host) == 0) 
            && (ns.getServerMaxRam(host) >= 8 )) 
        {
            ns.run("/farm/xp/joesguns.js", host)
        }
    }

    serverList.forEach(element => farm(element))
}
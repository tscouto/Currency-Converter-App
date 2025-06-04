let baseUrl = 'https://economia.awesomeapi.com.br/json'
//Dolar
export const getUSD = async () => {
    try {
        let url = baseUrl + '/last/USD-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.USDBRL) {
            return parseFloat(json.USDBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
}
//Euro
export const getEUR = async () => {
    try {
        let url = baseUrl + '/last/EUR-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.EURBRL) {
            return parseFloat(json.EURBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
}
//BITCOIN


export const getBTC = async () => {
    try {
        let url = baseUrl + '/last/BTC-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.BTCBRL) {
            return parseFloat(json.BTCBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
}
//Libra egepcia
export const getEGP = async () => {
    try {
        let url = baseUrl + '/last/EGP-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.EGPBRL) {
            return parseFloat(json.EGPBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
}

//Ouro
export const getXAU = async () => {
    try {
        let url = baseUrl + '/last/XAU-BRL'
        const req = await fetch(url)
        const json = await req.json()

        if (json.XAUBRL) {
            return parseFloat(json.XAUBRL.ask)
        }

        return 0
    } catch (error) {
        return 0
    }
}


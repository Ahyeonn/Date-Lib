function minutesPadded(mins: number): string {
    // let minutesPadded: any = mins
        
    let strMins: string = ''
    if (mins < 10) {
        strMins = `0${mins}`
    }
    else {
        strMins = mins.toString()
    }
    return strMins
}

export {
    minutesPadded
}
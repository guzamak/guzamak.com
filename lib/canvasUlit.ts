export const getDistance = (x1:number,y1:number,x2:number,y2:number) => {
    return Math.hypot(x1-x2,y1-y2)
}

export const getAngle = (x1:number,y1:number,x2:number,y2:number) => {
    return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
}


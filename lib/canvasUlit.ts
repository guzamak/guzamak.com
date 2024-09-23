export const getDistance = (x1:number,y1:number,x2:number,y2:number) => {
    return Math.hypot(x1-x2,y1-y2)
}

export const getAngle = (x1:number,y1:number,x2:number,y2:number) => {
    return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
}

export const getMinWidth = (innerWidth,MaxWidth) => {

}
export const getMinHeight = (innerHeight,MaxHeight) => {
    
}


export const getMinResposiveSize = (innerWidth:number,innerHeight:number) => {
    const min = Math.min(innerWidth,innerHeight)
    if (min < 640){
        return "sm"
    }else if (min < 768){
        return "md"
    }else if (min < 1024){
        return "lg" 
    }else if (min < 1280){
        return "xl" 
    }else{
        return "2xl" 
    }
}
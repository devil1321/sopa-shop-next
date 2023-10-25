export default function(product:any){
    let rating:string[] = []
    for(let i = 1; i < Math.round(product.rating); i++){
        const str = 'rating' + product.rating[i]
        rating.push(str)
    }
    return rating
}
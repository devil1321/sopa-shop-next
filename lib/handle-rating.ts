export default function handleRating(product:any){
    let rating:string[] = []
    for(let i = 1; i <= Math.round(product.rating); i++){
        const str = 'rating-' + product.rating
        rating.push(str)
    }
    return rating
}
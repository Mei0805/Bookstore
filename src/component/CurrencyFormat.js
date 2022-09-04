export const NumberFormat = (props) =>{
    return(
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'vnd'
        }).format(props) )
}

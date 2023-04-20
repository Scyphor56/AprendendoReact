import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="lg" lancamento={1985}/>
                <Item marca="samsung" lancamento={2000}/>
            </ul>
        </>
    )
}
export default List
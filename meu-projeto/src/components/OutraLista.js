function OutraLista({itens}){
    return(
        <div>
            <h3>Lista de coisas</h3>
            {itens.length > 0 ?(
                itens.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))):(
                    <p>sem itens no momento</p>
                )}
        </div>
    )
}
export default OutraLista
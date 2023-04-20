import Button from "./evento/Button"
function Evento(){
    function meuEvento(){
        console.log("Opa, fui ativado")
    }

    return(
        <>
            <p>
                Clique para disparar um evento:
                <Button event = {meuEvento} text="Primeiro Evento"/>
            </p>

        </>
    )
}
export default Evento
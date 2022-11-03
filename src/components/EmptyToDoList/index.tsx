import { Clipboard } from "phosphor-react";
import { EmptyToDoListContainer } from "./styles";

function EmptyToDoList() {
  return (
    <EmptyToDoListContainer>
      <Clipboard size={56} />
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </EmptyToDoListContainer >
  )
}
export default EmptyToDoList;
let concluidas = 0;
document.querySelector("#marcar").addEventListener("click",
e => {
  concluidas = Math.min(concluidas + 1,
  3);
  document.querySelector("#progresso").textContent = `${concluidas} de 3 metas concluídas`;
  if (concluidas === 3)e.currentTarget.disabled = true
})




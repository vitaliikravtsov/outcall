const searchCall = document.querySelector(".searchCall");

searchCall.onsubmit = async (e) => {
  const date = document.querySelector("#date").value;
  const number = document.querySelector("#number").value;
  const id = document.querySelector("#id").value;
  const data = {
    date: date,
    number: number,
    id: id,
  };
  e.preventDefault();
  let response = await fetch("https://0-191-0.nodered-t.it.loc/outgoing_call", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

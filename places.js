function showDetails(place) {
  const details = {
    taj: "🕌 The Taj Mahal, a symbol of love built by Mughal emperor Shah Jahan, is a white marble masterpiece in Agra and one of the New 7 Wonders of the World.",
    redfort: "🏰 The Red Fort in Delhi is a grand red sandstone fortress built by Shah Jahan in 1648. It served as the main residence of Mughal emperors for over 200 years.",
    qutub: "🗼 Qutub Minar is a 73-meter tall minaret in Delhi, built in 1193 by Qutb-ud-din Aibak. It's an important Indo-Islamic architecture marvel and UNESCO World Heritage Site.",
    hampi: "🏯 Hampi, in Karnataka, was once the capital of the Vijayanagara Empire. Its temple ruins and boulder-strewn landscape speak of a glorious past.",
  };

  const detailBox = document.getElementById("details-box");
  detailBox.innerHTML = `<p>${details[place]}</p>`;
  detailBox.classList.remove("hidden");
  detailBox.scrollIntoView({ behavior: "smooth" });
}

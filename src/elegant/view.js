function expandCard(element) {
    if (element.classList.contains("expanded")) {
      element.classList.remove("expanded");
      element.style.zIndex = 1;
    } else {
      const expandedCards = document.querySelectorAll(".price-plan.expanded");
      expandedCards.forEach((card) => {
        card.classList.remove("expanded");
      });
      element.classList.add("expanded");
    }
  }
  
  document.querySelectorAll(".price-plan").forEach((card) => {
    card.addEventListener("click", function() {
      expandCard(card);
    });
  });
  
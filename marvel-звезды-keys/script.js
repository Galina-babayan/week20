let json = `[{

    "Image": "./images/superman.jpeg",
    "Name": "Супермен",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение, суперслух, классный костюм"

},
{
    "Image": "./images/The Batman.jpg",
    "Name": "Бэтмен",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгёрл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость"

},
{
    "Image": "./images/iron man.jpg",
    "Name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания в науке и технике, связь со всемирной паутиной, бронекостюмы"

},
{
    "Image": "./images/spiderman.jpg",
    "Name": "Спайдермен",
    "universe": "Marvel Comics",
    "alterego": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Х",
    "superpowers": "сверхчеловеческие рефлексы, 'паучье чутье', способность прикрепляться к твердым поверхностям, производство паутины"

},
{
    "Image": "./images/thor.jpg",
    "Name": "Тор",
    "universe": "Marvel Comics",
    "alterego": "нет, полное имя - Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "все, что может бог, плюс молот Мьелнир"

},
{
    "Image": "./images/captain america.jpg",
    "Name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterego": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"

},
{
    "Image": "./images/wonder woman.jpg",
    "Name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterego": "Диана Принс",
    "occupation": "супер-герой, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpowers": "сверхчеловеческая скорость, выносливость, полет"

},

{
    "Image": "./images/hulk.jpg",
    "Name": "Халк",
    "universe": "Marvel Comics",
    "alterego": "Брюс Беннер",
    "occupation": "супер-герой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpowers": "сверхчеловеческая скорость, выносливость, полет"

},

{
    "Image": "./images/black widow.jpeg",
    "Name": "Черная вдова",
    "universe": "Marvel Comics",
    "alterego": "Наташа Романофф",
    "occupation": "супер-герой, шпион",
    "friends": "Мстители",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков"

},
{
    "Image": "./images/deadpool.jpg",
    "Name": "Дэдпул",
    "universe": "Marvel Comics",
    "alterego": "Уэйд Уинстон Уилсон",
    "occupation": "антигерой, наемник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческий иммунитет"
}]`;

let heroes = JSON.parse(json);

let keys = [
  "Вселенная",
  "Альтер-эго",
  "Род деятельности",
  "Друзья",
  "Суперсила",
];

document.addEventListener("DOMContentLoaded", function (event) {
  let heroes = JSON.parse(json);

  let storeResult = [];

  for (let hero of heroes) {
    let parentNode = document.createElement("div");
    parentNode.classList.add("marvel__column");

    let node = document.createElement("article");
    node.classList.add("marvel-item");
    node.classList.add("marvel-item_f");

    let imageNode = document.createElement("div");
    imageNode.classList.add("marvel-item__image");

    let avatarNode = document.createElement("img");
    avatarNode.src = `${hero.Image}`;
    imageNode.append(avatarNode);

    let nameNode = document.createElement("p");
    nameNode.classList.add("marvel-item__name");
    nameNode.textContent = `${hero.Name}`;

    let universeNode = document.createElement("div");
    universeNode.classList.add("marvel-item__period");

    let universeNameNode = document.createElement("span");
    universeNameNode.classList.add("marvel-item__p");
    universeNameNode.textContent = `${keys[0]}: `;

    let universeValueNode = document.createElement("span");
    universeValueNode.classList.add("marvel-item__period");
    universeValueNode.textContent = `${hero.universe}`;

    universeNode.append(universeNameNode);
    universeNode.append(universeValueNode);

    let alteregoNode = document.createElement("div");
    alteregoNode.classList.add("marvel-item__period");

    let alteregoNameNode = document.createElement("span");
    alteregoNameNode.classList.add("marvel-item__p");
    alteregoNameNode.textContent = `${keys[1]}: `;

    let alteregoValueNode = document.createElement("span");
    alteregoValueNode.classList.add("marvel-item__period");
    alteregoValueNode.textContent = `${hero.alterego}`;

    alteregoNode.append(alteregoNameNode);
    alteregoNode.append(alteregoValueNode);

    let occupationNode = document.createElement("div");
    occupationNode.classList.add("marvel-item__period");

    let occupationNameNode = document.createElement("span");
    occupationNameNode.classList.add("marvel-item__p");
    occupationNameNode.textContent = `${keys[2]}: `;

    let occupationValueNode = document.createElement("span");
    occupationValueNode.classList.add("marvel-item__period");
    occupationValueNode.textContent = `${hero.occupation}`;

    occupationNode.append(occupationNameNode);
    occupationNode.append(occupationValueNode);

    let friendsNode = document.createElement("div");
    friendsNode.classList.add("marvel-item__period");

    let friendsNameNode = document.createElement("span");
    friendsNameNode.classList.add("marvel-item__p");
    friendsNameNode.textContent = `${keys[3]}: `;

    let friendsValueNode = document.createElement("span");
    friendsValueNode.classList.add("marvel-item__period");
    friendsValueNode.textContent = `${hero.friends}`;

    friendsNode.append(friendsNameNode);
    friendsNode.append(friendsValueNode);

    let superpowersNode = document.createElement("div");
    superpowersNode.classList.add("marvel-item__period");

    let superpowersNameNode = document.createElement("span");
    superpowersNameNode.classList.add("marvel-item__p");
    superpowersNameNode.textContent = `${keys[4]}: `;

    let superpowersValueNode = document.createElement("span");
    superpowersValueNode.classList.add("marvel-item__period");
    superpowersValueNode.textContent = `${hero.superpowers}`;

    superpowersNode.append(superpowersNameNode);
    superpowersNode.append(superpowersValueNode);

    let starsNode = document.createElement("form");
    starsNode.classList.add("marvel__star");
    starsNode.id = `${hero.Name}`;

    let labelRatingNode1 = document.createElement("label");
    labelRatingNode1.classList.add("marvel__label");
    labelRatingNode1.htmlFor = "rating";

    let inputTotalNode1 = document.createElement("input");
    inputTotalNode1.classList.add("marvel__total");
    inputTotalNode1.type = "radio";
    inputTotalNode1.value = "1";
    inputTotalNode1.name = "rating";
    inputTotalNode1.id = "rating";
    labelRatingNode1.appendChild(inputTotalNode1);
    labelRatingNode1.appendChild(tmpl.content.cloneNode(true));

    labelRatingNode1.append(inputTotalNode1);

    let labelRatingNode2 = document.createElement("label");
    labelRatingNode2.classList.add("marvel__label");
    labelRatingNode2.htmlFor = "rating";

    let inputTotalNode2 = document.createElement("input");
    inputTotalNode2.classList.add("marvel__total");
    inputTotalNode2.type = "radio";
    inputTotalNode2.value = "2";
    inputTotalNode2.name = "rating";
    inputTotalNode2.id = "rating";
    labelRatingNode2.appendChild(inputTotalNode2);
    labelRatingNode2.appendChild(tmpl.content.cloneNode(true));

    labelRatingNode2.append(inputTotalNode2);

    let labelRatingNode3 = document.createElement("label");
    labelRatingNode3.classList.add("marvel__label");
    labelRatingNode3.htmlFor = "rating";

    let inputTotalNode3 = document.createElement("input");
    inputTotalNode3.classList.add("marvel__total");
    inputTotalNode3.type = "radio";
    inputTotalNode3.value = "3";
    inputTotalNode3.name = "rating";
    inputTotalNode3.id = "rating";
    labelRatingNode3.appendChild(inputTotalNode3);
    labelRatingNode3.appendChild(tmpl.content.cloneNode(true));

    labelRatingNode3.append(inputTotalNode3);

    let labelRatingNode4 = document.createElement("label");
    labelRatingNode4.classList.add("marvel__label");
    labelRatingNode4.htmlFor = "rating";

    let inputTotalNode4 = document.createElement("input");
    inputTotalNode4.classList.add("marvel__total");
    inputTotalNode4.type = "radio";
    inputTotalNode4.value = "4";
    inputTotalNode4.name = "rating";
    inputTotalNode4.id = "rating";
    labelRatingNode4.appendChild(inputTotalNode4);
    labelRatingNode4.appendChild(tmpl.content.cloneNode(true));

    labelRatingNode4.append(inputTotalNode4);

    let labelRatingNode5 = document.createElement("label");
    labelRatingNode5.classList.add("marvel__label");
    labelRatingNode5.htmlFor = "rating";

    let inputTotalNode5 = document.createElement("input");
    inputTotalNode5.classList.add("marvel__total");
    inputTotalNode5.type = "radio";
    inputTotalNode5.value = "5";
    inputTotalNode5.name = "rating";
    inputTotalNode5.id = "rating";
    labelRatingNode5.appendChild(inputTotalNode5);
    labelRatingNode5.appendChild(tmpl.content.cloneNode(true));

    labelRatingNode5.append(inputTotalNode5);

    starsNode.append(labelRatingNode1);
    starsNode.append(labelRatingNode2);
    starsNode.append(labelRatingNode3);
    starsNode.append(labelRatingNode4);
    starsNode.append(labelRatingNode5);

    let voteNode = document.createElement("div");
    voteNode.classList.add("marvel__vote");

    let labelVoteNode = document.createElement("label");
    labelVoteNode.classList.add("marvel__label");
    labelVoteNode.htmlFor = "vote";

    let inputVoteNode = document.createElement("input");
    inputVoteNode.classList.add("marvel__result");
    inputVoteNode.type = "text";
    inputVoteNode.name = "vote";
    inputVoteNode.id = "vote";
    inputVoteNode.placeholder = "Оцени героя:";

    voteNode.append(labelVoteNode);
    voteNode.append(inputVoteNode);

    let buttonNode = document.createElement("div");
    buttonNode.classList.add("marvel-item__buttons");

    let buttonInnerNode = document.createElement("div");
    buttonInnerNode.classList.add("marvel-item__button");
    buttonInnerNode.classList.add("marvel-item__button_beige");
    buttonInnerNode.textContent = `Голосуй`;
    buttonNode.append(buttonInnerNode);

    let markNode = document.createElement("div");
    markNode.classList.add("marvel__mark");

    node.append(imageNode);
    node.append(nameNode);
    node.append(universeNode);

    node.append(alteregoNode);
    node.append(occupationNode);
    node.append(friendsNode);
    node.append(superpowersNode);
    node.append(voteNode);
    node.append(starsNode);

    node.append(buttonNode);
    node.append(markNode);

    parentNode.append(node);

    let result = document.querySelector(".marvel__body");
    result = result.append(parentNode);

    starsNode.addEventListener("click", (event) => {
      if (event.target.classList.contains("marvel__total")) {
        const form = event.target.parentNode.parentNode;

        const inputs = form.querySelectorAll(".marvel__total");
        const icons = form.querySelectorAll(".marvel__icon");
        icons.forEach((elem) => {
          elem.style = "fill: rgb(134, 180, 197)";
        });

        for (let i = 0; i < inputs.length; i++) {
          icons[i].style = "fill: rgb(197, 166, 134)";

          if (inputs[i].checked) {
            break;
          }
        }

        buttonNode.addEventListener("click", function () {
          let vote = event.target.value;

          let name = `${hero.Name}`;
          markNode.textContent = `Ваша оценка:  ${vote}`;

          let result = `${name}: ${vote}`;
          storeResult.push(result);

          localStorage.setItem("result", JSON.stringify(storeResult));

          inputVoteNode.value = "";
        });
      }
    });
  }

  let arrHeroes = [];

  let localStoreResult = JSON.parse(localStorage.getItem("result")) || [];

  for (let i = 0; i < localStoreResult.length; i++) {
    const item = localStoreResult[i];

    arrHeroes.push(item);
  }

  let parentStoreNode = document.createElement("div");
  parentStoreNode.classList.add("marvel__column");

  let nodeStore = document.createElement("article");
  nodeStore.classList.add("marvel-item");

  let resultStoreNode = document.createElement("div");
  resultStoreNode.classList.add("marvel-item__period");

  let titleStoreNode = document.createElement("p");
  titleStoreNode.classList.add("marvel-item__name");
  titleStoreNode.textContent = `История рейтинга:`;

  resultStoreNode.innerHTML = arrHeroes.join(". <br>");

  nodeStore.append(titleStoreNode);
  nodeStore.append(resultStoreNode);

  parentStoreNode.append(nodeStore);
  let result = document.querySelector(".marvel__body");
  result = result.append(parentStoreNode);
});

export const rollBaseStats = (races, key) => {
    let backendData = races[1][key][1].backendData;
    var brawnMod = 0,
      agilityMod = 0,
      vitalityMod = 0,
      egoMod = 0,
      moxieMod = 0,
      luckMod = 0,
      wildcards = 0;

    let brawn = Math.floor(Math.random() * 6) + 1;
    let agility = Math.floor(Math.random() * 6) + 1;
    let vitality = Math.floor(Math.random() * 6) + 1;
    let ego = Math.floor(Math.random() * 6) + 1;
    let moxie = Math.floor(Math.random() * 6) + 1;
    let luck = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < backendData.attributes.length; i++) {
      switch (backendData.attributes[i][1]) {
        case "brawn":
          brawnMod = backendData.attributes[i][0];
          break;
        case "agility":
          agilityMod = backendData.attributes[i][0];
          break;
        case "vitality":
          vitalityMod = backendData.attributes[i][0];
          break;
        case "ego":
          egoMod = backendData.attributes[i][0];
          break;
        case "moxie":
          moxieMod = backendData.attributes[i][0];
          break;
        case "luck":
          luckMod = backendData.attributes[i][0];
          break;
        case "wildcard":
          wildcards += backendData.attributes[i][0];
          break;
        default:
          console.log("Failed to match any case!");
      }
    }

    document.getElementById("brawn-0").innerHTML =
      "&nbsp;" +
      (brawn + brawnMod) +
      "&nbsp;&nbsp;(" +
      brawn +
      " + " +
      brawnMod +
      ")";
    document.getElementById("agility-1").innerHTML =
      "&nbsp;" +
      (agility + agilityMod) +
      "&nbsp;&nbsp;(" +
      agility +
      " + " +
      agilityMod +
      ")";
    document.getElementById("vitality-2").innerHTML =
      "&nbsp;" +
      (vitality + vitalityMod) +
      "&nbsp;&nbsp;(" +
      vitality +
      " + " +
      vitalityMod +
      ")";
    document.getElementById("ego-3").innerHTML =
      "&nbsp;" + (ego + egoMod) + "&nbsp;&nbsp;(" + ego + " + " + egoMod + ")";
    document.getElementById("moxie-4").innerHTML =
      "&nbsp;" +
      (moxie + moxieMod) +
      "&nbsp;&nbsp;(" +
      moxie +
      " + " +
      moxieMod +
      ")";
    document.getElementById("luck-5").innerHTML =
      "&nbsp;" +
      (luck + luckMod) +
      "&nbsp;&nbsp;(" +
      luck +
      " + " +
      luckMod +
      ")";

    document.getElementById("brawn").innerHTML = brawn;
    document.getElementById("agility").innerHTML = agility;
    document.getElementById("vitality").innerHTML = vitality;
    document.getElementById("ego").innerHTML = ego;
    document.getElementById("moxie").innerHTML = moxie;
    document.getElementById("luck").innerHTML = luck;

    //sub attributes (only physicall defense at the moment)
    document.getElementById("physical-defense").innerHTML = backendData
      .subAttributes[0]
      ? backendData.subAttributes[0][0]
      : "";

    document.getElementById("attribute-drag-message").style.display = "block";
}
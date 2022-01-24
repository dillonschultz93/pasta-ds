import { copyToClipboard } from "../pasta-utilities/pasta-doc-utilities.js";

// TODO This should not be hard coded in the future
const CSS = `
  .wip {
    display: block;
  }
`.trim();

const IOS = `
{
  "YPL.FFL.TKUI_M.scales.geoA.400": "8",
  "YPL.FFL.TKUI_M.scales.arithA.100": "10",
  "YPL.FFL.TKUI_M.scales.arithA.200": "12",
  "YPL.FFL.TKUI_M.scales.arithA.400": "16",
  "YPL.FFL.TKUI_M.scales.arithA.600": "24",
  "YPL.FFL.TKUI_M.scales.arithA.1000": "28",
  "YPL.FFL.TKUI_M.scales.arithC.900": "60",
  "YPL.FFL.TKUI_M.scales.geoA.900": "256",
  "YPL.FFL.TKUI_M.scales.geoA.1000": "512",
  "YPL.FFL.TKUI_C.typo.face.bold": "Europa-Bold",
  "YPL.FFL.TKUI_C.colors.white": "ffffff",
  "YPL.FFL.TKUI_C.colors.black": "000000",
  "YPL.FFL.TKUI_C.colors.blackish": "242424",
  "YPL.FFL.TKUI_C.colors.gray.300": "bababa",
  "YPL.FFL.TKUI_C.colors.oldOrange": "e05f1f",
  "YPL.FFL.TKUI_C.colors.oldCyan": "3b9690",
  "YPL.FFL.TKUI_C.colors.springGreen": "00ee66",
  "YPL.FFL.TKUI_C.colors.orangeFlame": "ff5221c",
  "YPL.FFL.TKUI_C.colors.MD_dark.z100.backgrd": "2e2e2e",
  "YPL.FFL.TKUI_C.colors.MD_dark.z400.backgrd": "151515",
  "YPL.FFL.TKUI_D.buttonIcon.width": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.buttonIcon.height": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.buttonIcon.glyphColor": "YPL.FFL.TKUI_C.colors.black",
  "YPL.FFL.TKUI_D.buttonIcon.bgColor": "YPL.FFL.TKUI_C.colors.white",
  "YPL.FFL.TKUI_D.chip.width": "YPL.FFL.TKUI_M.scales.arithC.900",
  "YPL.FFL.TKUI_D.chip.height": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.chip.bgColor": "YPL.FFL.TKUI_C.colors.black",
  "YPL.FFL.TKUI_D.rating.height": "YPL.FFL.TKUI_M.scales.arithA.200",
  "YPL.FFL.TKUI_D.rating.icon.color": "YPL.FFL.TKUI_C.colors.oldOrange",
  "YPL.FFL.TKUI_D.rating.icon.width": "YPL.FFL.TKUI_M.scales.arithA.200",
  "YPL.FFL.TKUI_D.rating.text.size": "YPL.FFL.TKUI_M.scales.arithA.200",
  "YPL.FFL.TKUI_D.rating.text.color": "YPL.FFL.TKUI_C.colors.oldOrange",
  "YPL.FFL.TKUI_D.eyebrow.face": "YPL.FFL.TKUI_C.typo.face.bold",
  "YPL.FFL.TKUI_D.eyebrow.size": "YPL.FFL.TKUI_M.scales.arithA.200",
  "YPL.FFL.TKUI_D.eyebrow.color": "YPL.FFL.TKUI_C.colors.gray.300",
  "YPL.FFL.TKUI_D.cardRecipeLarge.width": "100%",
  "YPL.FFL.TKUI_D.cardRecipeLarge.height": "432pt",
  "YPL.FFL.TKUI_D.cardRecipeLarge.radius": "YPL.FFL.TKUI_M.scales.geoA.400",
  "YPL.FFL.TKUI_D.cardRecipeLarge.bgGradient": "gradient(58deg, #000000 100%, #000000 0%)",
  "YPL.FFL.TKUI_D.cardRecipeLarge.bgImage.fillMode": "COVER",
  "YPL.FFL.TKUI_D.cardRecipeLarge.paddingLeft": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.cardRecipeLarge.paddingRight": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.cardRecipeLarge.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.cardRecipeLarge.block.width": "100%",
  "YPL.FFL.TKUI_D.cardRecipeLarge.block.maxWidth": "YPL.FFL.TKUI_M.scales.geoA.1000",
  "YPL.FFL.TKUI_D.cardRecipeLarge.blockCopy.width": "87%",
  "YPL.FFL.TKUI_D.cardRecipeLarge.rating.fringeBottom": "YPL.FFL.TKUI_M.scales.geoA.400",
  "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.face": "YPL.FFL.TKUI_C.typo.face.bold",
  "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.size": "YPL.FFL.TKUI_M.scales.arithA.600",
  "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.lineHeight": "YPL.FFL.TKUI_M.scales.arithA.1000",
  "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.400"
}
`.trim();

const ANDROID = ``.trim();

const FIGMA_TOKENS = ``.trim();

// Collect all playground copy buttons
const playgroundRows = [...document.querySelectorAll('.playground-details-row')];

playgroundRows.forEach(row => {
  const copyButton = row.firstElementChild.querySelector('.btn');
  const detailsEl = row.querySelector('.playground-details');
  const codeEl = detailsEl.querySelector('code');

  switch (codeEl.dataset.lang) {
    case 'css':
      codeEl.textContent = CSS;
      copyButton.addEventListener('click', () => {
        copyToClipboard(CSS);
      });
      break;
    
    case 'json':
      row.id === 'ios' ? codeEl.textContent = IOS : codeEl.textContent = FIGMA_TOKENS;
      copyButton.addEventListener('click', () => {
        copyToClipboard(row.id === 'ios' ? IOS : FIGMA_TOKENS);
      });
      break;

    case 'xml':
      codeEl.textContent = ANDROID;
      copyButton.addEventListener('click', () => {
        copyToClipboard(ANDROID);
      });
  
    default:
      break;
  }
});

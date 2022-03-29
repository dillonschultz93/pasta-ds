//
// TYPO CHOICES (values/number/equation)
//

— The Font Face #1 // ⚠️ the font face (inclluding Weight) impacts all the following math and attributes

  - familyName
    - option1 // ⚠️ ↑ should b elected at a lower granularity (Cf. font face note above)
    - option2 // ⚠️
    - option3 // ⚠️
  - leadingRatio
    - s
    - m
    - l
  - paragraphSpacing
    - s
    - m
    - l
  ————————
  — font.sizes ( ← sizes choices) ie:
      "YPL.FFL.TKUI_C.typo.europa.800.size": "YPL.FFL.TKUI_C.sizes.micro.800.value * YPL.TEST.textSizeFactor",
      "YPL.FFL.TKUI_C.typo.europa.900.size": "YPL.FFL.TKUI_C.sizes.micro.900.value * YPL.TEST.textSizeFactor",
  — font.trackings ( ← Math f(YPL.FFL.TKUI_C.typo.europa.900.size))
      "YPL.FFL.TKUI_C.typo.europa.800.tracking": "YPL.FFL.TKUI_M.typo.europa.trackings.800",
      "YPL.FFL.TKUI_C.typo.europa.900.tracking": "YPL.FFL.TKUI_M.typo.europa.trackings.900",
  — font.leading ( ← Math f(YPL.FFL.TKUI_C.typo.europa.900.size))
      "YPL.FFL.TKUI_C.typo.europa.800.leading": "YPL.FFL.TKUI_C.typo.europa.800.size * YPL.FFL.TKUI_SC.europa.leadingRatio.s",
      "YPL.FFL.TKUI_C.typo.europa.900.leading": "YPL.FFL.TKUI_C.typo.europa.900.size * YPL.FFL.TKUI_SC.europa.leadingRatio.s",
  — font.paragraphSpacing ( ← Math f(YPL.FFL.TKUI_C.typo.europa.900.size))
      "YPL.FFL.TKUI_C.typo.europa.800.paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.800.size * YPL.FFL.TKUI_SC.europa.paragraphSpacing.s",
      "YPL.FFL.TKUI_C.typo.europa.900.paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.900.size * YPL.FFL.TKUI_SC.europa.paragraphSpacing.s",


— The Font Face #2
 {
   - familyName
   - leadingRatio
   - paragraphSpacing
   ————————
   — font.sizes ( ← scales)
   — font.trackings ( ← Math)
   — font.leading ( ← Math)
   — font.paragraphSpacing ( ← Math)
 }


//
// TYPO PRIMITIVES · Typographic Styles (UID)
//

// A heading

"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.option1",

"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.size": "YPL.FFL.TKUI_C.typo.europa.900.size",
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.leading": "YPL.FFL.TKUI_C.typo.europa.900.leading",
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.900.paragraphSpacing",
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.tracking": "YPL.FFL.TKUI_C.typo.europa.900.tracking",
—
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.textAlignHorizontal": // "LEFT"
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.textCase":  // "ORIGINAL"
"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.TextDecoration": // "NONE"

"YPL.FFL.TKUI_D.F0002-003.HMN_europa_heading3.color": "YPL.FFL.TKUI_C.colors.black",

// A paragraph

"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.option1",

"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.size": "YPL.FFL.TKUI_C.typo.europa.900.size",
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.leading": "YPL.FFL.TKUI_C.typo.europa.900.leading",
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.900.paragraphSpacing",
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.tracking": "YPL.FFL.TKUI_C.typo.europa.900.tracking",
—
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.textAlignHorizontal": // "LEFT"
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.textCase":  // "ORIGINAL"
"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.TextDecoration": // "NONE"

"YPL.FFL.TKUI_D.F0002-101.HMN_europa_p.color": "YPL.FFL.TKUI_C.colors.black",

——————

"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.familyName": "YPL.FFL.TKUI_C.typo.europa.familyName.option2",

"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.size": "YPL.FFL.TKUI_C.typo.europa.900.size",
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.leading": "YPL.FFL.TKUI_C.typo.europa.900.leading",
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.900.paragraphSpacing",
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.tracking": "YPL.FFL.TKUI_C.typo.europa.900.tracking",
—
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.textAlignHorizontal": // "LEFT"
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.textCase":  // "ORIGINAL"
"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.TextDecoration": // "NONE"

"YPL.FFL.TKUI_D.F0002-102.HMN_europa_p_strong.color": "YPL.FFL.TKUI_C.colors.black",





















"family": "YPL.FFL.TKUI_C.face.europa.familyName.value",
"weight": "YPL.FFL.TKUI_C.face.europa.weights.400.value",
"size": "YPL.FFL.TKUI_C.typo.europa.700.size.value",
"leading": "YPL.FFL.TKUI_C.typo.europa.700.leading.m.value",
"paragraphSpacing": "YPL.FFL.TKUI_C.typo.europa.700.paragraphSpacing.m.value",
"tracking": "YPL.FFL.TKUI_C.typo.europa.700.tracking.value",
"textAlignHorizontal": "LEFT", // "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED" · https://www.figma.com/plugin-docs/api/TextNode/#textalignhorizontal
"textCase":  "ORIGINAL", // "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" · https://www.figma.com/plugin-docs/api/TextCase/
"TextDecoration": "NONE" // "NONE" | "UNDERLINE" | "STRIKETHROUGH" · https://www.figma.com/plugin-docs/api/TextDecoration/

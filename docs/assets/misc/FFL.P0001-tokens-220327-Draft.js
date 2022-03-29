
////// CHOICES

  //// Dimensions
    "YPL.TEST.textSizeFactor": {"value": "1", "description": "Inject this factor into Typography Sizes Choices. It's used to blow font sizes up to test compliancy with WCAG 1.4.4 · Remove it once in β release"}

    "YPL.FFL.TKUI_C.percents.s": {"value": "33"},
    "YPL.FFL.TKUI_C.percents.m": {"value": "50"},
    "YPL.FFL.TKUI_C.percents.ml": {"value": "66", "UIDS": ["FFL-P0001","FFL-P0002"]},
    "YPL.FFL.TKUI_C.percents.l": {"value": "75"},
    "YPL.FFL.TKUI_C.percents.xl": {"value": "82"},
    "YPL.FFL.TKUI_C.percents.full": {"value": "100"},

    // nano dimensions = statics (px/pixel)
    "YPL.FFL.TKUI_C.sizes.nano.000": {"value": 0px};
    "YPL.FFL.TKUI_C.sizes.nano.100": {"value": 1px};
    "YPL.FFL.TKUI_C.sizes.nano.200": {"value": 2px};
    "YPL.FFL.TKUI_C.sizes.nano.300": {"value": 3px};
    "YPL.FFL.TKUI_C.sizes.nano.400": {"value": 4px};

    // micro dimensions ← Arithmetic 2 based scale
    "YPL.FFL.TKUI_C.sizes.micro.100": {"value": "YPL.FFL.TKUI_M.scales.arithA.100"}, // 6pt"
    "YPL.FFL.TKUI_C.sizes.micro.200": {"value": "YPL.FFL.TKUI_M.scales.arithA.200"}, // 8pt"
    "YPL.FFL.TKUI_C.sizes.micro.300": {"value": "YPL.FFL.TKUI_M.scales.arithA.300"}, // 10pt"
    "YPL.FFL.TKUI_C.sizes.micro.400": {"value": "YPL.FFL.TKUI_M.scales.arithA.400"}, // 12pt"
    "YPL.FFL.TKUI_C.sizes.micro.500": {"value": "YPL.FFL.TKUI_M.scales.arithA.500"}, // 14pt"
    "YPL.FFL.TKUI_C.sizes.micro.600": {"value": "YPL.FFL.TKUI_M.scales.arithA.600"}, // 16pt"
    "YPL.FFL.TKUI_C.sizes.micro.700": {"value": "YPL.FFL.TKUI_M.scales.arithA.700"}, // 18pt"
    "YPL.FFL.TKUI_C.sizes.micro.800": {"value": "YPL.FFL.TKUI_M.scales.arithA.800"}, // 20pt"
    "YPL.FFL.TKUI_C.sizes.micro.900": {"value": "YPL.FFL.TKUI_M.scales.arithA.900"}, // 24pt"
    "YPL.FFL.TKUI_C.sizes.micro.1000": {"value": "YPL.FFL.TKUI_M.scales.arithA.1000"}, // 26pt"
    "YPL.FFL.TKUI_C.sizes.micro.1100": {"value": "YPL.FFL.TKUI_M.scales.arithA.1100"}, // 28pt"
    "YPL.FFL.TKUI_C.sizes.micro.1200": {"value": "YPL.FFL.TKUI_M.scales.arithA.1200"}, // 30pt"
    "YPL.FFL.TKUI_C.sizes.micro.1300": {"value": "YPL.FFL.TKUI_M.scales.arithA.1300"}, // 32pt"

    // macro dimensions ← Arithmetic 8 based scale for containers/bloks/parents/patterns
    "YPL.FFL.TKUI_C.sizes.macro.100": {"value": "YPL.FFL.TKUI_M.scales.arithB.100"}, // 32 pt"
    "YPL.FFL.TKUI_C.sizes.macro.200": {"value": "YPL.FFL.TKUI_M.scales.arithB.200"}, // 48 pt"
    "YPL.FFL.TKUI_C.sizes.macro.300": {"value": "YPL.FFL.TKUI_M.scales.arithB.300"}, // 64 pt"
    "YPL.FFL.TKUI_C.sizes.macro.400": {"value": "YPL.FFL.TKUI_M.scales.arithB.400"}, // 128 pt"
    "YPL.FFL.TKUI_C.sizes.macro.500": {"value": "YPL.FFL.TKUI_M.scales.arithB.500"}, // 208 pt"
    "YPL.FFL.TKUI_C.sizes.macro.600": {"value": "YPL.FFL.TKUI_M.scales.arithB.600"}, // 256 pt"
    "YPL.FFL.TKUI_C.sizes.macro.700": {"value": "YPL.FFL.TKUI_M.scales.arithB.700"}, // 432 pt"
    "YPL.FFL.TKUI_C.sizes.macro.800": {"value": "YPL.FFL.TKUI_M.scales.arithB.800"}, // 464 pt"
    "YPL.FFL.TKUI_C.sizes.macro.900": {"value": "YPL.FFL.TKUI_M.scales.arithB.900"}, // 512 pt"
    "YPL.FFL.TKUI_C.sizes.macro.1100": {"value": "YPL.FFL.TKUI_M.scales.arithB.1000"}, // 768 pt"
    "YPL.FFL.TKUI_C.sizes.macro.1200": {"value": "YPL.FFL.TKUI_M.scales.arithB.1100"}, // 1024 pt"

    // Spaces
    "YPL.FFL.TKUI_C.spaces.s": {"value": "YPL.FFL.TKUI_M.scales.arithA.200"}, // 8pt"
    "YPL.FFL.TKUI_C.spaces.m": {"value": "YPL.FFL.TKUI_M.scales.arithA.600"}, // 16pt"
    "YPL.FFL.TKUI_C.spaces.l": {"value": "YPL.FFL.TKUI_M.scales.arithA.800"}, // 24pt"

    // breakpoints
    "YPL.FFL.TKUI_C.breakpoint.s": {"value": "460pt"},  // 428pt = iPhone 13 Pro Max → https://useyourloaf.com/blog/iphone-13-screen-sizes/
    "YPL.FFL.TKUI_C.breakpoint.m": {"value": "768pt"}, // https://experienceleague.adobe.com/docs/target/using/experiences/vec/mobile-viewports.html?lang=en
    "YPL.FFL.TKUI_C.breakpoint.l": {"value": "1024pt"}, // https://gs.statcounter.com/screen-resolution-stats
    "YPL.FFL.TKUI_C.breakpoint.xl": {"value": "1920pt"}, // → 2560

  //// Typography
    "YPL.FFL.TKUI_C.typo.Europa.700.size": {"value": "YPL.FFL.TKUI_C.sizes.micro.900.value * YPL.TEST.textSizeFactor"},
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.s": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.m": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.l": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.s": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.m": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.l": {"value": "TBD - Math"}, // FIXME
    "YPL.FFL.TKUI_C.typo.Europa.700.tracking": {"value": "TBD - Math"}, // FIXME

  //// Colors

    // Solid
    "YPL.FFL.TKUI_C.colors.grey.400": {"value": "TBD"},
    "YPL.FFL.TKUI_C.colors.grey.300": {"value": "TBD"},
    "YPL.FFL.TKUI_C.colors.grey.200": {"value": "TBD"},
    "YPL.FFL.TKUI_C.colors.white": {"value": "#ffffff"},
    // Gradients
    "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR": {"value": "linear-gradient(64deg, YPL.FFL.TKUI_C.colors.black 0%, YPL.FFL.TKUI_C.colors.black 100%)"},
    "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR": {"value": "linear-gradient(116deg, YPL.FFL.TKUI_C.colors.black 0%, YPL.FFL.TKUI_C.colors.black 100%)"},


//////  DECISIONS

  //// PRIMITIVE — TYPO STYLE

  "YPL.FFL.V0001.typo.h3": {
    "value": {
      "family": "YPL.FFL.TKUI_C.face.Europa.familyName.value",
      "weight": "YPL.FFL.TKUI_C.face.Europa.weights.400.value",
      "size": "YPL.FFL.TKUI_C.typo.Europa.700.size.value",
      "leading": "YPL.FFL.TKUI_C.typo.Europa.700.leading.m.value",
      "paragraphSpacing": "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.m.value",
      "tracking": "YPL.FFL.TKUI_C.typo.Europa.700.tracking.value",
      "textAlignHorizontal": "LEFT", // "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED" · https://www.figma.com/plugin-docs/api/TextNode/#textalignhorizontal
      "textCase":  "ORIGINAL", // "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" · https://www.figma.com/plugin-docs/api/TextCase/
      "TextDecoration": "NONE" // "NONE" | "UNDERLINE" | "STRIKETHROUGH" · https://www.figma.com/plugin-docs/api/TextDecoration/
    },
    "description": "TBD",
    "UIDS": ["FFL-P0001"]
  },


  //// PATTERN
  //  ⚠️ NB:
  //  ⚠️ Modifiers Order:  Options/Variations > Mode > Theme > Breakpoint

    // Macro layout

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": "YPL.FFL.TKUI_C.percents.full.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": "YPL.FFL.TKUI_C.sizes.macro.700.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": "YPL.FFL.TKUI_C.spaces.l.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": "YPL.FFL.TKUI_C.spaces.l.value",

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": "YPL.FFL.TKUI_C.sizes.micro.200.value",

      // blocks
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": "YPL.FFL.TKUI_C.percents.full.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": "YPL.FFL.TKUI_C.sizes.macro.500.value",

    // colors and background treatment

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgGradient": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgGradient.OPT_layout2": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": "FILL", // https://www.figma.com/plugin-docs/api/Paint/#scalemode

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.color": "YPL.FFL.TKUI_C.colors.white.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",

    // Micro layout

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.margin": "YPL.FFL.TKUI_C.sizes.micro.200.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.fringeBottom": "YPL.FFL.TKUI_C.sizes.micro.200.value", // NOPE → SPACES !!!! Please Mr Manu

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": "YPL.FFL.TKUI_C.sizes.micro.200.value", // NOPE → SPACES !!!! Please Mr Manu
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": "YPL.FFL.TKUI_C.sizes.micro.200.value",

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.size.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.leading.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.leading.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.paragraphSpacing.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.paragraphSpacing.value",

    // Variations

      // Options

        // OPT_layout2
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color.OPT_layout2": "YPL.FFL.TKUI_C.colors.grey.200.value",
        // OPT_small
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": "YPL.FFL.TKUI_C.sizes.macro.700.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.size.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.size.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.tracking.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.leading.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.leading.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.paragraphSpacing.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.paragraphSpacing.value",

      // breakpoints

      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": "YPL.FFL.TKUI_C.percents.ml.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.size.BRKP_m": "YPL.FFL.TKUI_C.sizes.micro.1300.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.tracking.BRKP_m": "YPL.FFL.TKUI_C.sizes.micro.1300.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.leading.BRKP_m": "YPL.FFL.TKUI_C.sizes.micro.1300.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.paragraphSpacing.BRKP_m": "YPL.FFL.TKUI_C.sizes.micro.1300.value",

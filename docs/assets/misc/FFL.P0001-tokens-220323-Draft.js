//
////////////////////////////////////  CHOICES
//

YPL.TEST.textSizeFactor: {value: 1, description: "Inject this factor into Typography Sizes Choices. It's used to blow font sizes up to test compliancy with WCAG 1.4.4 · Remove it once in β release"}

YPL.FFL.TKUI_C.ratio.s: {value: 0.33},
YPL.FFL.TKUI_C.ratio.m: {value: 0.50},
YPL.FFL.TKUI_C.ratio.ml: {value: 0.66, UIDS: ["FFL-P0001","FFL-P0002"]},
YPL.FFL.TKUI_C.ratio.l: {value: 0.75},
YPL.FFL.TKUI_C.ratio.xl: {value: 0.82},
YPL.FFL.TKUI_C.ratio.full: {value: 1}

//
// sizes category
//

// nano = statics (px/pixel)
YPL.FFL.TKUI_C.sizes.nano.000: {value: 0px};
YPL.FFL.TKUI_C.sizes.nano.100: {value: 1px};
YPL.FFL.TKUI_C.sizes.nano.200: {value: 2px};
YPL.FFL.TKUI_C.sizes.nano.300: {value: 3px};
YPL.FFL.TKUI_C.sizes.nano.400: {value: 4px};

// micro ← Arithmetic 2 based scale
YPL.FFL.TKUI_C.sizes.micro.100: {value: YPL.FFL.TKUI_M.scales.arithA.100}, // 6pt
YPL.FFL.TKUI_C.sizes.micro.200: {value: YPL.FFL.TKUI_M.scales.arithA.200}, // 8pt
YPL.FFL.TKUI_C.sizes.micro.300: {value: YPL.FFL.TKUI_M.scales.arithA.300}, // 10pt
YPL.FFL.TKUI_C.sizes.micro.400: {value: YPL.FFL.TKUI_M.scales.arithA.400}, // 12pt
YPL.FFL.TKUI_C.sizes.micro.500: {value: YPL.FFL.TKUI_M.scales.arithA.500}, // 14pt
YPL.FFL.TKUI_C.sizes.micro.600: {value: YPL.FFL.TKUI_M.scales.arithA.600}, // 16pt
YPL.FFL.TKUI_C.sizes.micro.700: {value: YPL.FFL.TKUI_M.scales.arithA.700}, // 18pt
YPL.FFL.TKUI_C.sizes.micro.800: {value: YPL.FFL.TKUI_M.scales.arithA.800}, // 20pt
YPL.FFL.TKUI_C.sizes.micro.900: {value: YPL.FFL.TKUI_M.scales.arithA.900}, // 24pt
YPL.FFL.TKUI_C.sizes.micro.1000: {value: YPL.FFL.TKUI_M.scales.arithA.1000}, // 26pt
YPL.FFL.TKUI_C.sizes.micro.1100: {value: YPL.FFL.TKUI_M.scales.arithA.1100}, // 28pt
YPL.FFL.TKUI_C.sizes.micro.1200: {value: YPL.FFL.TKUI_M.scales.arithA.1200}, // 30pt
YPL.FFL.TKUI_C.sizes.micro.1300: {value: YPL.FFL.TKUI_M.scales.arithA.1300}, // 32pt

// macro ← Arithmetic 8 based scale for containers/bloks/parents/patterns
YPL.FFL.TKUI_C.sizes.macro.100: {value: YPL.FFL.TKUI_M.scales.arithB.100}, // 32 pt
YPL.FFL.TKUI_C.sizes.macro.200: {value: YPL.FFL.TKUI_M.scales.arithB.200}, // 48 pt
YPL.FFL.TKUI_C.sizes.macro.300: {value: YPL.FFL.TKUI_M.scales.arithB.300}, // 64 pt
YPL.FFL.TKUI_C.sizes.macro.400: {value: YPL.FFL.TKUI_M.scales.arithB.400}, // 128 pt
YPL.FFL.TKUI_C.sizes.macro.500: {value: YPL.FFL.TKUI_M.scales.arithB.500}, // 208 pt
YPL.FFL.TKUI_C.sizes.macro.600: {value: YPL.FFL.TKUI_M.scales.arithB.600}, // 256 pt
YPL.FFL.TKUI_C.sizes.macro.700: {value: YPL.FFL.TKUI_M.scales.arithB.700}, // 432 pt
YPL.FFL.TKUI_C.sizes.macro.800: {value: YPL.FFL.TKUI_M.scales.arithB.800}, // 464 pt
YPL.FFL.TKUI_C.sizes.macro.900: {value: YPL.FFL.TKUI_M.scales.arithB.900}, // 512 pt
YPL.FFL.TKUI_C.sizes.macro.1100: {value: YPL.FFL.TKUI_M.scales.arithB.1000}, // 768 pt
YPL.FFL.TKUI_C.sizes.macro.1200: {value: YPL.FFL.TKUI_M.scales.arithB.1100}, // 1024 pt

// Spaces
YPL.FFL.TKUI_C.spaces.s: {value: YPL.FFL.TKUI_M.scales.arithA.200}, // 8pt
YPL.FFL.TKUI_C.spaces.m: {value: YPL.FFL.TKUI_M.scales.arithA.600}, // 16pt
YPL.FFL.TKUI_C.spaces.l: {value: YPL.FFL.TKUI_M.scales.arithA.800}, // 24pt

// Typo (CHOICES: fontface + sizes)

// — required: 3 factor choices for s,m,l leading
// — required: 3 factor choices for s,m,l paragrahSpacing

YPL.FFL.TKUI_C.typo.Europa.700.size: {value: YPL.FFL.TKUI_C.sizes.micro.900.value * YPL.TEST.textSizeFactor}  //  24 ⚠️ FACTOR
YPL.FFL.TKUI_C.typo.Europa.700.leading.s:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.leading.m:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.leading.l:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.s:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.m:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.l:  {value: Math},
YPL.FFL.TKUI_C.typo.Europa.700.tracking:  {value: Math},

//
////////////////////////////////////  DECISIONS
//

// PRIMITIVE — TYPO STYLE (for card heading)
YPL.FFL.V0001.typo.heading3: {
  "value": {
    "family": YPL.FFL.TKUI_C.face.Europa.familyName.value,
    "weight": YPL.FFL.TKUI_C.face.Europa.weights.400.value,

    "size":             YPL.FFL.TKUI_C.typo.Europa.700.size.value,
    "leading":          YPL.FFL.TKUI_C.typo.Europa.700.leading.m.value,
    "paragraphSpacing": YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.m.value,
    "tracking":         YPL.FFL.TKUI_C.typo.Europa.700.tracking.value,

    // + text alignment
    // + text "transform"
  }
  "description": "TBD",
  UIDS: ["FFL-P0001"]
}


// PATTERN
YPL.FFL.P0001.posterCard.TKUI_D.width: YPL.FFL.TKUI_C.ratio.full.value

YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_landscape.height: YPL.FFL.TKUI_C.sizes.macro.500.value // ????? SAME (standalone or only in collection)
YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.height: YPL.FFL.TKUI_C.sizes.macro.700.value
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.VRT_landscape.height: YPL.FFL.TKUI_C.sizes.macro.500.value // ????? SAME (standalone or only in collection)
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.height: YPL.FFL.TKUI_C.sizes.macro.800.value

YPL.FFL.P0001.posterCard.TKUI_D.margin: YPL.FFL.TKUI_C.spaces.l.value
YPL.FFL.P0001.posterCard.TKUI_D.fringeBottom: YPL.FFL.TKUI_C.spaces.l.value
YPL.FFL.P0001.posterCard.TKUI_D.padding: YPL.FFL.TKUI_C.spaces.l.value
YPL.FFL.P0001.posterCard.TKUI_D.radius: YPL.FFL.TKUI_C.sizes.micro.200.value

YPL.FFL.P0001.posterCard.TKUI_D.bgGradient: linear-gradient(64deg, YPL.FFL.TKUI_C.colors.black 0%, YPL.FFL.TKUI_C.colors.black 100%) // FIXME
YPL.FFL.P0001.posterCard.TKUI_D.bgImage.fillMode: "cover" // FIXME

YPL.FFL.P0001.posterCard.TKUI_D.blockBottom.width: YPL.FFL.TKUI_C.ratio.xl.value
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.blockBottom.width: YPL.FFL.TKUI_C.ratio.ml.value

YPL.FFL.P0001.posterCard.TKUI_D.blockBottom.slack1up: YPL.FFL.TKUI_C.sizes.macro.500.value
YPL.FFL.P0001.posterCard.TKUI_D.blockCopy.width: YPL.FFL.TKUI_C.ratio.full.value

YPL.FFL.P0001.posterCard.TKUI_D.rating.margin: YPL.FFL.TKUI_C.sizes.micro.200.value,
YPL.FFL.P0001.posterCard.TKUI_D.rating.fringeBottom: YPL.FFL.TKUI_C.sizes.micro.200.value,

YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_landscape.heading3.size: YPL.FFL.TKUI_C.sizes.micro.700.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_landscape.heading3.tracking: YPL.FFL.TKUI_C.sizes.micro.700.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_landscape.heading3.leading: YPL.FFL.TKUI_C.sizes.micro.700.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_landscape.heading3.paragraphSpacing: YPL.FFL.TKUI_C.sizes.micro.700.value,
// YPL.FFL.P0001.posterCard.TKUI_D.BRK_S.VRT_portrait.title.typo.size
// Is the default Primitive "heading3" value
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.VRT_landscape.heading3.size: YPL.FFL.TKUI_C.sizes.micro.700.value,  // ????? SAME (standalone or only in collection)
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.VRT_landscape.heading3.tracking: YPL.FFL.TKUI_C.sizes.micro.700.value, // ????? SAME (standalone or only in collection)
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.VRT_landscape.heading3.leading: YPL.FFL.TKUI_C.sizes.micro.700.value, // ????? SAME (standalone or only in collection)
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.VRT_landscape.heading3.paragraphSpacing: YPL.FFL.TKUI_C.sizes.micro.700.value, // ????? SAME (standalone or only in collection)

YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.heading3.size: YPL.FFL.TKUI_C.sizes.micro.1300.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.heading3.tracking: YPL.FFL.TKUI_C.sizes.micro.1300.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.heading3.leading: YPL.FFL.TKUI_C.sizes.micro.1300.value,
YPL.FFL.P0001.posterCard.TKUI_D.BRK_M.heading3.paragraphSpacing: YPL.FFL.TKUI_C.sizes.micro.1300.value,

YPL.FFL.P0001.posterCard.TKUI_D.title.margin: YPL.FFL.TKUI_C.sizes.micro.200.value,
YPL.FFL.P0001.posterCard.TKUI_D.title.fringeBottom: YPL.FFL.TKUI_C.sizes.micro.200.value,


//
////////////////////////////////////  NOTES   ↓↓↓↓↓↓↓
//

(XXS) XS S M (ML) L XL XXL (XXXL)

macro

yotta Y 1000 8
zetta 1000 7
exa 1000 6

peta P 1000 5
tera T 1000 4
giga G 1000 3

mega M 1000 2
kilo k 1000 1
hecto h 1000 23
deca da 1000 1/3
1000 0
deci d 1000 -1/3
centi 1000 -23
milli m 1000 -1
micro 1000 -2
nano n 1000 -3
pico 1000 -4
femto 1000 -5
atto 1000
zepto 7 1000 -7
yocto M 1000 -8

———————————————————

(XXS) XS S M (ML) L XL XXL (XXXL)

———————————————————


———————————————————


"Gradient": {
  "value": "linear-gradient(45deg, #ffffff 0%, #000000 100%)",
  "description": "TBD",
  "type": "color"
}


———————————————————

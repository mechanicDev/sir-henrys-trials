# Sir Henry's Trials — Art Direction

**Version:** 1.0  
**Status:** Approved visual direction  
**Reference:** `public/assets/characters/henry_idle.png` (young Henry with wooden equipment)

## Visual identity

An illustrated children's fantasy adventure brought to life as a 2D side-scrolling platformer. The artwork should resemble a traditional storybook drawn with pencil and colored pencils on lightly textured paper, with subtle watercolor-like shading. Warm, handmade, playful and adventurous rather than glossy or photorealistic.

## Art rules

- Visible pencil linework, softly irregular outlines and fine grain within colored surfaces.
- Warm earthy colors, gentle shadows, soft highlights and readable silhouettes.
- Avoid shiny 3D rendering, plastic-looking surfaces, flat vector artwork, pixel art and excessively polished digital gradients.
- Keep the world friendly and suitable for children. Monsters may be mischievous, imposing or funny, but avoid gore and graphic horror.
- Favor reds, browns, greens, creams, ochres and warm metallic tones. Avoid blue in Henry's design; prefer the established warm palette throughout the game.
- Preserve character proportions, facial features, equipment and illustration texture across poses. Do not redesign characters between animation frames.
- Prefer clear shapes that remain recognizable at actual gameplay size over tiny decorative details.

## Henry — starting appearance

Henry begins as a young, enthusiastic would-be knight, not an accomplished warrior. His expression conveys optimism, curiosity and courage, with a little goofy confidence.

- Young childlike proportions, round youthful face, freckles, large expressive eyes and abundant curly brown hair.
- No helmet.
- Rough cream cloth tunic with visible repairs, worn brown leather vest and shoulder protection, simple belt and pouches.
- Muted olive trousers with patches and well-worn brown boots.
- Frayed red scarf/cape tied at the neck.
- Simple wooden practice sword and homemade wooden shield bearing a roughly painted golden crown.
- No polished steel plate armor or expensive equipment at the beginning.

### Progression

Henry earns better equipment as the adventure progresses: repaired or improved cloth and leather, sturdier shields and swords, eventually proper knightly armor. Preserve his recognizable face, hair, red cape motif and underlying storybook style. Exact equipment tiers and any aging mechanic remain gameplay decisions, not finalized art requirements.

## Environments

- Side-on platformer perspective, not isometric.
- Royal Meadows: friendly grasslands, wildflowers, dirt paths and rolling hills.
- Forests, caverns and castles should share the same pencil-drawn texture and palette sensibility.
- Foreground platforms need clear walkable edges; distant scenery should be softer and less contrasty than interactive objects.
- Background layers should support parallax where useful, but remain unobtrusive during gameplay.

## Enemies, props and interface

Use the same hand-drawn linework and paper-like texture for enemies, weapons, coins, treasure chests, signs, platforms and interface illustrations. Enemy silhouettes should be distinct from Henry's and readable at small sizes. UI should remain legible and avoid unnecessary ornamentation.

## Asset production rules

- Characters and enemies: transparent PNG, full silhouette including equipment, no baked ground shadow, facing screen right by default.
- Maintain consistent canvas dimensions, scale and foot baseline within each animation set; leave sufficient space for sword and cape movement.
- Mirror sprites in the engine when appropriate; create distinct left-facing art only if gameplay or equipment asymmetry requires it.
- Keep gameplay collision geometry separate from the visible illustration.
- Review new assets alongside the approved Henry reference at gameplay size before accepting them.
- Do not introduce new asset tools or production pipelines unless they solve an immediate gameplay need.

## Reusable image-generation prompt prefix

> Original 2D side-scrolling medieval fantasy game artwork for Sir Henry's Trials. Traditional children's storybook illustration, textured colored-pencil shading, visible fine pencil linework, lightly irregular hand-drawn contours, subtle paper grain, warm earthy colors, gentle watercolor-like shadows, expressive playful shapes and clear silhouettes. Match the approved young Henry reference image in texture, proportions and visual personality. Not photorealistic, not glossy 3D, not flat vector art, not pixel art. Family-friendly fantasy adventure.

Append the specific subject, pose, equipment, composition and background requirements to this prefix. For character animations, supply the approved character image as a visual reference whenever possible.

## Approval checklist

- Does it look like it belongs in the same illustrated book as Henry?
- Is the character or object readable at gameplay size?
- Is the perspective appropriate for a side-scroller?
- Are character identity, proportions and equipment consistent?
- Is it ready for direct use in the game?

The approved image is the primary visual reference. This document records its style so future assets remain consistent; it is not a reason to delay playable development.

## Character Handedness and Direction

- Henry is right-handed.
- The sword is always held in his anatomical right hand.
- The shield is always held in his anatomical left hand.
- Facing right: sword arm is closest to the viewer.
- Facing left: shield arm is closest to the viewer.
- Directional animations must preserve anatomical handedness.
- All animation frames must maintain consistent proportions,
  equipment dimensions, and joint attachment points.
- Standard Page Henry animation canvas: 512 x 800 pixels.

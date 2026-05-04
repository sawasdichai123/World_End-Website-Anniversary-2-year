# PLAN

## Goal
Add a new section **FANART WE 2 ANNIVERSARY** before the current **SPECIAL THANKS** section, using data sourced from Google Sheets and rendering it in the existing anniversary-themed site.

## Scope
### In scope
- Display fanart entries in a dedicated section before `SPECIAL THANKS`.
- Pull fanart data from Google Sheets without creating a new submission form.
- Handle mixed image ratios safely for both portrait and landscape artwork.
- Keep the section aligned with the current dark / editorial anniversary design.
- Prepare the layout so the section can keep working even as new rows are added to the sheet.

### Out of scope for now
- New upload form
- Admin dashboard
- Manual image upload handling inside the website
- Moderation workflow UI

## Source of truth
- Google Sheets will be the single content source for fanart entries.
- The site will fetch a sheet-backed JSON payload and render cards dynamically.
- If the sheet changes, the site should show updated data on the next refresh or fetch cycle.

## Recommended data flow
1. Store fanart rows in Google Sheets.
2. Use Google Apps Script to expose the sheet as a lightweight JSON endpoint.
3. Fetch that endpoint from the frontend.
4. Render each entry as a card in the `FANART WE 2 ANNIVERSARY` section.

## Data fields required per entry
For each artwork entry, store and render:
- ชื่อผู้วาด / นามปากกา
- ช่องทางการติดต่อของเจ้าของผลงาน
- ชื่อผู้ส่ง
- ข้อความที่อยากฝากถึงสาว ๆ WE
- Image URL
- Image width
- Image height
- Orientation or display hint
- Sort order
- Approval / publish status if needed later

## Requirements
- The artwork preview must stay visually prominent.
- Metadata must be clearly separated from the image area.
- Support mixed image ratios:
  - portrait
  - landscape
  - square
  - varying dimensions
- Support images up to **10 MB** in the source workflow.
- Do not force a single fixed aspect ratio on every thumbnail.
- Prevent the layout from breaking when image proportions differ widely.

## Design / UX direction
- Use a responsive card grid or masonry-like layout that adapts to image shape.
- Prefer flexible media containers rather than a single hard-coded aspect ratio.
- Let image metadata help determine the best card presentation.
- Keep the overall look consistent with the existing dark anniversary theme.
- Ensure text remains readable against busy fanart backgrounds.
- Preserve the site’s high-contrast, editorial feel.

## Image handling strategy
- Prefer using `width` and `height` metadata from the Google Sheet when available.
- Use that metadata to classify entries as portrait or landscape.
- Render portrait works in taller cards and landscape works in wider cards where needed.
- Use `object-fit: cover` if the priority is a tighter, more gallery-like presentation.
- Use `object-fit: contain` if preserving the full artwork is more important than filling the frame.
- If crop risk is too high, allow the card height to expand or use a mixed layout strategy.

## Task list by file

### `plan.md`
- Keep this document as the single source of truth for scope, data flow, and implementation order.
- Update requirements for the new `FANART WE 2 ANNIVERSARY` section before `SPECIAL THANKS`.
- Document the Google Sheets integration approach and the image-scaling rules clearly enough for implementation.
- Record any future-only items separately so they do not get mixed into the current scope.

### `src/app.jsx`
- Add the new fanart section into the page flow before `SPECIAL THANKS`.
- Update section anchors / navigation labels if the new section should appear in the rail.
- Make sure section ordering still matches the visual reading order of the page.

### `src/mv.jsx`
- Add the `FANART WE 2 ANNIVERSARY` section content above the existing `SPECIAL THANKS` block.
- Keep `SPECIAL THANKS` intact, but move it to follow the new fanart gallery.
- Render fanart entries from data instead of hardcoding a single layout.
- Ensure the section can handle loading, empty, and error states.

### `src/data.jsx`
- Define the fanart data shape used by the UI.
- Normalize sheet rows into a predictable object structure.
- Store the fields required for each entry:
  - artist / pen name
  - contact method
  - submitter name
  - message to WE
  - image URL
  - image width
  - image height
  - orientation / display hint
  - sort order
  - approval / publish flag if needed

### `styles.css`
- Add the fanart gallery layout and card styles.
- Support mixed portrait / landscape / square images without forcing one fixed aspect ratio.
- Keep metadata readable and visually separated from the artwork.
- Add responsive behavior for smaller screens so the section does not break on mobile.
- Add styles for loading, empty, and error states.

### Google Sheets / Apps Script integration
- Use Google Sheets as the source of truth.
- Expose the sheet as a JSON endpoint through Google Apps Script.
- Fetch the endpoint from the frontend and render the response dynamically.
- Prefer using `width` and `height` metadata to help the UI classify artwork orientation.
- Keep the endpoint output clean and easy for the frontend to consume.

### Notes / future considerations
- Do not build a new submission form in this phase.
- Do not add moderation UI yet.
- If the sheet grows or needs review logic later, filtering and publish controls can be added in a later phase.
- If image handling later becomes more complex, caching or fallback states can be introduced.

## Requirements
- The artwork preview must stay visually prominent.
- Metadata must be clearly separated from the image area.
- Support mixed image ratios:
  - portrait
  - landscape
  - square
  - varying dimensions
- Support images up to **10 MB** in the source workflow.
- Do not force a single fixed aspect ratio on every thumbnail.
- Prevent the layout from breaking when image proportions differ widely.

## Google Sheets integration notes
- Use Google Sheets as the source of truth for content updates.
- Use Google Apps Script as a simple API layer if direct Sheets API setup is unnecessary.
- Keep the endpoint output clean JSON so the frontend can consume it easily.
- If the sheet grows later, the API layer can add filtering, ordering, or publish flags.

## Future considerations
- Add caching if the sheet gets large or the endpoint becomes slow.
- Add a fallback UI if the Google Sheets endpoint is unavailable.
- Add moderation or publish toggles later if the fanart list needs review before display.
- If upload handling is introduced in the future, enforce file size and file type validation before accepting the file.

## Notes
- This plan assumes no new submission form is built now.
- The main risk is image inconsistency, so layout flexibility is the priority.
- The sheet should ideally include image dimensions or orientation hints to make the gallery stable.

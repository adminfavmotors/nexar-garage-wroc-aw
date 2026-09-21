# Visual assets

The workshop photographs are illustrative stock photography, not photographs of
Nexar Garage or its employees. Captions and alternative text make that distinction
explicit. Replace these with approved photographs of the actual workshop when
available; do not describe stock photography as evidence of the business.

- Hero: Kate Ibragimova, https://unsplash.com/photos/bEGTsOCnHro
  — image ID photo-1625047509248-ec889cbff17f.
- Service process: Tim Mossholder, https://unsplash.com/photos/V37iTrYZz2E
  — image ID photo-1487754180451-c456f719a1fc.
- Source license: https://unsplash.com/license.

Images are served from the original Unsplash image CDN, with explicit dimensions
and responsive layout. The hero loads eagerly; the process image loads lazily.

Manrope is bundled locally through @fontsource-variable/manrope, including
Latin Extended coverage. Its OFL license is included in the package.
The browser regression suite checks that ĄĆĘŁŃÓŚŹŻąćęłńóśźż render with the
actual Manrope webfont rather than substituted system glyphs.

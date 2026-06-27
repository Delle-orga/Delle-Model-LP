/* Delle Model — changelog data.
   ➕ Pour ajouter une version : copie un objet EN HAUT de la liste (la plus récente
      en premier). `date` est optionnel (omis = pas affiché). `tag` = petit libellé. */
window.CHANGELOG = [
  {
    version: '1.9.20',
    tag: 'Tools',
    headline: 'Media tools, one click away',
    changes: [
      'Download ffmpeg and the face-recognition models in one click — update or remove them just as easily',
      'More reliable tool detection across Windows, macOS and Linux, whatever package manager you use',
      'See tool downloads in the activity center',
    ],
  },
  {
    version: '1.9.19',
    tag: 'Playback',
    headline: 'Play any video, tidier downloads',
    changes: [
      'Convert a clip to MP4 from the Doctor — play .ts / .mkv / HEVC videos that wouldn’t open in-app before',
      'Downloaded videos now land in the right folder instead of a model’s root',
      'Clearer, friendlier startup',
      'Faster, smarter drag-and-drop of a link onto a model',
    ],
  },
  {
    version: '1.9.18',
    tag: 'Faces & polish',
    headline: 'Faces, live sync & a lot of polish',
    changes: [
      'Faces: searchable, sortable, paginated suggestions and faster review',
      'The sync progress bar now fills within each model, not just model by model',
      'Drop a link straight onto the right model',
      'Group a model’s links by site',
      'Quieter notifications — one-off confirmations no longer pile up in the list',
      'Copy a model’s other names; fixed images that didn’t load on some pages',
    ],
  },
  {
    version: '1.9.17',
    tag: 'Library',
    headline: 'Move media between models',
    changes: [
      'Move & cherry-pick videos and images between models',
      'Pick exactly which items a link downloads',
      'Smoother seeking on large videos',
      'A “You’re watching” card when you pause a video',
    ],
  },
  {
    version: '1.9.16',
    tag: 'Links',
    headline: 'Drag a link onto a model',
    changes: [
      'Drag-and-drop a link onto a model to attach it instantly — the prompt just asks whether to also download it',
    ],
  },
  {
    version: '1.9.15',
    tag: 'Fix',
    headline: 'Doctor fix',
    changes: [
      'Cancelling an upscale now actually stops it — no more work left running in the background',
    ],
  },
  {
    version: '1.9.14',
    tag: 'Automation',
    headline: 'Downloads that organize themselves',
    changes: [
      'New downloads sync into your library automatically — no file watcher needed',
      'Adding a link auto-fetches its title, date and tags',
      '"Check for new" now works on video sites too',
      'The Doctor shows an estimated time for each job',
      'Zoom the whole app with Ctrl + scroll',
    ],
  },
  {
    version: '1.9.13',
    tag: 'Interface',
    headline: 'A cleaner library view',
    changes: [
      '16:9 video thumbnails on model pages',
      'The “Other videos” panel stays open when you pick a video',
      'Richer storage-folder picker — free space + contents — when adding a model',
      'Tidier, right-sized filter menus',
    ],
  },
  {
    version: '1.9.12',
    tag: 'Downloads',
    headline: 'Authenticated downloads',
    changes: [
      'Sign in with your browser cookies or a cookies.txt to download login-only content (Instagram, etc.) — Admin → Download settings',
    ],
  },
  {
    version: '1.9.11',
    tag: 'macOS',
    headline: 'macOS polish',
    changes: [
      'App & tray icons, working auto-updates',
      'Better Unicode (NFD) filenames & symlinked-folder handling',
    ],
  },
  {
    version: '1.9.10',
    tag: 'Storage',
    headline: 'Flexible storage layout',
    changes: [
      'Per-folder layout — one container (default) or cherry-pick; no more forced models/ level',
    ],
  },
  {
    version: '1.9.9',
    tag: 'macOS',
    headline: 'macOS (Apple Silicon) — early access',
    changes: [
      'Delle now runs on Apple Silicon Macs',
      'One-click install for gallery-dl, yt-dlp & ffmpeg',
      'Downloads moved into the Library; start them from a model’s Links',
    ],
  },
  {
    version: '1.9.8',
    tag: 'Fix',
    headline: 'Smoother imports & licensing',
    changes: [
      'Fixed app freeze when importing a large database',
      'Drop your license file straight onto the unlock screen',
    ],
  },
  {
    version: '1.9.7',
    tag: 'License',
    headline: 'Manage your license',
    changes: [
      'Manage your license from Admin',
      'Cleaner, draggable license screen',
    ],
  },
  {
    version: '1.9.6',
    tag: 'Interface',
    headline: 'The Hub',
    changes: [
      'Search + Notifications merged into a single Hub button',
      'UI scroll fix',
    ],
  },
  {
    version: '1.9.5',
    tag: 'Home',
    headline: 'Home hero',
    changes: ['A new home hero'],
  },
  {
    version: '1.9.3',
    tag: 'Home',
    headline: 'Editable home & rankings',
    changes: ['Editable home', 'Top 10 & favorite-video ranking'],
  },
  {
    version: '1.9.2',
    tag: 'Interface',
    headline: 'Model-detail polish',
    changes: ['Reorderable model-detail sections', 'Floating pager'],
  },
  {
    version: '1.9.1',
    tag: 'Images',
    headline: 'Image tooling',
    changes: ['Multi-crop image queue', 'Bulk “Set as…”', 'Recycle-bin fixes'],
  },
  {
    version: '1.9.0',
    tag: 'Major',
    headline: 'The big one — video editing & faces',
    changes: [
      'Video player can edit & create clips (markers, A-B loops, frame grab)',
      'Clip export',
      'Per-model duplicate detection',
      'Face recognition to create feats between models',
    ],
  },
  {
    version: '1.8.3',
    tag: 'Polish',
    headline: 'Maintenance & polish',
    changes: ['Maintenance & polish'],
  },
  {
    version: '1.8.2',
    tag: 'Fix',
    headline: 'Stability fixes',
    changes: ['Stability fixes'],
  },
];

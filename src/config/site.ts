// ============================================================
// CENTRAL SITE CONFIGURATION
// Edit this file to update content, legal info, and settings.
// ============================================================

export const siteConfig = {

  // ----------------------------------------------------------
  // META & SEO
  // ----------------------------------------------------------
  name:        'Mutmachmusik',
  tagline:     'Kindermusik · Konzerte · Workshops · Fortbildungen',
  description: 'Lebendige Kinderkonzerte, interaktive Workshops und professionelle Fortbildungen mit Emma Grünfeld – Musik für Herz und Kopf.',
  url:         'https://mutmachmusik.de', // TODO: update with your final domain

  // ----------------------------------------------------------
  // NAVIGATION  (label → anchor on the landing page)
  // ----------------------------------------------------------
  nav: [
    { label: 'Kindermusik',   href: '#programme'     },
    { label: 'Konzerte',      href: '#konzerte'       },
    { label: 'Workshops',     href: '#workshops'      },
    { label: 'Fortbildungen', href: '#fortbildungen'  },
  ],

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    headline:    'Musik für Herz und Kopf',
    subheadline: 'Kinderkonzerte, Workshops und Fortbildungen – lebendig, interaktiv und unvergesslich.',
    ctaLabel:    'Jetzt buchen',
    ctaHref:     '#kontakt',
  },

  // ----------------------------------------------------------
  // PROGRAMMES
  // Each programme card on the landing page
  // ----------------------------------------------------------
  programmes: [
    {
      id:          'monkey-und-ich',
      name:        'Monkey und Ich',
      ageLabel:    'für 2–6 Jährige',
      description: 'Interaktive Musikerlebnisse für die Kleinsten – mit fröhlichen Liedern, Bewegung und dem frechen Affen Monkey.',
      image:       '/images/photo-monkey-und-ich.png',  // circular card photo
      imageAlt:    'Monkey und Ich – Kinderkonzert für 2–6 Jährige',
      logo:        '/images/monkey text cropped.png',
      ctaLabel:    'Mehr erfahren',
      ctaHref:     '#kontakt',
      accentColor: 'brand-yellow',
    },
    {
      id:          'emma-gruenfeld',
      name:        'Emma Grünfeld',
      ageLabel:    'für 4–11 Jährige',
      description: 'Mitreißende Kinderkonzerte und Workshops mit Emma Grünfeld – Musik, die Kinder begeistert, bewegt und zusammenbringt.',
      image:       '/images/photo-emma-gruenfeld.png',  // circular card photo
      imageAlt:    'Emma Grünfeld – Kinderkonzert für 4–11 Jährige',
      logo:        '/images/logo-emma-gruenfeld.png',
      ctaLabel:    'Mehr erfahren',
      ctaHref:     '#kontakt',
      accentColor: 'brand-pink',
    },
  ],

  // ----------------------------------------------------------
  // TESTIMONIALS  ("Was andere sagen:")
  // ----------------------------------------------------------
  testimonials: [
    {
      quote:  'Die Kinder waren von der ersten bis zur letzten Minute begeistert. Ein absolutes Highlight in unserem Kita-Jahr!',
      author: 'Erzieherin, Kita Sonnenschein, Berlin',
    },
    {
      quote:  'Emma schafft es, selbst die schüchternsten Kinder zum Mitsingen zu bringen. Herzlich, professionell, unvergesslich.',
      author: 'Lehrerin, Grundschule Hamburg',
    },
    {
      quote:  'Wir buchen jedes Jahr wieder. Die Kinder fragen schon Monate vorher, wann Emma wiederkommt.',
      author: 'Leitung, Kita Regenbogen, München',
    },
  ],

  // ----------------------------------------------------------
  // CTA SECTION
  // ----------------------------------------------------------
  cta: {
    headline:    'Wollt ihr Musik für Herz und Kopf?',
    subheadline: 'Bucht ein Konzert, einen Workshop oder eine Fortbildung – wir freuen uns auf euch!',
    buttonLabel: 'Jetzt Kontakt aufnehmen',
    buttonHref:  '#kontakt',
  },

  // ----------------------------------------------------------
  // CONTACT FORM
  // 1. Sign up at https://formspree.io (free)
  // 2. Create a new form and paste the form ID below
  // ----------------------------------------------------------
  contact: {
    formspreeId: 'TODO_FORMSPREE_ID', // TODO: replace with your Formspree form ID
  },

  // ----------------------------------------------------------
  // SOCIAL MEDIA  (set href to your actual URLs)
  // ----------------------------------------------------------
  social: [
    { label: 'YouTube',   href: '#', icon: 'youtube'   },
    { label: 'Instagram', href: '#', icon: 'instagram'  },
    { label: 'Spotify',   href: '#', icon: 'spotify'    },
  ],

  // ----------------------------------------------------------
  // IMPRESSUM  (required by German law – §5 TMG)
  // Fill in ALL fields before going live.
  // ----------------------------------------------------------
  impressum: {
    name:     'Emma Louise Fabrikant',           // TODO: your legal name
    address:  'Scharnweberstr. 43',        // TODO: street + number
    city:     '12587 Berlin',                // TODO: postal code + city
    email:    'emma@monkeyundich.de',               // TODO: contact email
    phone:    '+49 1772593794',                      // TODO: phone number
    ustIdNr:  '',                                   // optional: VAT ID if applicable
  },

};

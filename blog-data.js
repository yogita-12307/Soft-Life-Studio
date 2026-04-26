const products = [
  {
    id: 'minimalist-ceramic-vase',
    title: 'Minimalist Ceramic Vase Set',
    price: '$45.00',
    category: 'Decor',
    image: './images/hero_lifestyle.png',
    link: 'https://example.com/affiliate/vase',
    isAffiliate: true
  },
  {
    id: 'boucle-accent-chair',
    title: 'Cozy Boucle Accent Chair',
    price: '$299.00',
    category: 'Furniture',
    image: './images/aesthetic_bedroom.png',
    link: 'https://example.com/affiliate/chair',
    isAffiliate: true
  },
  {
    id: 'ribbed-throw',
    title: 'Organic Cotton Ribbed Throw',
    price: '$55.00',
    category: 'Textiles',
    image: './images/hero_lifestyle.png',
    link: 'https://example.com/affiliate/throw',
    isAffiliate: true
  },
  {
    id: 'brass-lamp',
    title: 'Warm Brass Table Lamp',
    price: '$89.00',
    category: 'Lighting',
    image: './images/desk_setup.png',
    link: 'https://example.com/affiliate/lamp',
    isAffiliate: true
  },
  {
    id: 'linen-duvet-set',
    title: 'Linen Duvet Cover Set in Oat',
    price: '$120.00',
    category: 'Bedding',
    image: './images/bedroom.jpg',
    link: 'https://example.com/affiliate/bedding',
    isAffiliate: true
  },
  {
    id: 'wabi-sabi-organizer',
    title: 'Wabi-Sabi Desktop Organizer',
    price: '$35.00',
    category: 'Organization',
    image: './images/desk_setup.png',
    link: 'https://example.com/affiliate/organizer',
    isAffiliate: true
  },
  {
    id: 101,
    title: 'Cloud Boucle Sofa',
    price: '$899.00',
    category: 'Furniture',
    image: './images/living-room.png',
    link: 'https://www.amazon.com/dp/B08XABCD12?tag=softlifestudio-20',
    isAffiliate: true
  },
  {
    id: 102,
    title: 'Modern Arch Floor Lamp',
    price: '$149.00',
    category: 'Lighting',
    image: './images/living-room.png',
    link: 'https://www.amazon.com/dp/B08XABCD13?tag=softlifestudio-20',
    isAffiliate: true
  },
  {
    id: 103,
    title: 'Abstract Ceramic Decor Vase',
    price: '$45.00',
    category: 'Decor',
    image: './images/living-room.png',
    link: 'https://www.amazon.com/dp/B08XABCD14?tag=softlifestudio-20',
    isAffiliate: true
  }
];

const posts = [
  {
    slug: 'neutral-bedroom-styling-drops',
    title: 'Neutral Bedroom Styling Drops',
    image: './images/bedroom.jpg',
    category: 'Aesthetic Room Ideas',
    date: 'March 16, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [
      'The soft minimal aesthetic isn\'t just a design trend—it\'s a lifestyle shift towards creating environments that feel like a gentle exhale at the end of a long day.',
      'To achieve this look, you want to focus on warm undertones, layered textures, and intentional emptiness. Gone are the stark, cold whites of 2010s minimalism. Instead, we\'re welcoming in shades of cream, oat, taupe, and subtle blush pinks.',
      '## 1. Embrace Curved Lines',
      'When selecting prominent furniture pieces like sofas or coffee tables, opt for items with curved, organic shapes. A chubby boucle sofa or a pebble-shaped coffee table immediately softens the rigid geometry of a standard room layout.',
      '## 2. Layer Natural Textures',
      'Because the color palette in a soft minimal space is restrained, texture must carry the visual interest. Combine contrasting materials: smooth ceramics against highly textured boucle, cool travertine alongside warm, rich wood tones.'
    ],
    relatedProductIds: ['linen-duvet-set', 'brass-lamp'],
    relatedPostSlugs: ['ultimate-soft-minimal-living', 'aesthetic-minimal-desk']
  },
  {
    slug: 'ultimate-soft-minimal-living',
    title: 'The Ultimate Soft Minimal Living Room',
    image: './images/hero_lifestyle.png',
    category: 'Home Decor Finds',
    date: 'March 14, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [
      'Creating the ultimate soft minimal living room is about finding the perfect balance between comfort and elevated design.',
      'Start with a neutral foundation. A large, textured rug in a warm oat or cream color immediately grounds the space. Pair it with a statement sofa—something low-profile with deep seating.',
      '## The Importance of Layered Lighting',
      'Overhead lighting can often feel harsh. To create a soft life ambiance, rely on multiple light sources at different heights. Table lamps with linen shades, brass floor lamps, and even strategically placed wall sconces can transform the mood of the room entirely.',
      'Keep decorative objects to a minimum, but ensure what you do display is meaningful and texturally interesting.'
    ],
    relatedProductIds: ['boucle-accent-chair', 'minimalist-ceramic-vase', 'ribbed-throw'],
    relatedPostSlugs: ['neutral-bedroom-styling-drops', 'warm-lighting-cozy-nights']
  },
  {
    slug: 'aesthetic-minimal-desk',
    title: 'Aesthetic Minimal Desk Setup',
    image: './images/desk_setup.png',
    category: 'Soft Lifestyle Inspiration',
    date: 'March 10, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [
      'Your workspace should inspire focus and calm. An aesthetic minimal desk setup achieves exactly that by eliminating visual clutter and introducing natural elements.',
      'Start with a solid wood or warm-toned laminate desk. The surface should be large enough that your essentials don\'t feel cramped.',
      '## Essential Organization',
      'Use wabi-sabi inspired organizers to hide unappealing cables, pens, and paper. Incorporate a warm brass table lamp for late-night focused work sessions. Remember, a clear desk equals a clear mind.'
    ],
    relatedProductIds: ['wabi-sabi-organizer', 'brass-lamp'],
    relatedPostSlugs: ['building-productivity-corner', 'neutral-bedroom-styling-drops']
  },
  {
    slug: 'warm-lighting-cozy-nights',
    title: 'Warm Lighting for Cozy Nights',
    image: './images/aesthetic_bedroom.png',
    category: 'Cozy Living Tips',
    date: 'March 05, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [
      'Lighting is the single most important factor in whether a room feels inviting or sterile.',
      'Always opt for bulbs in the 2700K to 3000K range. This provides that signature golden hour glow that makes everything look softer and more luxurious.'
    ],
    relatedProductIds: ['brass-lamp'],
    relatedPostSlugs: ['ultimate-soft-minimal-living']
  },
  {
    slug: 'building-productivity-corner',
    title: 'Building a Productivity Corner',
    image: './images/desk_setup.png',
    category: 'Aesthetic Room Ideas',
    date: 'February 28, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [
      'You don\'t need a massive home office to be productive. A dedicated corner in your bedroom or living room is enough if designed with intention.',
      'Define the zone with a small, textured rug and ensure you have comfortable seating supporting your posture.'
    ],
    relatedProductIds: ['wabi-sabi-organizer', 'boucle-accent-chair'],
    relatedPostSlugs: ['aesthetic-minimal-desk']
  },
  {
    slug: 'shop-the-look-living-room',
    title: 'Shop This Look - Living Room',
    image: './images/Shop this look.png',
    category: 'Shop The Look',
    date: 'March 30, 2026',
    author: { name: 'Soft Life Studio', role: 'Editor', avatarInitials: 'SL' },
    content: [],
    relatedProductIds: [101, 102, 103],
    relatedPostSlugs: ['ultimate-soft-minimal-living', 'neutral-bedroom-styling-drops']
  }
];

window.blogData = { products, posts };

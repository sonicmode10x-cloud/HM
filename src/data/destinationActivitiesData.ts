import { DestinationActivity } from '../types';

export const DESTINATION_ACTIVITIES_BY_TOUR: Record<string, DestinationActivity[]> = {
  'pokhara-himalayan-day-ride': [
    {
      title: 'Sunrise Over Annapurna & Machhapuchhre',
      location: 'Sarangkot Viewpoint (1,592m)',
      category: 'Sightseeing',
      description: 'Catch the 360-degree golden morning light breaking over Dhaulagiri, Annapurna I-IV, and the iconic Fishtail peak.'
    },
    {
      title: 'Explore Ancient Kaskikot Fort Ruins',
      location: 'Kaskikot Ridge',
      category: 'Culture & Heritage',
      description: 'Walk through the historical royal palace ruins of the Shah dynasty overlooking the lush Kashki river valleys.'
    },
    {
      title: 'Pame Shoreline Fresh Trout & Sunset Coffee',
      location: 'Pame Shoreline, Phewa Lake',
      category: 'Food & Local Life',
      description: 'Relax at relaxed lakeside cafes on the tranquil western bank of Fewa lake after riding twisty ridgeline tarmac.'
    },
    {
      title: 'World Peace Pagoda Panoramic Walk',
      location: 'Anadu Hill, Pokhara',
      category: 'Culture & Heritage',
      description: 'Visit the gleaming white Buddhist stupa with unbroken panoramic vistas of Phewa Lake and Pokhara Valley.'
    }
  ],
  'pokhara-jomsom-adventure': [
    {
      title: 'Soak in Natural Riverside Hot Springs',
      location: 'Tatopani (1,190m)',
      category: 'Relaxation',
      description: 'Rejuvenate tired muscles in mineral-rich natural hot thermal pools nestled along the roaring Kali Gandaki riverbanks.'
    },
    {
      title: 'Taste Fresh Apple Pies & Marpha Cider',
      location: 'Marpha Village (2,670m)',
      category: 'Food & Local Life',
      description: 'Wander the pristine stone-paved alleys of the apple capital of Nepal and sample homemade apple crumbles and brandies.'
    },
    {
      title: 'Explore Ancient Kagbeni Gateway & Monasteries',
      location: 'Kagbeni (2,800m)',
      category: 'Culture & Heritage',
      description: 'Step into the 500-year-old medieval mud-brick town serving as the historic checkpoint gateway into Upper Mustang.'
    },
    {
      title: 'Dhumba Sacred Glacial Lake Visit',
      location: 'Near Jomsom (2,830m)',
      category: 'Sightseeing',
      description: 'Ride up to the emerald Buddhist sacred lake tucked beneath the imposing massif of Mount Nilgiri.'
    }
  ],
  'annapurna-motorcycle-adventure': [
    {
      title: 'Muktinath 108 Holy Water Spouts & Eternal Flame',
      location: 'Muktinath Temple (3,710m)',
      category: 'Culture & Heritage',
      description: 'Experience one of the highest sacred pilgrimage shrines in the world revered by both Hindus and Buddhists alike.'
    },
    {
      title: 'Lupra Gorge Hidden Bon Village Discovery',
      location: 'Lupra Valley',
      category: 'Culture & Heritage',
      description: 'Venture into a secluded canyon to discover one of Nepal’s last practicing pre-Buddhist Bon Po settlements.'
    },
    {
      title: 'Rupse Chhahara 300m Waterfall Photography',
      location: 'Kali Gandaki Gorge',
      category: 'Sightseeing',
      description: 'Stop beneath one of the tallest, most dramatic cascading mountain waterfalls along the deepest gorge on Earth.'
    },
    {
      title: 'Stargaze Beneath Nilgiri & Dhaulagiri Massifs',
      location: 'Kalopani & Marpha',
      category: 'Adventure & Outdoors',
      description: 'Experience zero-light-pollution night skies with crystalline views of the Milky Way arching over 8,000m summits.'
    }
  ],
  'manang-motorcycle-expedition': [
    {
      title: 'Gangapurna Glacial Lake & Icefall Overlook',
      location: 'Manang Valley (3,540m)',
      category: 'Sightseeing',
      description: 'Hike to the turquoise glacial tarn formed by the melting snout of the Gangapurna Icefall right above Manang town.'
    },
    {
      title: 'Brajka 1000-Year-Old Gompa & Milarepa Cave Trail',
      location: 'Braga / Brajka Village',
      category: 'Culture & Heritage',
      description: 'Climb through centuries-old mud-brick Tibetan village towers to inspect ancient Buddhist murals and sacred statues.'
    },
    {
      title: 'Taste Sea Buckthorn Juice & Fresh Yak Pastries',
      location: 'Upper Pisang & Manang Bakeries',
      category: 'Food & Local Life',
      description: 'Recharge at high-altitude bakeries serving freshly brewed Himalayan coffee, warm apple pies, and wild sea buckthorn juice.'
    },
    {
      title: 'Side Excursion towards Tilicho Lake Base Route',
      location: 'Khangsar Ridge',
      category: 'Adventure & Outdoors',
      description: 'Ride through dramatic slate scree canyons to the gateway of the highest alpine lake in the Himalayas.'
    }
  ],
  'upper-mustang-motorcycle-expedition': [
    {
      title: 'Walled Capital of Lo Manthang & King’s Palace',
      location: 'Lo Manthang (3,840m)',
      category: 'Culture & Heritage',
      description: 'Tour the royal palace and four 14th-century monasteries housing invaluable sand mandalas and gold-leaf manuscripts.'
    },
    {
      title: 'Chhoser Multi-Story Ancient Sky Cave Cliff Complex',
      location: 'Chhoser / Jhong Cave (3,900m)',
      category: 'Sightseeing',
      description: 'Climb wooden ladders inside 2,500-year-old cliff dwellings carved into sheer vertical sandstone canyon walls.'
    },
    {
      title: 'Ride to Kora La (Nepal-Tibet/China Border 4,660m)',
      location: 'Kora La Pass',
      category: 'Adventure & Outdoors',
      description: 'Reach the historic northern border pillar across the sweeping high-altitude trans-Himalayan desert plateau.'
    },
    {
      title: 'Ghar Gompa: The Oldest Tibetan Monastery in Mustang',
      location: 'Lo Gekar',
      category: 'Culture & Heritage',
      description: 'Visit the 8th-century sanctuary established by Guru Rinpoche (Padmasambhava) featuring carved painted stone scriptures.'
    },
    {
      title: 'Red Sandstone Cliffs & Longest Mani Wall of Ghami',
      location: 'Dhakmar & Ghami',
      category: 'Sightseeing',
      description: 'Marvel at vibrant crimson fairy-chimney cliffs and the longest prayer-carved stone Mani wall in the Himalayas.'
    }
  ],
  'pokhara-mtb-explorer': [
    {
      title: 'Sarangkot Downhill Enduro Singletrack Lap',
      location: 'Sarangkot Ridge (1,590m)',
      category: 'Adventure & Outdoors',
      description: 'Blast down 800m of vertical technical singletrack featuring rock gardens, berms, and pine forest switchbacks.'
    },
    {
      title: 'Naudanda Ridge Cross-Country Trail System',
      location: 'Naudanda Ridge',
      category: 'Adventure & Outdoors',
      description: 'Pedal rolling flow trails through terraced paddy fields with constant skyline views of the Annapurna mountain chain.'
    },
    {
      title: 'Lakeside Pokhara Craft Beer & Rider Lounges',
      location: 'Lakeside Pokhara',
      category: 'Relaxation',
      description: 'Celebrate your ride with wood-fired pizzas, craft ales, and sunset views over Phewa Lake.'
    },
    {
      title: 'Gupteshwor Mahadev Cave & Davis Falls',
      location: 'Chhorepatan, Pokhara',
      category: 'Sightseeing',
      description: 'Descend into subterranean limestone caverns illuminated by temple oil lamps and roaring underground waterfalls.'
    }
  ],
  'annapurna-mtb-adventure': [
    {
      title: 'Ride Ancient Gurung Stone Stairway Singletrack',
      location: 'Ghandruk & Landruk Foothills',
      category: 'Adventure & Outdoors',
      description: 'Test your balance on steep stone stairways and high-alpine technical descents connecting historic Himalayan hamlets.'
    },
    {
      title: 'Taste Traditional Dal Bhat & Organic Himalayan Honey',
      location: 'Ghandruk Village',
      category: 'Food & Local Life',
      description: 'Dine in traditional slate-roof stone lodges with home-cooked organic millet bread, mountain greens, and lentil soups.'
    },
    {
      title: 'Panchase Ridge Holy Forest Cloud Canopy Ride',
      location: 'Panchase Summit Trail',
      category: 'Sightseeing',
      description: 'Ride through ancient moss-draped rhododendron cloud forests teeming with wild orchids and mountain birds.'
    },
    {
      title: 'Australian Camp Sunrise Panorama Hike',
      location: 'Australian Camp (2,060m)',
      category: 'Sightseeing',
      description: 'Wake up to razor-sharp views of Annapurna South and Hiunchuli towering directly in front of your lodge.'
    }
  ],
  'mustang-enduro-mtb-expedition': [
    {
      title: 'Lupra Pass Epic 1,200m Singletrack Descent',
      location: 'Lupra Pass (3,800m) to Kali Gandaki',
      category: 'Adventure & Outdoors',
      description: 'One of the world’s legendary MTB singletrack descents: fast flow, loose shale chutes, and razorback canyon switchbacks.'
    },
    {
      title: 'Muktinath Alpine Plateau Freeride Session',
      location: 'Muktinath Valley (3,710m)',
      category: 'Adventure & Outdoors',
      description: 'Carve natural loam and dust bowls across high-elevation open terrain beneath Dhaulagiri’s 8,167m peak.'
    },
    {
      title: 'Explore Ancient Wind-Sculpted Kali Gandaki Riverbeds',
      location: 'Jomsom to Kagbeni Riverbed',
      category: 'Adventure & Outdoors',
      description: 'Ride the vast gravel plains of Kali Gandaki while hunting for prehistoric Shaligram ammonite fossils.'
    },
    {
      title: 'Old Town Marpha Cobblestone Night Walk',
      location: 'Marpha Old Town',
      category: 'Culture & Heritage',
      description: 'Stroll torchlit alleys protected by whitewashed stone houses and centuries-old wooden roof drainage systems.'
    }
  ]
};

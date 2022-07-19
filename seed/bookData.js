const booksData = [
  {
    isbn: '0307124533',
    title: "Owl's Amazing but True No. 2",
    author: 'Owl Magazine',
    year: '2012',
    publisher: 'Golden Books',
    imageLinkS: 'http://images.amazon.com/images/P/0307124533.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0307124533.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0307124533.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0394172116',
    title: 'Monkey (An Evergreen Book, E-112)',
    author: 'Cheng-En Wu',
    year: '2011',
    publisher: 'Grove Press',
    imageLinkS: 'http://images.amazon.com/images/P/0394172116.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0394172116.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0394172116.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380816792',
    title: 'A Rose in Winter',
    author: 'Kathleen E. Woodiwiss',
    year: '2011',
    publisher: 'Harper Mass Market Paperbacks',
    imageLinkS: 'http://images.amazon.com/images/P/0380816792.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0380816792.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0380816792.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743474198',
    title: 'Heartbreaker',
    author: 'Julie Garwood',
    year: '2010',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0743474198.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743474198.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743474198.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743457226',
    title: 'Deep Waters',
    author: 'Jayne Ann Krentz',
    year: '2010',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0743457226.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743457226.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743457226.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '074349346X',
    title: 'Angels &amp; Demons : A Novel',
    author: 'Dan Brown',
    year: '2008',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/074349346X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/074349346X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/074349346X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1903436346',
    title: "The Winter's Tale - Arden Shakespeare : Third Series - Hardback (Arden Shakespeare Third Series)",
    author: 'John Pitcher',
    year: '2006',
    publisher: 'Arden',
    imageLinkS: 'http://images.amazon.com/images/P/1903436346.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1903436346.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1903436346.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743456874',
    title: "Nip 'n' Tuck : A Novel",
    author: 'Kathy Lette',
    year: '2006',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743456874.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743456874.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743456874.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743448987',
    title: 'Memoirs of an Unfit Mother',
    author: 'Anne Robinson',
    year: '2006',
    publisher: 'Pocket Books',
    imageLinkS: 'http://images.amazon.com/images/P/0743448987.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743448987.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743448987.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1881273156',
    title: 'The Five Love Languages: Five Love Languages',
    author: 'Gary Chapman',
    year: '2005',
    publisher: 'Moody publishers',
    imageLinkS: 'http://images.amazon.com/images/P/1881273156.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1881273156.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1881273156.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1593100175',
    title: 'Beauty Is Soul Deep',
    author: 'Michelle Lee',
    year: '2005',
    publisher: 'Barbour Publishing',
    imageLinkS: 'http://images.amazon.com/images/P/1593100175.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1593100175.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1593100175.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1582344574',
    title: 'Ninth Life of Louis Drax, The -POSTPONED',
    author: 'Liz Jensen',
    year: '2005',
    publisher: 'Bloomsbury USA',
    imageLinkS: 'http://images.amazon.com/images/P/1582344574.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1582344574.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1582344574.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '157322295X',
    title: 'The Great Indoors / Sabine Durrant',
    author: 'Sabine Durrant',
    year: '2005',
    publisher: 'Riverhead Books',
    imageLinkS: 'http://images.amazon.com/images/P/157322295X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/157322295X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/157322295X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '155278410X',
    title: 'The Hamlet Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/155278410X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/155278410X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/155278410X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1552782662',
    title: 'The Shanghai Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/1552782662.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1552782662.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1552782662.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1552782603',
    title: 'The Lake Ching Murders',
    author: 'David Rotenberg',
    year: '2005',
    publisher: 'McArthur &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/1552782603.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1552782603.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1552782603.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0881501719',
    title: 'The Asey Mayo Trio: Three Cape Cod Mysteries',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/0881501719.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0881501719.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0881501719.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '088150078X',
    title: 'The Annulet of Gilt: An Asey Mayo Cape Cod Mystery',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/088150078X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/088150078X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/088150078X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0881500461',
    title: 'The Cape Cod Mystery: An Asey Mayo Mystery',
    author: 'Phoebe Atwood Taylor',
    year: '2005',
    publisher: 'Countryman Press',
    imageLinkS: 'http://images.amazon.com/images/P/0881500461.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0881500461.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0881500461.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0802714277',
    title: 'Astro Turf: The Private Life Of Rocket Science',
    author: 'M. G. Lord',
    year: '2005',
    publisher: 'Walker &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/0802714277.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0802714277.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0802714277.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0786890754',
    title: 'PS, I Love You',
    author: 'Cecelia Ahern',
    year: '2005',
    publisher: 'Hyperion',
    imageLinkS: 'http://images.amazon.com/images/P/0786890754.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0786890754.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0786890754.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0778320820',
    title: 'Me &amp; Emma',
    author: 'Elizabeth Flock',
    year: '2005',
    publisher: 'Mira',
    imageLinkS: 'http://images.amazon.com/images/P/0778320820.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0778320820.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0778320820.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0763626392',
    title: 'The Gift (Croggon, Alison, Pellinor, 1st Bk.)',
    author: 'Alison Croggon',
    year: '2005',
    publisher: 'Candlewick Pr',
    imageLinkS: 'http://images.amazon.com/images/P/0763626392.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0763626392.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0763626392.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0753820099',
    title: 'Snobs',
    author: 'Julian Fellowes',
    year: '2005',
    publisher: 'Phoenix mass market p/bk',
    imageLinkS: 'http://images.amazon.com/images/P/0753820099.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0753820099.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0753820099.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0752848291',
    title: 'A Village Dilemma',
    author: 'Rebecca Shaw',
    year: '2005',
    publisher: 'Orion mass market paperback',
    imageLinkS: 'http://images.amazon.com/images/P/0752848291.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0752848291.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0752848291.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0749924659',
    title: "Celebrity Style Secrets: An Insider's Guide to Looking a - List",
    author: 'Jacqui Ripley',
    year: '2005',
    publisher: 'Piatkus Books',
    imageLinkS: 'http://images.amazon.com/images/P/0749924659.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0749924659.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0749924659.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492080',
    title: 'The Awful Secret : A Crowner John Mystery (Crowner John Mystery)',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492080.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492080.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492080.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492072',
    title: "Crowner'S Quest : A Crowner John Mystery (Crowner John Mystery)",
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492072.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492072.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492072.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492064',
    title: 'The Poisoned Chalice : A Crowner John Mystery (Crowner John Mystery)',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492064.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492064.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492064.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743492056',
    title: 'The Sanctuary Seeker : A Crowner John Mystery',
    author: 'Bernard Knight',
    year: '2005',
    publisher: 'Simon &amp; Schuster UK',
    imageLinkS: 'http://images.amazon.com/images/P/0743492056.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743492056.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743492056.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743490258',
    title: 'Best of Friends',
    author: 'Cathy Kelly',
    year: '2005',
    publisher: 'Downtown Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743490258.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743490258.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743490258.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743484894',
    title: "The Winter's Tale (Folger Shakespeare Library)",
    author: 'William Shakespeare',
    year: '2005',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743484894.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743484894.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743484894.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743474783',
    title: 'One Fine Day the Rabbi Bought a Cross',
    author: 'Harry Kemelman',
    year: '2005',
    publisher: 'I Books',
    imageLinkS: 'http://images.amazon.com/images/P/0743474783.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0743474783.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0743474783.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '074324477X',
    title: 'Rockville Pike : A Novel',
    author: 'Susan Coll',
    year: '2005',
    publisher: 'Simon &amp; Schuster',
    imageLinkS: 'http://images.amazon.com/images/P/074324477X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/074324477X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/074324477X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671878654',
    title: 'An Oblique Approach',
    author: 'Eric Flint',
    year: '2005',
    publisher: 'Baen',
    imageLinkS: 'http://images.amazon.com/images/P/0671878654.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0671878654.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0671878654.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0618441433',
    title: 'Josie and Jack : A Novel',
    author: 'Kelly Braffet',
    year: '2005',
    publisher: 'Mariner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0618441433.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0618441433.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0618441433.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0439448948',
    title: 'Husky In A Hut (Animal Ark)',
    author: 'Ben Baglio',
    year: '2005',
    publisher: 'Scholastic Paperbacks',
    imageLinkS: 'http://images.amazon.com/images/P/0439448948.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0439448948.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0439448948.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385732376',
    title: 'The Illustrated Mum',
    author: 'JACQUELINE WILSON',
    year: '2005',
    publisher: 'Delacorte Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0385732376.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0385732376.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0385732376.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385338082',
    title: 'Can You Keep a Secret?',
    author: 'SOPHIE KINSELLA',
    year: '2005',
    publisher: 'Delta',
    imageLinkS: 'http://images.amazon.com/images/P/0385338082.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0385338082.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0385338082.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375829849',
    title: 'The Golden Goose',
    author: 'Dick King-Smith',
    year: '2005',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375829849.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0375829849.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0375829849.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0374103747',
    title: "In My Brother's Shadow",
    author: 'Uwe Timm',
    year: '2005',
    publisher: 'Farrar, Straus and Giroux',
    imageLinkS: 'http://images.amazon.com/images/P/0374103747.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0374103747.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0374103747.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316156108',
    title: 'The Ha-Ha : A Novel',
    author: 'Dave King',
    year: '2005',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316156108.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0316156108.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0316156108.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0141002999',
    title: 'Thunderball (James Bond 007)',
    author: 'Ian Fleming',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0141002999.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0141002999.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0141002999.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0141002980',
    title: 'Moonraker (James Bond 007)',
    author: 'Ian Fleming',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0141002980.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0141002980.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0141002980.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140860363',
    title: 'On the Road',
    author: 'Jack Kerouac',
    year: '2005',
    publisher: 'Penguin Highbridge',
    imageLinkS: 'http://images.amazon.com/images/P/0140860363.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140860363.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140860363.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140622454',
    title: 'A Woman of No Importance (Penguin Popular Classics)',
    author: 'Oscar Wilde',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140622454.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140622454.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140622454.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140144463',
    title: 'The Cornish Trilogy',
    author: 'Robertson Davies',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140144463.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140144463.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140144463.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140124373',
    title: 'Red Dwarf',
    author: 'Grant Naylor',
    year: '2005',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140124373.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0140124373.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0140124373.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0062731327',
    title: 'HOMEWORK WITHOUT TEARS',
    author: 'Lee Canter',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/0062731327.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0062731327.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0062731327.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006272049X',
    title: 'Thereby Hangs a Tale',
    author: 'Charles E. Funk',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/006272049X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006272049X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006272049X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006272004X',
    title: "The Astrologer's Handbook",
    author: 'Frances Sakoian',
    year: '2005',
    publisher: 'HarperResource',
    imageLinkS: 'http://images.amazon.com/images/P/006272004X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006272004X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006272004X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060738189',
    title: 'Serpico',
    author: 'Peter Maas',
    year: '2005',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060738189.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060738189.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060738189.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060567341',
    title: 'Chinese Cinderella and the Secret Dragon Society',
    author: 'Adeline Yen Mah',
    year: '2005',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/0060567341.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060567341.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060567341.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006055701X',
    title: 'Dancing in Red Shoes Will Kill You',
    author: 'Dorian Cirrone',
    year: '2005',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/006055701X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/006055701X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/006055701X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060541490',
    title: 'Sexy',
    author: 'Joyce Carol Oates',
    year: '2005',
    publisher: 'HarperTempest',
    imageLinkS: 'http://images.amazon.com/images/P/0060541490.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/0060541490.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/0060541490.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9875451495',
    title: 'Los Mitos de La Historia Argentina',
    author: 'Felipe Pigna',
    year: '2004',
    publisher: 'Norma',
    imageLinkS: 'http://images.amazon.com/images/P/9875451495.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9875451495.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9875451495.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9685368503',
    title: 'Veinte Poemas de Amor y una Canción Desesperada',
    author: 'Pablo Neruda',
    year: '2004',
    publisher: 'Editorial y Distribuidora Leo',
    imageLinkS: 'http://images.amazon.com/images/P/9685368503.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9685368503.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9685368503.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9505157592',
    title: 'Mafalda &amp; Friends 1',
    author: 'Quino',
    year: '2004',
    publisher: 'de la Flor',
    imageLinkS: 'http://images.amazon.com/images/P/9505157592.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9505157592.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9505157592.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9504912265',
    title: 'El Enigma de Hess',
    author: 'Martin Allen',
    year: '2004',
    publisher: 'Planeta',
    imageLinkS: 'http://images.amazon.com/images/P/9504912265.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/9504912265.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/9504912265.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8497594304',
    title: 'Donde Estan Los Ninos?',
    author: 'Mary Higgins Clark',
    year: '2004',
    publisher: 'Debols!llo',
    imageLinkS: 'http://images.amazon.com/images/P/8497594304.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8497594304.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8497594304.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8495376466',
    title: 'Directorio de Caligrafia',
    author: 'David Harrison',
    year: '2004',
    publisher: 'Acanto',
    imageLinkS: 'http://images.amazon.com/images/P/8495376466.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8495376466.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8495376466.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8484508935',
    title: 'Yo Puta',
    author: 'Isabel Pisano',
    year: '2004',
    publisher: 'Debols!llo',
    imageLinkS: 'http://images.amazon.com/images/P/8484508935.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8484508935.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8484508935.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8484037134',
    title: 'Rubén Darío (Obras selectas series)',
    author: 'Ruben Dario',
    year: '2004',
    publisher: 'Edimat Libros',
    imageLinkS: 'http://images.amazon.com/images/P/8484037134.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8484037134.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8484037134.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8478888179',
    title: 'El Legado del Rey Tsongor',
    author: 'Laurent Gaude',
    year: '2004',
    publisher: 'Salamandra',
    imageLinkS: 'http://images.amazon.com/images/P/8478888179.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8478888179.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8478888179.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8434442418',
    title: 'Movimientos Juveniles En America Latina: Pachucos, Malandros, Punketas (Ariel Social)',
    author: 'Carles Feixa',
    year: '2004',
    publisher: 'Ariel Editorial',
    imageLinkS: 'http://images.amazon.com/images/P/8434442418.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8434442418.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8434442418.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432296384',
    title: 'El Club Dante',
    author: 'Matthew Pearl',
    year: '2004',
    publisher: 'Editorial Seix Barral',
    imageLinkS: 'http://images.amazon.com/images/P/8432296384.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432296384.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432296384.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432227706',
    title: 'Fuera',
    author: 'Susana Tamaro',
    year: '2004',
    publisher: 'Planeta Pub Corp',
    imageLinkS: 'http://images.amazon.com/images/P/8432227706.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432227706.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432227706.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8432216534',
    title: 'El Reino de Este Mundo',
    author: 'Alejo Carpentier',
    year: '2004',
    publisher: 'Booket',
    imageLinkS: 'http://images.amazon.com/images/P/8432216534.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8432216534.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8432216534.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8423335399',
    title: 'Mrs. Caldwell Habla Con Su Hijo',
    author: 'Camilo Jose Cela',
    year: '2004',
    publisher: 'Destino Ediciones',
    imageLinkS: 'http://images.amazon.com/images/P/8423335399.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8423335399.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8423335399.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8420458546',
    title: 'Manolito Gafatas',
    author: 'Elvira Lindo',
    year: '2004',
    publisher: 'Santillana USA Pub Co Inc',
    imageLinkS: 'http://images.amazon.com/images/P/8420458546.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/8420458546.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/8420458546.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '4889961151',
    title: 'Japanese in Mangaland: Learning the Basics',
    author: 'Marc Bernabe',
    year: '2004',
    publisher: 'Japan Publications Trading Company',
    imageLinkS: 'http://images.amazon.com/images/P/4889961151.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/4889961151.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/4889961151.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '4770029578',
    title: 'In the Miso Soup',
    author: 'Ryu Murakami',
    year: '2004',
    publisher: 'Kodansha International (JPN)',
    imageLinkS: 'http://images.amazon.com/images/P/4770029578.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/4770029578.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/4770029578.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3861878003',
    title: 'Built',
    author: 'Ron Lloyd',
    year: '2004',
    publisher: 'Bruno Gmunder Verlag Gmbh',
    imageLinkS: 'http://images.amazon.com/images/P/3861878003.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3861878003.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3861878003.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3861873850',
    title: "Chi Chi LaRue's LIVE And RAW",
    author: 'Chi Chi Larue',
    year: '2004',
    publisher: 'Bookazine Company',
    imageLinkS: 'http://images.amazon.com/images/P/3861873850.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3861873850.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3861873850.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3473580163',
    title: "Dich krieg' ich auch noch rum.",
    author: 'Pete Johnson',
    year: '2004',
    publisher: 'Ravensburger Buchverlag',
    imageLinkS: 'http://images.amazon.com/images/P/3473580163.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/3473580163.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/3473580163.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '226612157X',
    title: 'Lestat le Vampire / Lestat the Vampire',
    author: 'Anne Rice',
    year: '2004',
    publisher: 'Pocket (FR)',
    imageLinkS: 'http://images.amazon.com/images/P/226612157X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/226612157X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/226612157X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1932270264',
    title: "The Lisa Marie Presley Story: Sex, Drugs and Rock 'n' Roll",
    author: 'Katharine Cumming',
    year: '2004',
    publisher: 'AMI Books',
    imageLinkS: 'http://images.amazon.com/images/P/1932270264.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1932270264.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1932270264.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1931561834',
    title: 'Attraction',
    author: 'James Manlow',
    year: '2004',
    publisher: 'MacAdam/Cage Publishing',
    imageLinkS: 'http://images.amazon.com/images/P/1931561834.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1931561834.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1931561834.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1930285159',
    title: 'Jesus 101: Straightforward Answers to Basic Questions About Christianity',
    author: 'Leigh Scheele',
    year: '2004',
    publisher: 'Master Design',
    imageLinkS: 'http://images.amazon.com/images/P/1930285159.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1930285159.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1930285159.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1929998996',
    title: 'Hopeless Savages',
    author: 'Jen Van Meter',
    year: '2004',
    publisher: 'Oni Press',
    imageLinkS: 'http://images.amazon.com/images/P/1929998996.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1929998996.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1929998996.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1929998880',
    title: 'Scooter Girl',
    author: 'Chynna Clugston-Major',
    year: '2004',
    publisher: 'Oni Press',
    imageLinkS: 'http://images.amazon.com/images/P/1929998880.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1929998880.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1929998880.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '192076920X',
    title: 'Shantaram',
    author: 'Gregory David Roberts',
    year: '2004',
    publisher: 'Scribe',
    imageLinkS: 'http://images.amazon.com/images/P/192076920X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/192076920X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/192076920X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153054',
    title: 'Rats, Bats, Frogs and Bogs of London (Of London Series)',
    author: 'Chris McLaren',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153054.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153054.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153054.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153046',
    title: 'Crypts, Caves and Tunnels of London (Of London Series)',
    author: 'Ian Marchant',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153046.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153046.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153046.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153038',
    title: 'Dungeons, Gallows and Severed Heads of London (Of London Series)',
    author: 'Travis Elborough',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153038.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153038.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153038.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '190415302X',
    title: 'Ghosts, Ghouls and Phantoms of London (Of London Series)',
    author: 'Travis Elborough',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/190415302X.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/190415302X.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/190415302X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153011',
    title: 'The Black Death and Other Putrid Plagues of London (Of London Series)',
    author: 'Natasha Narayan',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153011.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153011.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153011.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1904153003',
    title: 'Grave-Robbers, Cut-Throats and Poisoners of London (Of London Series)',
    author: 'Helen Smith',
    year: '2004',
    publisher: 'Watling Street',
    imageLinkS: 'http://images.amazon.com/images/P/1904153003.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1904153003.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1904153003.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1902636481',
    title: 'Birth And Breastfeeding: Rediscovering The Needs Of Women During Pregnancy And Childbirth',
    author: 'Michel Odent',
    year: '2004',
    publisher: 'Clairview Books',
    imageLinkS: 'http://images.amazon.com/images/P/1902636481.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1902636481.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1902636481.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1894663616',
    title: 'Meet Me in the Parking Lot',
    author: 'Alexandra Leggat',
    year: '2004',
    publisher: 'Insomniac Press',
    imageLinkS: 'http://images.amazon.com/images/P/1894663616.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1894663616.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1894663616.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1894222776',
    title: "You Can't Fall for Your Stepsister (Step-Chain)",
    author: 'Ann Bryant',
    year: '2004',
    publisher: 'Lobster Press',
    imageLinkS: 'http://images.amazon.com/images/P/1894222776.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1894222776.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1894222776.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1893224872',
    title: 'PUPPETMASTER: THE SECRET LIFE OF J. EDGAR HOOVER',
    author: 'Richard Hack',
    year: '2004',
    publisher: 'New Millennium',
    imageLinkS: 'http://images.amazon.com/images/P/1893224872.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1893224872.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1893224872.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1889186511',
    title: 'Letters from Hades',
    author: 'Jeffrey Thomas',
    year: '2004',
    publisher: 'Necro Pubns',
    imageLinkS: 'http://images.amazon.com/images/P/1889186511.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1889186511.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1889186511.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1858818257',
    title: "Horrid Henry's Revenge",
    author: 'Francesca Simon',
    year: '2004',
    publisher: "Orion Children's",
    imageLinkS: 'http://images.amazon.com/images/P/1858818257.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1858818257.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1858818257.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1857989619',
    title: 'Only an Alligator: Book One of the Accomplice Series (Accomplice)',
    author: 'Steve Aylett',
    year: '2004',
    publisher: 'Gollancz',
    imageLinkS: 'http://images.amazon.com/images/P/1857989619.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1857989619.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1857989619.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1853437182',
    title: 'The Caesarean',
    author: 'Michel Odent',
    year: '2004',
    publisher: 'Intl Specialized Book Service Inc',
    imageLinkS: 'http://images.amazon.com/images/P/1853437182.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1853437182.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1853437182.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1852428619',
    title: 'The Pornographer Diaries',
    author: 'Danny King',
    year: '2004',
    publisher: 'Consortium',
    imageLinkS: 'http://images.amazon.com/images/P/1852428619.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1852428619.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1852428619.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1845170423',
    title: 'Cocktail Classics',
    author: 'David Biggs',
    year: '2004',
    publisher: 'Connaught',
    imageLinkS: 'http://images.amazon.com/images/P/1845170423.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1845170423.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1845170423.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1842820575',
    title: 'The Golden Menagerie',
    author: 'Allan Cameron',
    year: '2004',
    publisher: 'Luath Press',
    imageLinkS: 'http://images.amazon.com/images/P/1842820575.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1842820575.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1842820575.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1842552678',
    title: 'The Book of Dead Days (Book of Dead Days S.)',
    author: 'Marcus Sedgwick',
    year: '2004',
    publisher: "Orion Children's",
    imageLinkS: 'http://images.amazon.com/images/P/1842552678.01.THUMBZZZ.jpg',
    imageLinkM: 'http://images.amazon.com/images/P/1842552678.01.MZZZZZZZ.jpg',
    imageLinkL: 'http://images.amazon.com/images/P/1842552678.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0195153448',
    bookTitle: 'Classical Mythology',
    bookAuthor: 'Mark P. O. Morford',
    date: '2002',
    publisher: 'Oxford University Press',
    imageLinkS: 'http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0002005018',
    bookTitle: 'Clara Callan',
    bookAuthor: 'Richard Bruce Wright',
    date: '2001',
    publisher: 'HarperFlamingo Canada',
    imageLinkS: 'http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060973129',
    bookTitle: 'Decision in Normandy',
    bookAuthor: "Carlo D'Este",
    date: '1991',
    publisher: 'HarperPerennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0374157065',
    bookTitle: 'Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It',
    bookAuthor: 'Gina Bari Kolata',
    date: '1999',
    publisher: 'Farrar Straus Giroux',
    imageLinkS: 'http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0393045218',
    bookTitle: 'The Mummies of Urumchi',
    bookAuthor: 'E. J. W. Barber',
    date: '1999',
    publisher: 'W. W. Norton &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0399135782',
    bookTitle: "The Kitchen God's Wife",
    bookAuthor: 'Amy Tan',
    date: '1991',
    publisher: 'Putnam Pub Group',
    imageLinkS: 'http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0425176428',
    bookTitle: "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
    bookAuthor: 'Robert Cowley',
    date: '2000',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671870432',
    bookTitle: 'PLEADING GUILTY',
    bookAuthor: 'Scott Turow',
    date: '1993',
    publisher: 'Audioworks',
    imageLinkS: 'http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679425608',
    bookTitle: 'Under the Black Flag: The Romance and the Reality of Life Among the Pirates',
    bookAuthor: 'David Cordingly',
    date: '1996',
    publisher: 'Random House',
    imageLinkS: 'http://images.amazon.com/images/P/0679425608.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679425608.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '074322678X',
    bookTitle: "Where You'll Find Me: And Other Stories",
    bookAuthor: 'Ann Beattie',
    date: '2002',
    publisher: 'Scribner',
    imageLinkS: 'http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0771074670',
    bookTitle: 'Nights Below Station Street',
    bookAuthor: 'David Adams Richards',
    date: '1988',
    publisher: 'Emblem Editions',
    imageLinkS: 'http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '080652121X',
    bookTitle: "Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
    bookAuthor: 'Adam Lebor',
    date: '2000',
    publisher: 'Citadel Press',
    imageLinkS: 'http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0887841740',
    bookTitle: 'The Middle Stories',
    bookAuthor: 'Sheila Heti',
    date: '2004',
    publisher: 'House of Anansi Press',
    imageLinkS: 'http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1552041778',
    bookTitle: 'Jane Doe',
    bookAuthor: 'R. J. Kaiser',
    date: '1999',
    publisher: 'Mira Books',
    imageLinkS: 'http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1558746218',
    bookTitle: "A Second Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series)",
    bookAuthor: 'Jack Canfield',
    date: '1998',
    publisher: 'Health Communications',
    imageLinkS: 'http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1558746218.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1567407781',
    bookTitle: 'The Witchfinder (Amos Walker Mystery Series)',
    bookAuthor: 'Loren D. Estleman',
    date: '1998',
    publisher: 'Brilliance Audio - Trade',
    imageLinkS: 'http://images.amazon.com/images/P/1567407781.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1567407781.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1567407781.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1575663937',
    bookTitle: 'More Cunning Than Man: A Social History of Rats and Man',
    bookAuthor: 'Robert Hendrickson',
    date: '1999',
    publisher: 'Kensington Publishing Corp.',
    imageLinkS: 'http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1575663937.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1881320189',
    bookTitle: 'Goodbye to the Buttermilk Sky',
    bookAuthor: 'Julia Oliver',
    date: '1994',
    publisher: 'River City Pub',
    imageLinkS: 'http://images.amazon.com/images/P/1881320189.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1881320189.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1881320189.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440234743',
    bookTitle: 'The Testament',
    bookAuthor: 'John Grisham',
    date: '1999',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440234743.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0452264464',
    bookTitle: 'Beloved (Plume Contemporary Fiction)',
    bookAuthor: 'Toni Morrison',
    date: '1994',
    publisher: 'Plume',
    imageLinkS: 'http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0452264464.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0609804618',
    bookTitle: "Our Dumb Century: The Onion Presents 100 Years of Headlines from America's Finest News Source",
    bookAuthor: 'The Onion',
    date: '1999',
    publisher: 'Three Rivers Press',
    imageLinkS: 'http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0609804618.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1841721522',
    bookTitle: 'New Vegetarian: Bold and Beautiful Recipes for Every Occasion',
    bookAuthor: 'Celia Brooks Brown',
    date: '2001',
    publisher: 'Ryland Peters &amp; Small Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/1841721522.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1841721522.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1841721522.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1879384493',
    bookTitle: "If I'd Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can't Afford to Make Them All Yourself",
    bookAuthor: 'J. R. Parrish',
    date: '2003',
    publisher: 'Cypress House',
    imageLinkS: 'http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1879384493.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061076031',
    bookTitle: 'Mary-Kate &amp; Ashley Switching Goals (Mary-Kate and Ashley Starring in)',
    bookAuthor: 'Mary-Kate &amp; Ashley Olsen',
    date: '2000',
    publisher: 'HarperEntertainment',
    imageLinkS: 'http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061076031.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0439095026',
    bookTitle: "Tell Me This Isn't Happening",
    bookAuthor: 'Robynn Clairday',
    date: '1999',
    publisher: 'Scholastic',
    imageLinkS: 'http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0689821166',
    bookTitle: 'Flood : Mississippi 1927',
    bookAuthor: 'Kathleen Duey',
    date: '1998',
    publisher: 'Aladdin',
    imageLinkS: 'http://images.amazon.com/images/P/0689821166.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0689821166.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0689821166.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0971880107',
    bookTitle: 'Wild Animus',
    bookAuthor: 'Rich Shapero',
    date: '2004',
    publisher: 'Too Far',
    imageLinkS: 'http://images.amazon.com/images/P/0971880107.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0971880107.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345402871',
    bookTitle: 'Airframe',
    bookAuthor: 'Michael Crichton',
    date: '1997',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345402871.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345402871.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345402871.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345417623',
    bookTitle: 'Timeline',
    bookAuthor: 'MICHAEL CRICHTON',
    date: '2000',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345417623.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345417623.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345417623.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0684823802',
    bookTitle: 'OUT OF THE SILENT PLANET',
    bookAuthor: 'C.S. Lewis',
    date: '1996',
    publisher: 'Scribner',
    imageLinkS: 'http://images.amazon.com/images/P/0684823802.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0684823802.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0684823802.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375759778',
    bookTitle: 'Prague : A Novel',
    bookAuthor: 'ARTHUR PHILLIPS',
    date: '2003',
    publisher: 'Random House Trade Paperbacks',
    imageLinkS: 'http://images.amazon.com/images/P/0375759778.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375759778.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375759778.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0425163091',
    bookTitle: 'Chocolate Jesus',
    bookAuthor: 'Stephan Jaramillo',
    date: '1998',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/0425163091.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0425163091.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0425163091.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3404921038',
    bookTitle: 'Wie Barney es sieht.',
    bookAuthor: 'Mordecai Richler',
    date: '2002',
    publisher: 'L?¼bbe',
    imageLinkS: 'http://images.amazon.com/images/P/3404921038.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3404921038.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3442353866',
    bookTitle: 'Der Fluch der Kaiserin. Ein Richter- Di- Roman.',
    bookAuthor: 'Eleanor Cooney',
    date: '2001',
    publisher: 'Goldmann',
    imageLinkS: 'http://images.amazon.com/images/P/3442353866.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3442353866.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3442353866.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3442410665',
    bookTitle: 'Sturmzeit. Roman.',
    bookAuthor: 'Charlotte Link',
    date: '1991',
    publisher: 'Goldmann',
    imageLinkS: 'http://images.amazon.com/images/P/3442410665.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3442410665.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3442410665.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3442446937',
    bookTitle: 'Tage der Unschuld.',
    bookAuthor: 'Richard North Patterson',
    date: '2000',
    publisher: 'Goldmann',
    imageLinkS: 'http://images.amazon.com/images/P/3442446937.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3442446937.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3442446937.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375406328',
    bookTitle: 'Lying Awake',
    bookAuthor: 'Mark Salzman',
    date: '2000',
    publisher: 'Alfred A. Knopf',
    imageLinkS: 'http://images.amazon.com/images/P/0375406328.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375406328.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375406328.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446310786',
    bookTitle: 'To Kill a Mockingbird',
    bookAuthor: 'Harper Lee',
    date: '1988',
    publisher: 'Little Brown &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446310786.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0449005615',
    bookTitle: 'Seabiscuit: An American Legend',
    bookAuthor: 'LAURA HILLENBRAND',
    date: '2002',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0449005615.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0449005615.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060168013',
    bookTitle: 'Pigs in Heaven',
    bookAuthor: 'Barbara Kingsolver',
    date: '1993',
    publisher: 'Harpercollins',
    imageLinkS: 'http://images.amazon.com/images/P/0060168013.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060168013.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060168013.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '038078243X',
    bookTitle: "Miss Zukas and the Raven's Dance",
    bookAuthor: 'Jo Dereske',
    date: '1996',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/038078243X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/038078243X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/038078243X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '055321215X',
    bookTitle: 'Pride and Prejudice',
    bookAuthor: 'Jane Austen',
    date: '1983',
    publisher: 'Bantam',
    imageLinkS: 'http://images.amazon.com/images/P/055321215X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/055321215X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/055321215X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '067176537X',
    bookTitle: 'The Therapeutic Touch: How to Use Your Hands to Help or to Heal',
    bookAuthor: 'Dolores Krieger',
    date: '1979',
    publisher: 'Fireside',
    imageLinkS: 'http://images.amazon.com/images/P/067176537X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/067176537X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/067176537X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061099686',
    bookTitle: 'Downtown',
    bookAuthor: 'Anne Rivers Siddons',
    date: '1995',
    publisher: 'HarperTorch',
    imageLinkS: 'http://images.amazon.com/images/P/0061099686.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061099686.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061099686.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553582909',
    bookTitle: 'Icebound',
    bookAuthor: 'Dean R. Koontz',
    date: '2000',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553582909.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553582909.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553582909.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671888587',
    bookTitle: "I'll Be Seeing You",
    bookAuthor: 'Mary Higgins Clark',
    date: '1994',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671888587.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671888587.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671888587.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553582747',
    bookTitle: 'From the Corner of His Eye',
    bookAuthor: 'Dean Koontz',
    date: '2001',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553582747.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0425182908',
    bookTitle: 'Isle of Dogs',
    bookAuthor: 'Patricia Cornwell',
    date: '2002',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/0425182908.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0425182908.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '042518630X',
    bookTitle: 'Purity in Death',
    bookAuthor: 'J.D. Robb',
    date: '2002',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/042518630X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/042518630X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/042518630X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440223571',
    bookTitle: 'This Year It Will Be Different: And Other Stories',
    bookAuthor: 'Maeve Binchy',
    date: '1997',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440223571.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440223571.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0812523873',
    bookTitle: 'Proxies',
    bookAuthor: 'Laura J. Mixon',
    date: '1999',
    publisher: 'Tor Books',
    imageLinkS: 'http://images.amazon.com/images/P/0812523873.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0812523873.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0812523873.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0842342702',
    bookTitle: "Left Behind: A Novel of the Earth's Last Days (Left Behind #1)",
    bookAuthor: 'Tim Lahaye',
    date: '2000',
    publisher: 'Tyndale House Publishers',
    imageLinkS: 'http://images.amazon.com/images/P/0842342702.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0842342702.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0842342702.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440225701',
    bookTitle: 'The Street Lawyer',
    bookAuthor: 'JOHN GRISHAM',
    date: '1999',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440225701.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440225701.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440225701.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060914068',
    bookTitle: 'Love, Medicine and Miracles',
    bookAuthor: 'M.D. Bernie S. Siegel',
    date: '1988',
    publisher: 'HarperCollins Publishers',
    imageLinkS: 'http://images.amazon.com/images/P/0060914068.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060914068.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060914068.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0156047624',
    bookTitle: "All the King's Men",
    bookAuthor: 'Robert Penn Warren',
    date: '1982',
    publisher: 'Harvest Books',
    imageLinkS: 'http://images.amazon.com/images/P/0156047624.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0156047624.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0156047624.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0245542957',
    bookTitle: 'Pacific Northwest',
    bookAuthor: 'Hans Johannes Hoefer',
    date: '1985',
    publisher: 'Chambers Harrap Publishers Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0245542957.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0245542957.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0245542957.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380715899',
    bookTitle: 'A Soldier of the Great War',
    bookAuthor: 'Mark Helprin',
    date: '1992',
    publisher: 'Avon Books',
    imageLinkS: 'http://images.amazon.com/images/P/0380715899.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380715899.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380715899.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553280333',
    bookTitle: 'Getting Well Again',
    bookAuthor: 'O. Carol Simonton Md',
    date: '1992',
    publisher: 'Bantam',
    imageLinkS: 'http://images.amazon.com/images/P/0553280333.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553280333.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553280333.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0961769947',
    bookTitle: 'Northwest Wines and Wineries',
    bookAuthor: 'Chuck Hill',
    date: '1993',
    publisher: 'Speed Graphics',
    imageLinkS: 'http://images.amazon.com/images/P/0961769947.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0961769947.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0961769947.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0964778319',
    bookTitle: 'An Atmosphere of Eternity: Stories of India',
    bookAuthor: 'David Iglehart',
    date: '2002',
    publisher: 'Sunflower Press',
    imageLinkS: 'http://images.amazon.com/images/P/0964778319.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0964778319.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0964778319.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671623249',
    bookTitle: 'LONESOME DOVE',
    bookAuthor: 'Larry McMurtry',
    date: '1986',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671623249.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671623249.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671623249.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679810307',
    bookTitle: 'Shabanu: Daughter of the Wind (Border Trilogy)',
    bookAuthor: 'SUZANNE FISHER STAPLES',
    date: '1991',
    publisher: 'Laurel Leaf',
    imageLinkS: 'http://images.amazon.com/images/P/0679810307.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679810307.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679810307.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679865691',
    bookTitle: 'Haveli (Laurel Leaf Books)',
    bookAuthor: 'SUZANNE FISHER STAPLES',
    date: '1995',
    publisher: 'Laurel Leaf',
    imageLinkS: 'http://images.amazon.com/images/P/0679865691.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679865691.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679865691.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '2070423204',
    bookTitle: 'Lieux dits',
    bookAuthor: 'Michel Tournier',
    date: '2002',
    publisher: 'Gallimard',
    imageLinkS: 'http://images.amazon.com/images/P/2070423204.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/2070423204.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/2070423204.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345260317',
    bookTitle: 'The Dragons of Eden: Speculations on the Evolution of Human Intelligence',
    bookAuthor: 'Carl Sagan',
    date: '1978',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345260317.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345260317.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345260317.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0394743741',
    bookTitle: 'The yawning heights',
    bookAuthor: 'Aleksandr Zinoviev',
    date: '1980',
    publisher: 'Random House',
    imageLinkS: 'http://images.amazon.com/images/P/0394743741.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0394743741.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0394743741.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '042511774X',
    bookTitle: 'Breathing Lessons',
    bookAuthor: 'Anne Tyler',
    date: '1994',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/042511774X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/042511774X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/042511774X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0804106304',
    bookTitle: 'The Joy Luck Club',
    bookAuthor: 'Amy Tan',
    date: '1994',
    publisher: 'Prentice Hall (K-12)',
    imageLinkS: 'http://images.amazon.com/images/P/0804106304.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0804106304.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0804106304.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1853262404',
    bookTitle: 'Heart of Darkness (Wordsworth Collection)',
    bookAuthor: 'Joseph Conrad',
    date: '1998',
    publisher: 'NTC/Contemporary Publishing Company',
    imageLinkS: 'http://images.amazon.com/images/P/1853262404.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1853262404.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1853262404.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312970242',
    bookTitle: 'The Angel Is Near',
    bookAuthor: 'Deepak Chopra',
    date: '2000',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312970242.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312970242.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312970242.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1853260053',
    bookTitle: "Tess of the D'Urbervilles (Wordsworth Classics)",
    bookAuthor: 'Thomas Hardy',
    date: '1997',
    publisher: 'NTC/Contemporary Publishing Company',
    imageLinkS: 'http://images.amazon.com/images/P/1853260053.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1853260053.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1853260053.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1414035004',
    bookTitle: 'The Adventures of Drew and Ellie: The Magical Dress',
    bookAuthor: 'Charles Noland',
    date: '2003',
    publisher: '1stBooks Library',
    imageLinkS: 'http://images.amazon.com/images/P/1414035004.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1414035004.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1414035004.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060938412',
    bookTitle: 'The Accidental Virgin',
    bookAuthor: 'Valerie Frankel',
    date: '2003',
    publisher: 'Avon Trade',
    imageLinkS: 'http://images.amazon.com/images/P/0060938412.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060938412.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060938412.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140067477',
    bookTitle: 'The Tao of Pooh',
    bookAuthor: 'Benjamin Hoff',
    date: '1983',
    publisher: 'Penguin Books',
    imageLinkS: 'http://images.amazon.com/images/P/0140067477.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0140067477.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0140067477.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345465083',
    bookTitle: 'Seabiscuit',
    bookAuthor: 'LAURA HILLENBRAND',
    date: '2003',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345465083.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345465083.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345465083.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451625889',
    bookTitle: 'The Prince',
    bookAuthor: 'Niccolo Machiavelli',
    date: '1952',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451625889.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451625889.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451625889.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1558531025',
    bookTitle: "Life's Little Instruction Book (Life's Little Instruction Books (Paperback))",
    bookAuthor: 'H. Jackson Brown',
    date: '1991',
    publisher: 'Thomas Nelson',
    imageLinkS: 'http://images.amazon.com/images/P/1558531025.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1558531025.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1558531025.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0441783589',
    bookTitle: 'Starship Troopers',
    bookAuthor: 'Robert A. Heinlein',
    date: '1987',
    publisher: 'Ace Books',
    imageLinkS: 'http://images.amazon.com/images/P/0441783589.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0441783589.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0441783589.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0394895894',
    bookTitle: 'The Ruby in the Smoke (Sally Lockhart Trilogy, Book 1)',
    bookAuthor: 'PHILIP PULLMAN',
    date: '1988',
    publisher: 'Laurel Leaf',
    imageLinkS: 'http://images.amazon.com/images/P/0394895894.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0394895894.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0394895894.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1569871213',
    bookTitle: 'Black Beauty (Illustrated Classics)',
    bookAuthor: 'Anna Sewell',
    date: '1995',
    publisher: 'Landoll',
    imageLinkS: 'http://images.amazon.com/images/P/1569871213.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1569871213.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1569871213.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375410538',
    bookTitle: "Anil's Ghost",
    bookAuthor: 'MICHAEL ONDAATJE',
    date: '2000',
    publisher: 'Knopf',
    imageLinkS: 'http://images.amazon.com/images/P/0375410538.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375410538.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375410538.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553802488',
    bookTitle: 'The Face',
    bookAuthor: 'DEAN KOONTZ',
    date: '2003',
    publisher: 'Bantam',
    imageLinkS: 'http://images.amazon.com/images/P/0553802488.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553802488.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553802488.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0966986105',
    bookTitle: 'Prescription for Terror',
    bookAuthor: 'Sandra Levy Ceren',
    date: '1999',
    publisher: 'Andrew Scott Publishers',
    imageLinkS: 'http://images.amazon.com/images/P/0966986105.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0966986105.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0966986105.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '087113375X',
    bookTitle: 'Modern Manners: An Etiquette Book for Rude People',
    bookAuthor: "P.J. O'Rourke",
    date: '1990',
    publisher: 'Atlantic Monthly Press',
    imageLinkS: 'http://images.amazon.com/images/P/087113375X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/087113375X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/087113375X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0340767936',
    bookTitle: 'Turning Thirty',
    bookAuthor: 'Mike Gayle',
    date: '2000',
    publisher: 'Hodder &amp; Stoughton General Division',
    imageLinkS: 'http://images.amazon.com/images/P/0340767936.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0340767936.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0340767936.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743403843',
    bookTitle: 'Decipher',
    bookAuthor: 'Stel Pavlou',
    date: '2002',
    publisher: 'Simon &amp; Schuster (Trade Division)',
    imageLinkS: 'http://images.amazon.com/images/P/0743403843.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0743403843.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0743403843.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060930365',
    bookTitle: 'My First Cousin Once Removed: Money, Madness, and the Family of Robert Lowell',
    bookAuthor: 'Sarah Payne Stuart',
    date: '1999',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060930365.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060930365.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060930365.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060177586',
    bookTitle: 'Standing Firm: A Vice-Presidential Memoir',
    bookAuthor: 'Dan Quayle',
    date: '1994',
    publisher: 'Harpercollins',
    imageLinkS: 'http://images.amazon.com/images/P/0060177586.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060177586.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060177586.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0071416331',
    bookTitle: 'Team Bush : Leadership Lessons from the Bush White House',
    bookAuthor: 'Donald F. Kettl',
    date: '2003',
    publisher: 'McGraw-Hill',
    imageLinkS: 'http://images.amazon.com/images/P/0071416331.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0071416331.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0071416331.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375509038',
    bookTitle: 'The Right Man : The Surprise Presidency of George W. Bush',
    bookAuthor: 'DAVID FRUM',
    date: '2003',
    publisher: 'Random House',
    imageLinkS: 'http://images.amazon.com/images/P/0375509038.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375509038.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375509038.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553062042',
    bookTitle: 'Daybreakers Louis Lamour Collection',
    bookAuthor: 'Louis Lamour',
    date: '1981',
    publisher: 'Bantam Doubleday Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0553062042.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553062042.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553062042.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316769487',
    bookTitle: 'The Catcher in the Rye',
    bookAuthor: 'J.D. Salinger',
    date: '1991',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316769487.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316769487.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316769487.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8445071408',
    bookTitle: 'El Senor De Los Anillos: LA Comunidad Del Anillo (Lord of the Rings (Spanish))',
    bookAuthor: 'J. R. R. Tolkien',
    date: '2001',
    publisher: 'Minotauro',
    imageLinkS: 'http://images.amazon.com/images/P/8445071408.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8445071408.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8445071408.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8445071769',
    bookTitle: 'El Senor De Los Anillos: Las DOS Torres (Lord of the Rings (Paperback))',
    bookAuthor: 'J. R. R. Tolkien',
    date: '2001',
    publisher: 'Minotauro',
    imageLinkS: 'http://images.amazon.com/images/P/8445071769.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8445071769.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8445071769.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8445071777',
    bookTitle: 'El Senor De Los Anillos: El Retorno Del Rey (Tolkien, J. R. R. Lord of the Rings. 3.)',
    bookAuthor: 'J. R. R. Tolkien',
    date: '2001',
    publisher: 'Distribooks',
    imageLinkS: 'http://images.amazon.com/images/P/8445071777.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8445071777.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8445071777.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679429220',
    bookTitle: 'Midnight in the Garden of Good and Evil: A Savannah Story',
    bookAuthor: 'John Berendt',
    date: '1994',
    publisher: 'Random House',
    imageLinkS: 'http://images.amazon.com/images/P/0679429220.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679429220.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679429220.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671867156',
    bookTitle: "Pretend You Don't See Her",
    bookAuthor: 'Mary Higgins Clark',
    date: '1998',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671867156.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671867156.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671867156.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312252617',
    bookTitle: 'Fast Women',
    bookAuthor: 'Jennifer Crusie',
    date: '2001',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312252617.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312252617.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312252617.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312261594',
    bookTitle: 'Female Intelligence',
    bookAuthor: 'Jane Heller',
    date: '2001',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312261594.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312261594.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312261594.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316748641',
    bookTitle: "Pasquale's Nose: Idle Days in an Italian Town",
    bookAuthor: 'Michael Rips',
    date: '2002',
    publisher: 'Back Bay Books',
    imageLinkS: 'http://images.amazon.com/images/P/0316748641.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316748641.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316748641.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316973742',
    bookTitle: 'The Gospel of Judas: A Novel',
    bookAuthor: 'Simon Mawer',
    date: '2002',
    publisher: 'Back Bay Books',
    imageLinkS: 'http://images.amazon.com/images/P/0316973742.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316973742.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316973742.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385235941',
    bookTitle: "Prize Stories, 1987: The O'Henry Awards",
    bookAuthor: 'William Abrahams',
    date: '1987',
    publisher: 'Doubleday Books',
    imageLinkS: 'http://images.amazon.com/images/P/0385235941.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385235941.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385235941.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446677450',
    bookTitle: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    bookAuthor: 'Robert T. Kiyosaki',
    date: '2000',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446677450.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446677450.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446677450.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451166892',
    bookTitle: 'The Pillars of the Earth',
    bookAuthor: 'Ken Follett',
    date: '1996',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451166892.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451166892.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451166892.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553347594',
    bookTitle: "McDonald's: Behind the Arches",
    bookAuthor: 'John F. Love',
    date: '1995',
    publisher: 'Bantam',
    imageLinkS: 'http://images.amazon.com/images/P/0553347594.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553347594.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553347594.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671621009',
    bookTitle: "Creating Wealth : Retire in Ten Years Using Allen's Seven Principles of Wealth!",
    bookAuthor: 'Robert G. Allen',
    date: '1986',
    publisher: 'Fireside',
    imageLinkS: 'http://images.amazon.com/images/P/0671621009.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671621009.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671621009.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '067976397X',
    bookTitle: "Corelli's Mandolin : A Novel",
    bookAuthor: 'LOUIS DE BERNIERES',
    date: '1995',
    publisher: 'Vintage',
    imageLinkS: 'http://images.amazon.com/images/P/067976397X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/067976397X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/067976397X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0684822733',
    bookTitle: 'Love, Miracles, and Animal Healing : A heartwarming look at the spiritual bond between animals and humans',
    bookAuthor: 'Pam Proctor',
    date: '1996',
    publisher: 'Fireside',
    imageLinkS: 'http://images.amazon.com/images/P/0684822733.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0684822733.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0684822733.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0786868716',
    bookTitle: 'The Five People You Meet in Heaven',
    bookAuthor: 'Mitch Albom',
    date: '2003',
    publisher: 'Hyperion',
    imageLinkS: 'http://images.amazon.com/images/P/0786868716.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0786868716.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0786868716.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8472238822',
    bookTitle: 'Tu Nombre Escrito En El Agua (La Sonrisa Vertical)',
    bookAuthor: 'Irene Gonzalez Frei',
    date: '2002',
    publisher: 'Tusquets',
    imageLinkS: 'http://images.amazon.com/images/P/8472238822.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8472238822.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8472238822.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671864769',
    bookTitle: 'Relics (Star Trek: The Next Generation)',
    bookAuthor: 'Michael Jan Friedman',
    date: '1992',
    publisher: 'Star Trek',
    imageLinkS: 'http://images.amazon.com/images/P/0671864769.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671864769.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671864769.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671521519',
    bookTitle: 'Bless The Beasts And Children : Bless The Beasts And Children',
    bookAuthor: 'Glendon Swarthout',
    date: '1995',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671521519.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671521519.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671521519.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440222303',
    bookTitle: 'The Touch of Your Shadow, the Whisper of Your Name (Babylon 5, Book 5)',
    bookAuthor: 'Neal Barrett Jr.',
    date: '1996',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440222303.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440222303.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440222303.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312953453',
    bookTitle: 'Blood Oath',
    bookAuthor: 'David Morrell',
    date: '1994',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312953453.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312953453.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312953453.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446608653',
    bookTitle: 'The Alibi',
    bookAuthor: 'Sandra Brown',
    date: '2000',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446608653.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446608653.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446608653.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446612545',
    bookTitle: 'The Beach House',
    bookAuthor: 'James Patterson',
    date: '2003',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446612545.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446612545.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446612545.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446612618',
    bookTitle: 'A Kiss Remembered',
    bookAuthor: 'Sandra Brown',
    date: '2003',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446612618.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446612618.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446612618.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451208080',
    bookTitle: 'The Short Forever',
    bookAuthor: 'Stuart Woods',
    date: '2003',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451208080.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451208080.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451208080.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553584383',
    bookTitle: 'Dead Aim',
    bookAuthor: 'IRIS JOHANSEN',
    date: '2004',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553584383.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553584383.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553584383.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671027360',
    bookTitle: 'Angels &amp; Demons',
    bookAuthor: 'Dan Brown',
    date: '2001',
    publisher: 'Pocket Star',
    imageLinkS: 'http://images.amazon.com/images/P/0671027360.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671027360.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671027360.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0812575954',
    bookTitle: 'The Deal',
    bookAuthor: 'Joe Hutsko',
    date: '2000',
    publisher: 'Tor Books (Mm)',
    imageLinkS: 'http://images.amazon.com/images/P/0812575954.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0812575954.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0812575954.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316735736',
    bookTitle: 'All He Ever Wanted: A Novel',
    bookAuthor: 'Anita Shreve',
    date: '2004',
    publisher: 'Back Bay Books',
    imageLinkS: 'http://images.amazon.com/images/P/0316735736.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316735736.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316735736.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743439740',
    bookTitle: 'Every Breath You Take : A True Story of Obsession, Revenge, and Murder',
    bookAuthor: 'Ann Rule',
    date: '2002',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0743439740.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0743439740.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0743439740.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345372700',
    bookTitle: "If I Ever Get Back to Georgia, I'm Gonna Nail My Feet to the Ground",
    bookAuthor: 'LEWIS GRIZZARD',
    date: '1991',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345372700.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345372700.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345372700.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380619458',
    bookTitle: 'The Mosquito Coast',
    bookAuthor: 'Paul Theroux',
    date: '1990',
    publisher: 'Harper Mass Market Paperbacks (Mm)',
    imageLinkS: 'http://images.amazon.com/images/P/0380619458.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380619458.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380619458.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446325805',
    bookTitle: "If Love Were Oil, I'd Be About a Quart Low",
    bookAuthor: 'Lewis Grizzard',
    date: '1994',
    publisher: 'Warner Books (Mm)',
    imageLinkS: 'http://images.amazon.com/images/P/0446325805.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446325805.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446325805.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451406923',
    bookTitle: 'Goodbye, My Little Ones: The True Story of a Murderous Mother and Five Innocent Victims',
    bookAuthor: 'Charles Hickey',
    date: '1996',
    publisher: 'Onyx Books',
    imageLinkS: 'http://images.amazon.com/images/P/0451406923.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451406923.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451406923.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671042858',
    bookTitle: 'The Girl Who Loved Tom Gordon',
    bookAuthor: 'Stephen King',
    date: '2000',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671042858.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671042858.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671042858.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743249992',
    bookTitle: 'Bringing Down the House: The Inside Story of Six M.I.T. Students Who Took Vegas for Millions',
    bookAuthor: 'Ben Mezrich',
    date: '2003',
    publisher: 'Free Press',
    imageLinkS: 'http://images.amazon.com/images/P/0743249992.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0743249992.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0743249992.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0840734530',
    bookTitle: 'The Oneprince (The Redaemian Chronicles, Book 1)',
    bookAuthor: 'Bill Hand',
    date: '1992',
    publisher: 'Thomas Nelson Inc',
    imageLinkS: 'http://images.amazon.com/images/P/0840734530.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0840734530.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0840734530.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0425184226',
    bookTitle: 'The Sum of All Fears',
    bookAuthor: 'Tom Clancy',
    date: '2002',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/0425184226.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0425184226.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0425184226.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375500766',
    bookTitle: 'Care Packages : Letters to Christopher Reeve from Strangers and Other Friends',
    bookAuthor: 'DANA REEVE',
    date: '1999',
    publisher: 'Random House',
    imageLinkS: 'http://images.amazon.com/images/P/0375500766.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375500766.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375500766.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '9724119378',
    bookTitle: 'O Deus Das Pequenas Coisas',
    bookAuthor: 'Roy',
    date: '1998',
    publisher: 'Edicoes Asa',
    imageLinkS: 'http://images.amazon.com/images/P/9724119378.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/9724119378.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/9724119378.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451205197',
    bookTitle: 'Lady in Green/Minor Indiscretions (Signet Regency Romance)',
    bookAuthor: 'Barbara Metzger',
    date: '2002',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451205197.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451205197.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451205197.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060929790',
    bookTitle: 'One Hundred Years of Solitude',
    bookAuthor: 'Gabriel Garcia Marquez',
    date: '1998',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060929790.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060929790.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060929790.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060976845',
    bookTitle: 'Little Altars Everywhere: A Novel',
    bookAuthor: 'Rebecca Wells',
    date: '1996',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060976845.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060976845.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060976845.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061099325',
    bookTitle: 'Coyote Waits (Joe Leaphorn/Jim Chee Novels)',
    bookAuthor: 'Tony Hillerman',
    date: '1992',
    publisher: 'HarperTorch',
    imageLinkS: 'http://images.amazon.com/images/P/0061099325.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061099325.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061099325.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671004573',
    bookTitle: 'Before I Say Good-Bye',
    bookAuthor: 'Mary Higgins Clark',
    date: '2001',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671004573.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671004573.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671004573.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446601640',
    bookTitle: 'Slow Waltz in Cedar Bend',
    bookAuthor: 'Robert James Waller',
    date: '1994',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446601640.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446601640.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446601640.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0330484516',
    bookTitle: 'Twenty Minute Retreats: Revive Your Spirits in Just Minutes a Day (A Pan Self-discovery Title)',
    bookAuthor: 'Rachel Harris',
    date: '2001',
    publisher: 'Pan Macmillan',
    imageLinkS: 'http://images.amazon.com/images/P/0330484516.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0330484516.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0330484516.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '038572179X',
    bookTitle: 'Atonement : A Novel',
    bookAuthor: 'IAN MCEWAN',
    date: '2003',
    publisher: 'Anchor',
    imageLinkS: 'http://images.amazon.com/images/P/038572179X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/038572179X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/038572179X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0393020371',
    bookTitle: 'Next: The Future Just Happened',
    bookAuthor: 'Michael Lewis',
    date: '2001',
    publisher: 'W.W. Norton &amp; Company',
    imageLinkS: 'http://images.amazon.com/images/P/0393020371.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0393020371.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0393020371.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1900850303',
    bookTitle: 'The Angelic Darkness',
    bookAuthor: 'Richard Zimler',
    date: '1999',
    publisher: 'Arcadia Books',
    imageLinkS: 'http://images.amazon.com/images/P/1900850303.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1900850303.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1900850303.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1903019699',
    bookTitle: 'The Soulbane Stratagem',
    bookAuthor: 'Norman Jetmundsen',
    date: '2000',
    publisher: 'John Hunt Publishing, Ltd.',
    imageLinkS: 'http://images.amazon.com/images/P/1903019699.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1903019699.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1903019699.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345425294',
    bookTitle: 'Gangster',
    bookAuthor: 'Lorenzo Carcaterra',
    date: '2002',
    publisher: 'Fawcett Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345425294.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345425294.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345425294.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451410319',
    bookTitle: 'Hush',
    bookAuthor: 'Anne Frasier',
    date: '2002',
    publisher: 'Onyx Books',
    imageLinkS: 'http://images.amazon.com/images/P/0451410319.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451410319.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451410319.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553583468',
    bookTitle: 'Whisper of Evil (Hooper, Kay. Evil Trilogy.)',
    bookAuthor: 'Kay Hooper',
    date: '2002',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553583468.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553583468.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553583468.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8420639133',
    bookTitle: 'Temor y Temblor',
    bookAuthor: 'Soren Kierkegaard',
    date: '2001',
    publisher: 'Alianza',
    imageLinkS: 'http://images.amazon.com/images/P/8420639133.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8420639133.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8420639133.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '8476409419',
    bookTitle: 'Estudios sobre el amor',
    bookAuthor: 'Jose Ortega Y Gaset',
    date: '2001',
    publisher: 'Downtown Book Center',
    imageLinkS: 'http://images.amazon.com/images/P/8476409419.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/8476409419.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/8476409419.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380778556',
    bookTitle: 'Rebecca',
    bookAuthor: 'Daphne Du Maurier',
    date: '1994',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/0380778556.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380778556.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380778556.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451525221',
    bookTitle: 'Scarlet Letter',
    bookAuthor: 'Nathaniel Hawthorne',
    date: '1993',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451525221.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451525221.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451525221.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0002740230',
    bookTitle: 'Keep It Simple: And Get More Out of Life',
    bookAuthor: 'Nick Page',
    date: '1999',
    publisher: 'Trafalgar Square',
    imageLinkS: 'http://images.amazon.com/images/P/0002740230.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0002740230.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0002740230.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385336772',
    bookTitle: 'Diary of a Mad Mom-To-Be',
    bookAuthor: 'Laura Wolf',
    date: '2003',
    publisher: 'Delta',
    imageLinkS: 'http://images.amazon.com/images/P/0385336772.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385336772.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385336772.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440949424',
    bookTitle: 'Locked in Time (Laurel Leaf Books)',
    bookAuthor: 'LOIS DUNCAN',
    date: '1986',
    publisher: 'Laure Leaf',
    imageLinkS: 'http://images.amazon.com/images/P/0440949424.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440949424.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440949424.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0505524996',
    bookTitle: 'Contact',
    bookAuthor: 'Susan Grant',
    date: '2002',
    publisher: 'Love Spell',
    imageLinkS: 'http://images.amazon.com/images/P/0505524996.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0505524996.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0505524996.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140252800',
    bookTitle: 'The Brimstone Wedding',
    bookAuthor: 'Barbara Vine',
    date: '1997',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140252800.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0140252800.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0140252800.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451452755',
    bookTitle: 'The Catswold Portal',
    bookAuthor: 'Shirley Rousseau Murphy',
    date: '1993',
    publisher: 'Roc',
    imageLinkS: 'http://images.amazon.com/images/P/0451452755.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451452755.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451452755.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0812575482',
    bookTitle: "Through Wolf's Eyes (Wolf)",
    bookAuthor: 'Jane Lindskold',
    date: '2002',
    publisher: 'Tor Fantasy',
    imageLinkS: 'http://images.amazon.com/images/P/0812575482.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0812575482.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0812575482.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '044651747X',
    bookTitle: 'Puerto Vallarta Squeeze',
    bookAuthor: 'Robert James Waller',
    date: '1995',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/044651747X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/044651747X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/044651747X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060801263',
    bookTitle: 'Tree Grows In Brooklyn',
    bookAuthor: 'Betty Smith',
    date: '1988',
    publisher: 'Harpercollins Publisher',
    imageLinkS: 'http://images.amazon.com/images/P/0060801263.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060801263.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060801263.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061030147',
    bookTitle: 'Cybill Disobedience: How I Survived Beauty Pageants, Elvis, Sex, Bruce Willis, Lies, Marriage, Motherhood, Hollywood, and the Irrepressible Urge to Say What I Think',
    bookAuthor: 'Cybill Shepherd',
    date: '2001',
    publisher: 'Avon Books',
    imageLinkS: 'http://images.amazon.com/images/P/0061030147.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061030147.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061030147.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140250964',
    bookTitle: 'Snow Angels',
    bookAuthor: "Stewart O'Nan",
    date: '1995',
    publisher: 'Penguin Books',
    imageLinkS: 'http://images.amazon.com/images/P/0140250964.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0140250964.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0140250964.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446527165',
    bookTitle: 'Wish You Well',
    bookAuthor: 'David Baldacci',
    date: '2000',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446527165.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446527165.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446527165.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671461494',
    bookTitle: "The Hitchhiker's Guide to the Galaxy",
    bookAuthor: 'Douglas Adams',
    date: '1982',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671461494.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671461494.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671461494.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385337639',
    bookTitle: 'Crow Lake (Today Show Book Club #7)',
    bookAuthor: 'Mary Lawson',
    date: '2003',
    publisher: 'Delta',
    imageLinkS: 'http://images.amazon.com/images/P/0385337639.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385337639.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385337639.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '039575514X',
    bookTitle: 'My Antonia',
    bookAuthor: 'Willa Cather',
    date: '1995',
    publisher: 'Mariner Books',
    imageLinkS: 'http://images.amazon.com/images/P/039575514X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/039575514X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/039575514X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451206673',
    bookTitle: 'Pen Pals',
    bookAuthor: 'Olivia Goldsmith',
    date: '2002',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451206673.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451206673.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451206673.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0330332775',
    bookTitle: "Bridget Jones's Diary",
    bookAuthor: 'Helen Fielding',
    date: '1997',
    publisher: 'Picador (UK)',
    imageLinkS: 'http://images.amazon.com/images/P/0330332775.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0330332775.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0330332775.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0486284735',
    bookTitle: 'Pride and Prejudice (Dover Thrift Editions)',
    bookAuthor: 'Jane Austen',
    date: '1995',
    publisher: 'Dover Publications',
    imageLinkS: 'http://images.amazon.com/images/P/0486284735.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0486284735.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0486284735.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671021745',
    bookTitle: 'EYE ON CRIME: HARDY BOYS #153',
    bookAuthor: 'Franklin W. Dixon',
    date: '1998',
    publisher: 'Aladdin',
    imageLinkS: 'http://images.amazon.com/images/P/0671021745.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671021745.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671021745.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671047612',
    bookTitle: 'Skin And Bones',
    bookAuthor: 'Franklin W. Dixon',
    date: '2000',
    publisher: 'Aladdin',
    imageLinkS: 'http://images.amazon.com/images/P/0671047612.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671047612.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671047612.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671504282',
    bookTitle: 'LAW OF THE JUNGLE (HARDY BOYS CASE FILE 105) : LAW OF THE JUNGLE (Hardy Boys, The)',
    bookAuthor: 'Franklin W. Dixon',
    date: '1995',
    publisher: 'Simon Pulse',
    imageLinkS: 'http://images.amazon.com/images/P/0671504282.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671504282.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671504282.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0399138684',
    bookTitle: 'The Cat Who Came to Breakfast (Cat Who... (Hardcover))',
    bookAuthor: 'Lilian Jackson Braun',
    date: '1994',
    publisher: 'Putnam Pub Group',
    imageLinkS: 'http://images.amazon.com/images/P/0399138684.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0399138684.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0399138684.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0785263292',
    bookTitle: "If Singleness Is a Gift, What's the Return Policy?",
    bookAuthor: 'Holly Virden',
    date: '2003',
    publisher: 'Nelson Books',
    imageLinkS: 'http://images.amazon.com/images/P/0785263292.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0785263292.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0785263292.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0830714014',
    bookTitle: "Always Daddy's Girl: Understanding Your Father's Impact on Who You Are",
    bookAuthor: 'H. Norman Wright',
    date: '1989',
    publisher: 'Regal Books',
    imageLinkS: 'http://images.amazon.com/images/P/0830714014.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0830714014.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0830714014.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345354931',
    bookTitle: 'Night Mare (Xanth Novels (Paperback))',
    bookAuthor: 'Piers Anthony',
    date: '1990',
    publisher: 'Del Rey Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345354931.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345354931.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345354931.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553278223',
    bookTitle: 'The Martian Chronicles',
    bookAuthor: 'RAY BRADBURY',
    date: '1984',
    publisher: 'Spectra',
    imageLinkS: 'http://images.amazon.com/images/P/0553278223.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553278223.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553278223.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3150000335',
    bookTitle: 'Kabale Und Liebe',
    bookAuthor: 'Schiller',
    date: '0',
    publisher: 'Philipp Reclam, Jun Verlag GmbH',
    imageLinkS: 'http://images.amazon.com/images/P/3150000335.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3150000335.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3150000335.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257203659',
    bookTitle: 'Der illustrierte Mann. Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '2002',
    publisher: 'Diogenes',
    imageLinkS: 'http://images.amazon.com/images/P/3257203659.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257203659.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257203659.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257207522',
    bookTitle: 'Der K?¶nig in Gelb.',
    bookAuthor: 'Raymond Chandler',
    date: '1980',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257207522.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257207522.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257207522.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257208626',
    bookTitle: 'Fahrenheit 451',
    bookAuthor: 'Ray Bradbury',
    date: '1994',
    publisher: 'Distribooks Inc',
    imageLinkS: 'http://images.amazon.com/images/P/3257208626.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257208626.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257208626.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257208634',
    bookTitle: 'Die Mars- Chroniken. Roman in Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '1981',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257208634.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257208634.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257208634.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257208669',
    bookTitle: 'Das B?¶se kommt auf leisen Sohlen.',
    bookAuthor: 'Ray Bradbury',
    date: '2003',
    publisher: 'Diogenes',
    imageLinkS: 'http://images.amazon.com/images/P/3257208669.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257208669.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257208669.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257210450',
    bookTitle: 'L?¶wenzahnwein. Roman.',
    bookAuthor: 'Ray Bradbury',
    date: '1999',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257210450.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257210450.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257210450.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257212054',
    bookTitle: 'Das Kind von morgen. Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '2000',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257212054.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257212054.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257212054.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257212429',
    bookTitle: 'Die Mechanismen der Freude. Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '2000',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257212429.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257212429.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257212429.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257214154',
    bookTitle: 'Familientreffen. Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '2000',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257214154.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257214154.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257214154.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257216416',
    bookTitle: 'Der Tod kommt schnell in Mexico. Erz?¤hlungen.',
    bookAuthor: 'Ray Bradbury',
    date: '1988',
    publisher: 'Diogenes Verlag',
    imageLinkS: 'http://images.amazon.com/images/P/3257216416.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257216416.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257216416.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3257233051',
    bookTitle: 'Veronika Deschliesst Zu Sterben / Vernika Decides to Die',
    bookAuthor: 'Paolo Coelho',
    date: '2002',
    publisher: 'Distribooks',
    imageLinkS: 'http://images.amazon.com/images/P/3257233051.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3257233051.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3257233051.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '342311360X',
    bookTitle: 'Die Liebe in Den Zelten',
    bookAuthor: 'Gabriel Garcia Marquez',
    date: '0',
    publisher: 'Deutscher Taschenbuch Verlag (DTV)',
    imageLinkS: 'http://images.amazon.com/images/P/342311360X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/342311360X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/342311360X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3423116714',
    bookTitle: 'Die Klone der Joanna May. Roman.',
    bookAuthor: 'Fay Weldon',
    date: '1993',
    publisher: 'Dtv',
    imageLinkS: 'http://images.amazon.com/images/P/3423116714.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3423116714.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3423116714.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3423241489',
    bookTitle: 'Ist mein Hintern wirklich so dick? Tagebuch einer empfindsamen Frau.',
    bookAuthor: 'Arabella Weir',
    date: '1998',
    publisher: 'Dtv',
    imageLinkS: 'http://images.amazon.com/images/P/3423241489.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3423241489.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3423241489.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3426605686',
    bookTitle: 'Haifischfrauen.',
    bookAuthor: 'Kiana Davenport',
    date: '1996',
    publisher: 'Droemersche Verlagsanstalt Th. Knaur Nachf., GmbH &amp; Co.',
    imageLinkS: 'http://images.amazon.com/images/P/3426605686.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3426605686.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3426605686.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3453212150',
    bookTitle: 'Die Cappuccino- Jahre. Aus dem Tagebuch des Adrian Mole.',
    bookAuthor: 'Sue Townsend',
    date: '2002',
    publisher: 'Heyne',
    imageLinkS: 'http://images.amazon.com/images/P/3453212150.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3453212150.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3453212150.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3462021095',
    bookTitle: 'Schwarzer Tee mit drei Stück Zucker',
    bookAuthor: 'Renan Demirkan',
    date: '1991',
    publisher: 'Kiepenheuer &amp; Witsch',
    imageLinkS: 'http://images.amazon.com/images/P/3462021095.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3462021095.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3462021095.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3492045642',
    bookTitle: 'Quersch?¼sse - Downsize This!',
    bookAuthor: 'Michael Moore',
    date: '2003',
    publisher: 'Piper',
    imageLinkS: 'http://images.amazon.com/images/P/3492045642.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3492045642.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3492045642.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3498020862',
    bookTitle: 'Die Korrekturen.',
    bookAuthor: 'Jonathan Franzen',
    date: '2002',
    publisher: 'Rowohlt, Reinbek',
    imageLinkS: 'http://images.amazon.com/images/P/3498020862.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3498020862.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3498020862.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3499110695',
    bookTitle: 'Neun Erz?¤hlungen.',
    bookAuthor: 'Jerome D. Salinger',
    date: '1968',
    publisher: 'Rowohlt Tb.',
    imageLinkS: 'http://images.amazon.com/images/P/3499110695.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3499110695.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3499110695.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3499151502',
    bookTitle: 'Hebt den Dachbalken hoch, Zimmerleute / Seymour wird vorgestellt.',
    bookAuthor: 'Jerome D. Salinger',
    date: '1998',
    publisher: 'Rowohlt Tb.',
    imageLinkS: 'http://images.amazon.com/images/P/3499151502.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3499151502.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3499151502.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3518111000',
    bookTitle: 'Ulysses (??bersetzg. Wollschl?¤ger). ( Neue Folge, 100).',
    bookAuthor: 'James Joyce',
    date: '1981',
    publisher: 'Suhrkamp',
    imageLinkS: 'http://images.amazon.com/images/P/3518111000.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3518111000.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3518111000.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3548254268',
    bookTitle: 'Eine ganz normale Aff?¤re.',
    bookAuthor: 'Joanna Trollope',
    date: '2002',
    publisher: 'Ullstein Tb',
    imageLinkS: 'http://images.amazon.com/images/P/3548254268.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3548254268.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3548254268.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3570300099',
    bookTitle: 'Das Intimleben des Adrian Mole, 13 3/4 Jahre. cbt. ( Ab 14 J.).',
    bookAuthor: 'Sue Townsend',
    date: '2002',
    publisher: 'Bertelsmann, M?¼nchen',
    imageLinkS: 'http://images.amazon.com/images/P/3570300099.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3570300099.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3570300099.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '3596292646',
    bookTitle: 'Das Buch der l?¤cherlichen Liebe.',
    bookAuthor: 'Milan Kundera',
    date: '2000',
    publisher: 'Fischer (Tb.), Frankfurt',
    imageLinkS: 'http://images.amazon.com/images/P/3596292646.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/3596292646.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/3596292646.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060977493',
    bookTitle: 'The God of Small Things',
    bookAuthor: 'Arundhati Roy',
    date: '1998',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060977493.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060977493.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060977493.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312872682',
    bookTitle: 'The James Dean Affair: A Neil Gulliver &amp; Stevie Marriner Novel',
    bookAuthor: 'Robert S. Levinson',
    date: '2000',
    publisher: 'St Martins Pr',
    imageLinkS: 'http://images.amazon.com/images/P/0312872682.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312872682.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312872682.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316602906',
    bookTitle: 'The Big Bad Wolf: A Novel',
    bookAuthor: 'James Patterson',
    date: '2003',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316602906.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316602906.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316602906.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316693006',
    bookTitle: 'Four Blind Mice',
    bookAuthor: 'James Patterson',
    date: '2002',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316693006.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316693006.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316693006.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345311396',
    bookTitle: 'Private Screening',
    bookAuthor: 'Richard North Patterson',
    date: '1994',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345311396.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345311396.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345311396.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345378490',
    bookTitle: 'Congo',
    bookAuthor: 'Michael Crichton',
    date: '1995',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345378490.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345378490.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345378490.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345404793',
    bookTitle: 'Protect and Defend',
    bookAuthor: 'Richard North Patterson',
    date: '2001',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345404793.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345404793.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345404793.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345433173',
    bookTitle: 'The Tall Pine Polka',
    bookAuthor: 'Lorna Landvik',
    date: '1999',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345433173.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345433173.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345433173.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375400117',
    bookTitle: 'Memoirs of a Geisha',
    bookAuthor: 'Arthur Golden',
    date: '1997',
    publisher: 'Alfred A. Knopf',
    imageLinkS: 'http://images.amazon.com/images/P/0375400117.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375400117.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375400117.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375705856',
    bookTitle: 'Plainsong (Vintage Contemporaries)',
    bookAuthor: 'KENT HARUF',
    date: '2000',
    publisher: 'Vintage',
    imageLinkS: 'http://images.amazon.com/images/P/0375705856.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375705856.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375705856.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380717018',
    bookTitle: 'Body of Evidence (Kay Scarpetta Mysteries (Paperback))',
    bookAuthor: 'Patricia D. Cornwell',
    date: '1992',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/0380717018.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380717018.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380717018.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380718332',
    bookTitle: 'All That Remains (Kay Scarpetta Mysteries (Paperback))',
    bookAuthor: 'Patricia D. Cornwell',
    date: '1993',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/0380718332.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380718332.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380718332.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380754509',
    bookTitle: 'The Case of the Lost Look-Alike (An Avon Camelot Book)',
    bookAuthor: 'Carol J. Farley',
    date: '1988',
    publisher: 'Avon Books',
    imageLinkS: 'http://images.amazon.com/images/P/0380754509.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380754509.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380754509.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '038076654X',
    bookTitle: 'Petals on the River',
    bookAuthor: 'Kathleen E. Woodiwiss',
    date: '1997',
    publisher: 'Avon Trade',
    imageLinkS: 'http://images.amazon.com/images/P/038076654X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/038076654X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/038076654X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380807866',
    bookTitle: 'The Elusive Flame',
    bookAuthor: 'Kathleen E. Woodiwiss',
    date: '1999',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/0380807866.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380807866.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380807866.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385316895',
    bookTitle: 'Legacy of Silence',
    bookAuthor: 'Belva Plain',
    date: '1998',
    publisher: 'Bantam Dell Pub Group',
    imageLinkS: 'http://images.amazon.com/images/P/0385316895.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385316895.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385316895.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385497466',
    bookTitle: 'The Brethren',
    bookAuthor: 'JOHN GRISHAM',
    date: '2000',
    publisher: 'Doubleday',
    imageLinkS: 'http://images.amazon.com/images/P/0385497466.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385497466.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385497466.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385508042',
    bookTitle: 'The King of Torts',
    bookAuthor: 'John Grisham',
    date: '2003',
    publisher: 'Doubleday Books',
    imageLinkS: 'http://images.amazon.com/images/P/0385508042.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385508042.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385508042.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385509456',
    bookTitle: 'The Curious Incident of the Dog in the Night-Time : A Novel',
    bookAuthor: 'MARK HADDON',
    date: '2003',
    publisher: 'Doubleday',
    imageLinkS: 'http://images.amazon.com/images/P/0385509456.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385509456.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385509456.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385511612',
    bookTitle: 'Bleachers',
    bookAuthor: 'John Grisham',
    date: '2003',
    publisher: 'Doubleday',
    imageLinkS: 'http://images.amazon.com/images/P/0385511612.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385511612.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385511612.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385730586',
    bookTitle: 'Sisterhood of the Traveling Pants',
    bookAuthor: 'ANN BRASHARES',
    date: '2003',
    publisher: 'Delacorte Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0385730586.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385730586.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385730586.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0425164403',
    bookTitle: 'Only Love (Magical Love)',
    bookAuthor: 'Erich Segal',
    date: '1998',
    publisher: 'Berkley Publishing Group',
    imageLinkS: 'http://images.amazon.com/images/P/0425164403.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0425164403.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0425164403.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440234964',
    bookTitle: 'All or Nothing (Wheeler Large Print Books)',
    bookAuthor: 'Elizabeth Adler',
    date: '2000',
    publisher: 'Island',
    imageLinkS: 'http://images.amazon.com/images/P/0440234964.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440234964.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440234964.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446605484',
    bookTitle: 'Roses Are Red (Alex Cross Novels)',
    bookAuthor: 'James Patterson',
    date: '2001',
    publisher: 'Warner Vision',
    imageLinkS: 'http://images.amazon.com/images/P/0446605484.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446605484.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446605484.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0446610399',
    bookTitle: 'The Rescue',
    bookAuthor: 'Nicholas Sparks',
    date: '2001',
    publisher: 'Warner Books',
    imageLinkS: 'http://images.amazon.com/images/P/0446610399.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0446610399.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0446610399.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0449006522',
    bookTitle: 'Manhattan Hunt Club',
    bookAuthor: 'JOHN SAUL',
    date: '2002',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0449006522.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0449006522.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0449006522.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0449911004',
    bookTitle: "Patty Jane's House of Curl (Ballantine Reader's Circle)",
    bookAuthor: 'LORNA LANDVIK',
    date: '1996',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0449911004.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0449911004.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0449911004.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451162072',
    bookTitle: 'Pet Sematary',
    bookAuthor: 'Stephen King',
    date: '1994',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451162072.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451162072.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451162072.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451186648',
    bookTitle: 'Silent Snow',
    bookAuthor: 'Steve Thayer',
    date: '2000',
    publisher: 'Signet Book',
    imageLinkS: 'http://images.amazon.com/images/P/0451186648.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451186648.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451186648.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0452282152',
    bookTitle: 'Girl with a Pearl Earring',
    bookAuthor: 'Tracy Chevalier',
    date: '2001',
    publisher: 'Plume Books',
    imageLinkS: 'http://images.amazon.com/images/P/0452282152.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0452282152.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0452282152.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '051513290X',
    bookTitle: 'Summer of Storms',
    bookAuthor: 'Judith Kelman',
    date: '2002',
    publisher: 'Jove Books',
    imageLinkS: 'http://images.amazon.com/images/P/051513290X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/051513290X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/051513290X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553580388',
    bookTitle: 'The Patient',
    bookAuthor: 'Michael Palmer',
    date: '2001',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553580388.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553580388.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553580388.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0590598848',
    bookTitle: "Demona's Revenge (Gargoyles, No. 2)",
    bookAuthor: 'Francine Hughes',
    date: '1995',
    publisher: 'Scholastic',
    imageLinkS: 'http://images.amazon.com/images/P/0590598848.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0590598848.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0590598848.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0590629719',
    bookTitle: "Clifford's Sports Day",
    bookAuthor: 'Norman Bridwell',
    date: '1996',
    publisher: 'Scholastic',
    imageLinkS: 'http://images.amazon.com/images/P/0590629719.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0590629719.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0590629719.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671023616',
    bookTitle: 'Postmortem (Kay Scarpetta Mysteries (Paperback))',
    bookAuthor: 'Patricia Cornwell',
    date: '1998',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671023616.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671023616.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671023616.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671027387',
    bookTitle: 'Deception Point',
    bookAuthor: 'Dan Brown',
    date: '2002',
    publisher: 'Pocket',
    imageLinkS: 'http://images.amazon.com/images/P/0671027387.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671027387.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671027387.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0684848783',
    bookTitle: 'Tis : A Memoir',
    bookAuthor: 'Frank McCourt',
    date: '1999',
    publisher: 'Scribner',
    imageLinkS: 'http://images.amazon.com/images/P/0684848783.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0684848783.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0684848783.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743486226',
    bookTitle: 'Angels &amp; Demons',
    bookAuthor: 'Dan Brown',
    date: '2003',
    publisher: 'Atria',
    imageLinkS: 'http://images.amazon.com/images/P/0743486226.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0743486226.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0743486226.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0786863986',
    bookTitle: 'A Monk Swimming',
    bookAuthor: 'Malachy McCourt',
    date: '1998',
    publisher: 'Hyperion',
    imageLinkS: 'http://images.amazon.com/images/P/0786863986.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0786863986.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0786863986.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0803251718',
    bookTitle: 'Crazy Horse',
    bookAuthor: 'Mari Sandoz',
    date: '1961',
    publisher: 'University of Nebraska Press',
    imageLinkS: 'http://images.amazon.com/images/P/0803251718.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0803251718.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0803251718.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0804117934',
    bookTitle: 'The Silent Cry (William Monk Novels (Paperback))',
    bookAuthor: 'Anne Perry',
    date: '1998',
    publisher: 'Ivy Books',
    imageLinkS: 'http://images.amazon.com/images/P/0804117934.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0804117934.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0804117934.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '140003180X',
    bookTitle: "The Kalahari Typing School for Men (No. 1 Ladies' Detective Agency)",
    bookAuthor: 'ALEXANDER MCCALL SMITH',
    date: '2004',
    publisher: 'Anchor',
    imageLinkS: 'http://images.amazon.com/images/P/140003180X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/140003180X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/140003180X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '155874262X',
    bookTitle: 'Chicken Soup for the Soul (Chicken Soup for the Soul)',
    bookAuthor: 'Jack Canfield',
    date: '1993',
    publisher: 'Health Communications',
    imageLinkS: 'http://images.amazon.com/images/P/155874262X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/155874262X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/155874262X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060987103',
    bookTitle: 'Wicked: The Life and Times of the Wicked Witch of the West',
    bookAuthor: 'Gregory Maguire',
    date: '1996',
    publisher: 'Regan Books',
    imageLinkS: 'http://images.amazon.com/images/P/0060987103.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060987103.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060987103.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0151008116',
    bookTitle: 'Life of Pi',
    bookAuthor: 'Yann Martel',
    date: '2002',
    publisher: 'Harcourt',
    imageLinkS: 'http://images.amazon.com/images/P/0151008116.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0151008116.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0151008116.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375704965',
    bookTitle: 'A Judgement in Stone',
    bookAuthor: 'Ruth Rendell',
    date: '2000',
    publisher: 'Vintage Books USA',
    imageLinkS: 'http://images.amazon.com/images/P/0375704965.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375704965.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375704965.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0525947647',
    bookTitle: 'Lies and the Lying Liars Who Tell Them: A Fair and Balanced Look at the Right',
    bookAuthor: 'Al Franken',
    date: '2003',
    publisher: 'Dutton Books',
    imageLinkS: 'http://images.amazon.com/images/P/0525947647.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0525947647.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0525947647.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0804111359',
    bookTitle: 'Secret History',
    bookAuthor: 'DONNA TARTT',
    date: '1993',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0804111359.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0804111359.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0804111359.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1558744150',
    bookTitle: "Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series (Paper))",
    bookAuthor: 'Jack Canfield',
    date: '1996',
    publisher: 'Health Communications',
    imageLinkS: 'http://images.amazon.com/images/P/1558744150.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1558744150.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1558744150.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0435272683',
    bookTitle: 'Great Expectations (Heinemann Guided Readers)',
    bookAuthor: 'John Milne',
    date: '1995',
    publisher: 'Delta Systems',
    imageLinkS: 'http://images.amazon.com/images/P/0435272683.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0435272683.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0435272683.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0316782505',
    bookTitle: 'The Weight of Water',
    bookAuthor: 'Anita Shreve',
    date: '2001',
    publisher: 'Little, Brown',
    imageLinkS: 'http://images.amazon.com/images/P/0316782505.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0316782505.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0316782505.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006102063X',
    bookTitle: 'Moving Pictures (Discworld Novels (Paperback))',
    bookAuthor: 'Terry Pratchett',
    date: '2002',
    publisher: 'HarperTorch',
    imageLinkS: 'http://images.amazon.com/images/P/006102063X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/006102063X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/006102063X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060013117',
    bookTitle: 'Night Watch',
    bookAuthor: 'Terry Pratchett',
    date: '2002',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/0060013117.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060013117.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060013117.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060199563',
    bookTitle: 'Thief of Time',
    bookAuthor: 'Terry Pratchett',
    date: '2001',
    publisher: 'HarperCollins Publishers',
    imageLinkS: 'http://images.amazon.com/images/P/0060199563.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060199563.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060199563.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '006052779X',
    bookTitle: "Charlotte's Web Book and Charm (Charming Classics)",
    bookAuthor: 'E. B. White',
    date: '2003',
    publisher: 'HarperFestival',
    imageLinkS: 'http://images.amazon.com/images/P/006052779X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/006052779X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/006052779X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060563079',
    bookTitle: 'Peter Pan: The Original Story (Peter Pan)',
    bookAuthor: 'J. M. Barrie',
    date: '2003',
    publisher: 'HarperFestival',
    imageLinkS: 'http://images.amazon.com/images/P/0060563079.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060563079.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060563079.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060809027',
    bookTitle: 'My Friend Flicka',
    bookAuthor: "Mary O'Hara",
    date: '1988',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060809027.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060809027.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060809027.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061040967',
    bookTitle: 'The Last Hero : A Discworld Fable (Discworld Novels (Hardcover))',
    bookAuthor: 'Terry Pratchett',
    date: '2001',
    publisher: 'HarperCollins',
    imageLinkS: 'http://images.amazon.com/images/P/0061040967.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061040967.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061040967.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061050474',
    bookTitle: 'Jingo: A Discworld Novel (Discworld Series/Terry Pratchett)',
    bookAuthor: 'Terry Pratchett',
    date: '1998',
    publisher: 'HarperPrism',
    imageLinkS: 'http://images.amazon.com/images/P/0061050474.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061050474.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061050474.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061052515',
    bookTitle: 'Maskerade: A Novel of Discworld (Pratchett, Terry. Discworld Series (New York, N.Y.).)',
    bookAuthor: 'Terry Pratchett',
    date: '1997',
    publisher: 'HarperPrism',
    imageLinkS: 'http://images.amazon.com/images/P/0061052515.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061052515.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061052515.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0061052523',
    bookTitle: 'Interesting Times: A Novel of Discworld',
    bookAuthor: 'Terry Pratchett',
    date: '1997',
    publisher: 'Harpercollins',
    imageLinkS: 'http://images.amazon.com/images/P/0061052523.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0061052523.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0061052523.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0064472264',
    bookTitle: "On the Bright Side, I'm Now the Girlfriend of a Sex God: Further Confessions of Georgia Nicolson",
    bookAuthor: 'Louise Rennison',
    date: '2002',
    publisher: 'HarperTempest',
    imageLinkS: 'http://images.amazon.com/images/P/0064472264.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0064472264.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0064472264.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0140620664',
    bookTitle: 'Mansfield Park (Penguin Popular Classics)',
    bookAuthor: 'Jane Austen',
    date: '1994',
    publisher: 'Penguin Books Ltd',
    imageLinkS: 'http://images.amazon.com/images/P/0140620664.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0140620664.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0140620664.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312148267',
    bookTitle: 'The Wind in the Willows',
    bookAuthor: 'Kenneth Grahame',
    date: '1996',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312148267.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312148267.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312148267.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312156960',
    bookTitle: 'The Winter King: A Novel of Arthur (The Warlord Chronicles: I)',
    bookAuthor: 'Bernard Cornwell',
    date: '1997',
    publisher: "St. Martin's Griffin",
    imageLinkS: 'http://images.amazon.com/images/P/0312156960.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312156960.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312156960.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312890044',
    bookTitle: 'Moonheart (Newford)',
    bookAuthor: 'Charles de Lint',
    date: '1994',
    publisher: 'Orb Books',
    imageLinkS: 'http://images.amazon.com/images/P/0312890044.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312890044.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312890044.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '034543191X',
    bookTitle: "The King of Elfland's Daughter (Del Rey Impact)",
    bookAuthor: 'Edward John Moreton Drax Plunkett Dunsany',
    date: '1999',
    publisher: 'Del Rey Books',
    imageLinkS: 'http://images.amazon.com/images/P/034543191X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/034543191X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/034543191X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0373836023',
    bookTitle: 'Powder and Patch',
    bookAuthor: 'Georgette Heyer',
    date: '2004',
    publisher: 'Harlequin',
    imageLinkS: 'http://images.amazon.com/images/P/0373836023.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0373836023.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0373836023.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385721420',
    bookTitle: 'Three Junes',
    bookAuthor: 'JULIA GLASS',
    date: '2003',
    publisher: 'Anchor',
    imageLinkS: 'http://images.amazon.com/images/P/0385721420.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385721420.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385721420.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375751513',
    bookTitle: 'The Picture of Dorian Gray (Modern Library (Paperback))',
    bookAuthor: 'OSCAR WILDE',
    date: '1998',
    publisher: 'Modern Library',
    imageLinkS: 'http://images.amazon.com/images/P/0375751513.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375751513.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375751513.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375801677',
    bookTitle: 'The Iron Giant',
    bookAuthor: 'Ted Hughes',
    date: '1999',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375801677.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375801677.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375801677.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375814248',
    bookTitle: 'James and the Giant Peach',
    bookAuthor: 'ROALD DAHL',
    date: '2002',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375814248.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375814248.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375814248.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375823352',
    bookTitle: 'The Amber Spyglass (His Dark Materials, Book 3)',
    bookAuthor: 'PHILIP PULLMAN',
    date: '2002',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375823352.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375823352.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375823352.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '037582345X',
    bookTitle: 'The Golden Compass (His Dark Materials, Book 1)',
    bookAuthor: 'PHILIP PULLMAN',
    date: '2002',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/037582345X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/037582345X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/037582345X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375823468',
    bookTitle: 'The Subtle Knife (His Dark Materials, Book 2)',
    bookAuthor: 'PHILIP PULLMAN',
    date: '2002',
    publisher: 'Knopf Books for Young Readers',
    imageLinkS: 'http://images.amazon.com/images/P/0375823468.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375823468.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375823468.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380730448',
    bookTitle: 'The Adrian Mole Diaries : The Secret Diary of Adrian Mole, Aged 13 3/4 : The Growing Pains of Adrian Mole',
    bookAuthor: 'Sue Townsend',
    date: '1997',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0380730448.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380730448.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380730448.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380973839',
    bookTitle: 'Martian Chronicles',
    bookAuthor: 'Ray Bradbury',
    date: '1997',
    publisher: 'William Morrow',
    imageLinkS: 'http://images.amazon.com/images/P/0380973839.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380973839.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380973839.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0385327773',
    bookTitle: 'The Great God Pan',
    bookAuthor: 'Donna Jo Napoli',
    date: '2003',
    publisher: 'Wendy Lamb Books',
    imageLinkS: 'http://images.amazon.com/images/P/0385327773.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0385327773.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0385327773.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0394586239',
    bookTitle: 'Possession: A Romance',
    bookAuthor: 'A. S. Byatt',
    date: '1990',
    publisher: 'Random House Inc',
    imageLinkS: 'http://images.amazon.com/images/P/0394586239.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0394586239.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0394586239.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0439510112',
    bookTitle: 'Born Confused',
    bookAuthor: 'Tanuja Desai Hidier',
    date: '2003',
    publisher: 'Push',
    imageLinkS: 'http://images.amazon.com/images/P/0439510112.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0439510112.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0439510112.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440241413',
    bookTitle: 'Confessions of a Shopaholic',
    bookAuthor: 'SOPHIE KINSELLA',
    date: '2003',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440241413.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440241413.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440241413.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451409256',
    bookTitle: 'Making Minty Malone',
    bookAuthor: 'Isabel Wolff',
    date: '2000',
    publisher: 'Onyx Books',
    imageLinkS: 'http://images.amazon.com/images/P/0451409256.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451409256.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451409256.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451523415',
    bookTitle: 'Little Women (Signet Classic)',
    bookAuthor: 'Louisa May Alcott',
    date: '1988',
    publisher: 'Signet Classics',
    imageLinkS: 'http://images.amazon.com/images/P/0451523415.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451523415.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451523415.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451526279',
    bookTitle: 'Emma (Signet Classics (Paperback))',
    bookAuthor: 'Jane Austen',
    date: '1996',
    publisher: 'Signet Classics',
    imageLinkS: 'http://images.amazon.com/images/P/0451526279.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451526279.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451526279.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0451526341',
    bookTitle: 'Animal Farm',
    bookAuthor: 'George Orwell',
    date: '2004',
    publisher: 'Signet',
    imageLinkS: 'http://images.amazon.com/images/P/0451526341.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0451526341.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0451526341.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0486415864',
    bookTitle: 'Great Expectations (Dover Thrift Editions)',
    bookAuthor: 'Charles Dickens',
    date: '2001',
    publisher: 'Dover Publications',
    imageLinkS: 'http://images.amazon.com/images/P/0486415864.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0486415864.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0486415864.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553280589',
    bookTitle: 'Eva Luna',
    bookAuthor: 'Isabel Allende',
    date: '1989',
    publisher: 'Bantam Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553280589.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553280589.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553280589.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0571197639',
    bookTitle: 'Poisonwood Bible Edition Uk',
    bookAuthor: 'Barbara Kingsolver',
    date: '0',
    publisher: 'Faber Faber Inc',
    imageLinkS: 'http://images.amazon.com/images/P/0571197639.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0571197639.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0571197639.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0670035262',
    bookTitle: 'The Green Man : Tales from the Mythic Forest',
    bookAuthor: 'Ellen Datlow',
    date: '2002',
    publisher: 'Viking Juvenile',
    imageLinkS: 'http://images.amazon.com/images/P/0670035262.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0670035262.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0670035262.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679423079',
    bookTitle: "Nicholas Nickleby (Everyman's Library)",
    bookAuthor: 'Charles Dickens',
    date: '1993',
    publisher: 'Alfred A. Knopf',
    imageLinkS: 'http://images.amazon.com/images/P/0679423079.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679423079.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679423079.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0679751343',
    bookTitle: 'Angels &amp; Insects : Two Novellas',
    bookAuthor: 'A.S. BYATT',
    date: '1994',
    publisher: 'Vintage',
    imageLinkS: 'http://images.amazon.com/images/P/0679751343.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0679751343.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0679751343.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0684833395',
    bookTitle: 'Catch 22',
    bookAuthor: 'Joseph Heller',
    date: '1996',
    publisher: 'Simon &amp; Schuster',
    imageLinkS: 'http://images.amazon.com/images/P/0684833395.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0684833395.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0684833395.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0743245024',
    bookTitle: 'The Forsyte Saga : The Man of Property and In Chancery',
    bookAuthor: 'John Galsworthy',
    date: '2002',
    publisher: 'Touchstone',
    imageLinkS: 'http://images.amazon.com/images/P/0743245024.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0743245024.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0743245024.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0749748001',
    bookTitle: 'The Enchanted Wood',
    bookAuthor: 'Enid Blyton',
    date: '2002',
    publisher: 'Egmont Childrens Books',
    imageLinkS: 'http://images.amazon.com/images/P/0749748001.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0749748001.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0749748001.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0749748028',
    bookTitle: 'The Folk of the Faraway Tree',
    bookAuthor: 'Enid Blyton',
    date: '2002',
    publisher: 'Egmont Childrens Books',
    imageLinkS: 'http://images.amazon.com/images/P/0749748028.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0749748028.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0749748028.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0963094424',
    bookTitle: 'Angels and Visitations: A Miscellany',
    bookAuthor: 'Neil Gaiman',
    date: '1993',
    publisher: 'Dreamhaven Books',
    imageLinkS: 'http://images.amazon.com/images/P/0963094424.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0963094424.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0963094424.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1401201172',
    bookTitle: 'League of Extraordinary Gentlemen, Vol. 2 (Comic)',
    bookAuthor: 'Alan Moore',
    date: '2003',
    publisher: 'DC Comics',
    imageLinkS: 'http://images.amazon.com/images/P/1401201172.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1401201172.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1401201172.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1563892278',
    bookTitle: 'Preludes and Nocturnes (Sandman, Book 1)',
    bookAuthor: 'Neil Gaiman',
    date: '1998',
    publisher: 'DC Comics',
    imageLinkS: 'http://images.amazon.com/images/P/1563892278.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1563892278.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1563892278.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1563898586',
    bookTitle: 'The League of Extraordinary Gentlemen, Vol. 1',
    bookAuthor: 'Alan Moore',
    date: '2002',
    publisher: 'DC Comics',
    imageLinkS: 'http://images.amazon.com/images/P/1563898586.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1563898586.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1563898586.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '156971620X',
    bookTitle: 'Harlequin Valentine',
    bookAuthor: 'Neil Gaiman',
    date: '2002',
    publisher: 'Dark Horse Comics',
    imageLinkS: 'http://images.amazon.com/images/P/156971620X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/156971620X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/156971620X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1592571301',
    bookTitle: 'Alpha Teach Yourself American Sign Language in 24 Hours (Alpha Teach Yourself in 24 Hours)',
    bookAuthor: 'Trudy Suggs',
    date: '2003',
    publisher: 'Alpha Books',
    imageLinkS: 'http://images.amazon.com/images/P/1592571301.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1592571301.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1592571301.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0374270325',
    bookTitle: 'A Man in Full',
    bookAuthor: 'Tom Wolfe',
    date: '1998',
    publisher: 'Farrar Straus &amp; Giroux',
    imageLinkS: 'http://images.amazon.com/images/P/0374270325.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0374270325.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0374270325.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0375719180',
    bookTitle: 'The Miracle Life of Edgar Mint: A Novel',
    bookAuthor: 'Brady Udall',
    date: '2002',
    publisher: 'Vintage Books USA',
    imageLinkS: 'http://images.amazon.com/images/P/0375719180.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0375719180.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0375719180.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0440235502',
    bookTitle: 'October Sky: A Memoir',
    bookAuthor: 'Homer Hickam',
    date: '1999',
    publisher: 'Dell',
    imageLinkS: 'http://images.amazon.com/images/P/0440235502.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0440235502.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0440235502.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '044023722X',
    bookTitle: 'A Painted House',
    bookAuthor: 'John Grisham',
    date: '2001',
    publisher: 'Dell Publishing Company',
    imageLinkS: 'http://images.amazon.com/images/P/044023722X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/044023722X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/044023722X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1573225487',
    bookTitle: 'The Romance Reader',
    bookAuthor: 'Pearl Abraham',
    date: '1996',
    publisher: 'Riverhead Books',
    imageLinkS: 'http://images.amazon.com/images/P/1573225487.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1573225487.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1573225487.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '1853260673',
    bookTitle: 'Far from the Madding Crowd (Wordsworth Classics)',
    bookAuthor: 'Thomas Hardy',
    date: '1997',
    publisher: 'NTC/Contemporary Publishing Company',
    imageLinkS: 'http://images.amazon.com/images/P/1853260673.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/1853260673.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/1853260673.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0060977477',
    bookTitle: 'The Perfect Storm : A True Story of Men Against the Sea',
    bookAuthor: 'Sebastian Junger',
    date: '1999',
    publisher: 'Perennial',
    imageLinkS: 'http://images.amazon.com/images/P/0060977477.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0060977477.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0060977477.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345391691',
    bookTitle: 'The Battle for God',
    bookAuthor: 'Karen Armstrong',
    date: '2001',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345391691.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345391691.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345391691.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0520011171',
    bookTitle: 'Sappho: A New Translation',
    bookAuthor: 'Mary Barnard',
    date: '1958',
    publisher: 'University of California Press',
    imageLinkS: 'http://images.amazon.com/images/P/0520011171.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0520011171.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0520011171.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553278746',
    bookTitle: 'The Postman (Bantam Classics)',
    bookAuthor: 'David Brin',
    date: '1990',
    publisher: 'Spectra Books',
    imageLinkS: 'http://images.amazon.com/images/P/0553278746.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553278746.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553278746.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0670856045',
    bookTitle: 'The Tortilla Curtain',
    bookAuthor: 'T. Coraghessan Boyle',
    date: '1995',
    publisher: 'Viking Books',
    imageLinkS: 'http://images.amazon.com/images/P/0670856045.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0670856045.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0670856045.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0872200760',
    bookTitle: 'Symposium',
    bookAuthor: 'Paul Woodruff',
    date: '1989',
    publisher: 'Hackett Pub Co Inc',
    imageLinkS: 'http://images.amazon.com/images/P/0872200760.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0872200760.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0872200760.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0937858994',
    bookTitle: "The What's Happening to My Body? Book for Boys: A Growing Up Guide for Parents and Sons",
    bookAuthor: 'Lynda Madaras',
    date: '1987',
    publisher: 'W W Norton &amp; Co',
    imageLinkS: 'http://images.amazon.com/images/P/0937858994.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0937858994.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0937858994.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0671649949',
    bookTitle: 'OBJECT AFFECTION',
    bookAuthor: 'Stephen McCauley',
    date: '1988',
    publisher: 'Washington Square Press',
    imageLinkS: 'http://images.amazon.com/images/P/0671649949.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0671649949.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0671649949.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0590431110',
    bookTitle: 'The Journey Home',
    bookAuthor: 'Isabelle Holland',
    date: '1993',
    publisher: 'Scholastic Paperbacks (Mm)',
    imageLinkS: 'http://images.amazon.com/images/P/0590431110.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0590431110.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0590431110.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0064470113',
    bookTitle: 'Taking the Ferry Home',
    bookAuthor: 'Pam Conrad',
    date: '1990',
    publisher: 'Harpercollins Juvenile Books',
    imageLinkS: 'http://images.amazon.com/images/P/0064470113.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0064470113.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0064470113.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0553571486',
    bookTitle: 'Angel of Hope (Mercy Trilogy)',
    bookAuthor: 'Lurlene McDaniel',
    date: '2000',
    publisher: 'Starfire',
    imageLinkS: 'http://images.amazon.com/images/P/0553571486.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0553571486.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0553571486.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0972044205',
    bookTitle: 'The Breach',
    bookAuthor: 'Brian Kaufman',
    date: '2002',
    publisher: 'Last Knight Pub Co',
    imageLinkS: 'http://images.amazon.com/images/P/0972044205.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0972044205.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0972044205.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0312963009',
    bookTitle: 'Neanderthal: A Novel',
    bookAuthor: 'John Darnton',
    date: '1997',
    publisher: "St. Martin's Press",
    imageLinkS: 'http://images.amazon.com/images/P/0312963009.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0312963009.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0312963009.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345430476',
    bookTitle: 'A Small Dark Place',
    bookAuthor: 'Martin Schenk',
    date: '1999',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0345430476.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345430476.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345430476.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0345435869',
    bookTitle: 'The Rivan Codex : Ancient Texts of THE BELGARIAD and THE MALLOREON',
    bookAuthor: 'DAVID EDDINGS',
    date: '1999',
    publisher: 'Del Rey',
    imageLinkS: 'http://images.amazon.com/images/P/0345435869.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0345435869.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0345435869.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0380728729',
    bookTitle: 'Babyhood',
    bookAuthor: 'Paul Reiser',
    date: '1998',
    publisher: 'Avon',
    imageLinkS: 'http://images.amazon.com/images/P/0380728729.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0380728729.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0380728729.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '038081840X',
    bookTitle: "Year's Best Fantasy (Year's Best Fantasy)",
    bookAuthor: 'David G. Hartwell',
    date: '2001',
    publisher: 'Eos',
    imageLinkS: 'http://images.amazon.com/images/P/038081840X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/038081840X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/038081840X.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '0449912302',
    bookTitle: 'Dave Barry in Cyberspace',
    bookAuthor: 'Dave Barry',
    date: '1997',
    publisher: 'Ballantine Books',
    imageLinkS: 'http://images.amazon.com/images/P/0449912302.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/0449912302.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/0449912302.01.LZZZZZZZ.jpg'
  },
  {
    isbn: '055329198X',
    bookTitle: 'Wolf Moon',
    bookAuthor: 'John R. Holt',
    date: '1997',
    publisher: 'Bantam',
    imageLinkS: 'http://images.amazon.com/images/P/055329198X.01.THUMBZZZ.jpg',
    ImageLinkM: 'http://images.amazon.com/images/P/055329198X.01.MZZZZZZZ.jpg',
    ImageLinkL: 'http://images.amazon.com/images/P/055329198X.01.LZZZZZZZ.jpg'
  }


];

module.exports = { booksData };

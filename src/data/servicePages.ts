export type LocalizedText = {
  pl: string;
  en: string;
};

export type ServiceFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type ServiceDefinition = {
  num: string;
  slug: string;
  bookingValue: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  metaTitle: string;
  metaDescription: string;
  heroLabel: LocalizedText;
  heroSummary: LocalizedText;
  price: LocalizedText;
  leadTime: LocalizedText;
  scopeItems: LocalizedText[];
  benefitItems: LocalizedText[];
  processItems: LocalizedText[];
  faq: ServiceFaq[];
  relatedSlugs: string[];
};

export const getServiceDirectoryPath = () => "/uslugi";

export const getServiceHashPath = (slug: string) => `/uslugi#${slug}`;

export const servicePages: ServiceDefinition[] = [
  {
    num: "01",
    slug: "diagnostyka-komputerowa",
    bookingValue: "diagnostics",
    title: {
      pl: "Diagnostyka komputerowa",
      en: "Computer diagnostics",
    },
    shortDescription: {
      pl: "Profesjonalna diagnostyka z użyciem nowoczesnego sprzętu OBD2 i czytelnego raportu dla kierowcy.",
      en: "Professional diagnostics with modern OBD2 tools and a clear report for the driver.",
    },
    metaTitle: "Diagnostyka komputerowa Wrocław | Nexar Garage",
    metaDescription:
      "Diagnostyka komputerowa we Wrocławiu w Nexar Garage. Odczyt błędów OBD2, analiza parametrów, kontrolki Check Engine, ABS i ESP. Szybka wycena i termin online.",
    heroLabel: {
      pl: "Diagnostyka OBD2 Wrocław",
      en: "OBD2 diagnostics Wrocław",
    },
    heroSummary: {
      pl: "Szybko ustalamy źródło problemu, zanim przejdziesz do kosztownej i niepotrzebnej wymiany części.",
      en: "We identify the source of the issue before you spend money on unnecessary parts replacement.",
    },
    price: {
      pl: "100-250 zł",
      en: "PLN 100-250",
    },
    leadTime: {
      pl: "od 45 min",
      en: "from 45 min",
    },
    scopeItems: [
      { pl: "Odczyt i interpretacja błędów zapisanych w sterownikach.", en: "Reading and interpreting faults stored in vehicle control units." },
      { pl: "Test parametrów pracy silnika, układu paliwowego i czujników.", en: "Live parameter testing for the engine, fuel system and sensors." },
      { pl: "Weryfikacja kontrolek Check Engine, ABS, ESP i usterek komfortu.", en: "Verification of Check Engine, ABS, ESP and comfort-system faults." },
      { pl: "Raport z zaleceniami dalszej naprawy i orientacyjną wyceną.", en: "Report with repair recommendations and an estimated quotation." },
    ],
    benefitItems: [
      { pl: "Dokładna diagnoza przed rozpoczęciem naprawy.", en: "Accurate diagnosis before any repair starts." },
      { pl: "Obsługa aut prywatnych, flotowych i dostawczych.", en: "Support for private, fleet and commercial vehicles." },
      { pl: "Możliwość wykonania dalszej naprawy na miejscu.", en: "Follow-up repair can be completed on site." },
    ],
    processItems: [
      { pl: "Krótki wywiad o objawach i historii usterki.", en: "A short interview about symptoms and fault history." },
      { pl: "Skan sterowników oraz testy parametrów na żywo.", en: "Control-unit scan and live parameter testing." },
      { pl: "Raport i plan dalszego serwisu dopasowany do auta.", en: "A report and further service plan tailored to the car." },
    ],
    faq: [
      { question: { pl: "Ile trwa diagnostyka komputerowa?", en: "How long does computer diagnostics take?" }, answer: { pl: "Standardowa diagnostyka trwa zwykle od 45 do 90 minut, w zależności od objawów i liczby testowanych układów.", en: "Standard diagnostics usually takes 45 to 90 minutes depending on symptoms and the number of tested systems." } },
      { question: { pl: "Czy po diagnostyce dostanę wycenę naprawy?", en: "Will I get a repair estimate after diagnostics?" }, answer: { pl: "Tak. Po sprawdzeniu auta przedstawiamy zakres prac i orientacyjną wycenę przed rozpoczęciem naprawy.", en: "Yes. After checking the car, we provide the scope of work and an estimated quote before repairs begin." } },
      { question: { pl: "Czy obsługujecie kontrolkę Check Engine?", en: "Do you handle Check Engine faults?" }, answer: { pl: "Tak. Diagnostykujemy błędy silnika, układu paliwowego, zapłonu i czujników związanych z kontrolką Check Engine.", en: "Yes. We diagnose engine, fuel, ignition and sensor faults related to the Check Engine warning." } },
    ],
    relatedSlugs: ["serwis-i-naprawy", "elektryk-samochodowy", "klimatyzacja-samochodowa"],
  },
  {
    num: "02",
    slug: "serwis-i-naprawy",
    bookingValue: "repairs",
    title: {
      pl: "Serwis i naprawy",
      en: "Service and repairs",
    },
    shortDescription: {
      pl: "Kompleksowa obsługa mechaniczna: silnik, zawieszenie, hamulce, rozrząd i codzienny serwis eksploatacyjny.",
      en: "Comprehensive mechanical service: engine, suspension, brakes, timing kits and routine maintenance.",
    },
    metaTitle: "Mechanik Wrocław | Serwis i naprawy samochodowe | Nexar Garage",
    metaDescription:
      "Mechanik we Wrocławiu dla napraw mechanicznych i bieżącego serwisu. Hamulce, zawieszenie, oleje, filtry, rozrząd i wycena przed naprawą.",
    heroLabel: {
      pl: "Mechanik Wrocław",
      en: "Mechanic Wrocław",
    },
    heroSummary: {
      pl: "Naprawiamy usterki mechaniczne i prowadzimy serwis eksploatacyjny tak, żeby auto szybko wróciło na drogę.",
      en: "We repair mechanical faults and handle routine servicing so your car gets back on the road quickly.",
    },
    price: {
      pl: "od 280 zł / h",
      en: "from PLN 280 / h",
    },
    leadTime: {
      pl: "1 dzień roboczy+",
      en: "from 1 working day",
    },
    scopeItems: [
      { pl: "Serwis olejowy, filtry, płyny i przeglądy okresowe.", en: "Oil service, filters, fluids and periodic inspections." },
      { pl: "Naprawa hamulców, zawieszenia, układu kierowniczego i wydechu.", en: "Repair of brakes, suspension, steering and exhaust systems." },
      { pl: "Wymiana rozrządu, osprzętu i podstawowa mechanika silnika.", en: "Timing kit replacement, engine ancillaries and general engine mechanics." },
      { pl: "Jasna informacja o zakresie i kosztach jeszcze przed naprawą.", en: "Clear communication about the scope and costs before repairs begin." },
    ],
    benefitItems: [
      { pl: "Doświadczeni mechanicy i dobór części pod konkretny model.", en: "Experienced mechanics and parts selection for the exact vehicle model." },
      { pl: "Możliwość łączenia serwisu z diagnostyką i geometrią.", en: "Service can be combined with diagnostics and wheel alignment." },
      { pl: "Realna wycena i kontakt z klientem przed dodatkowymi pracami.", en: "Realistic quoting and customer contact before additional work." },
    ],
    processItems: [
      { pl: "Oględziny auta i potwierdzenie zakresu prac.", en: "Vehicle inspection and confirmation of the work scope." },
      { pl: "Wycena części i robocizny przed rozpoczęciem naprawy.", en: "Parts and labour estimate before starting the repair." },
      { pl: "Naprawa, kontrola końcowa i odbiór z omówieniem wykonanych prac.", en: "Repair, final check and handover with a summary of completed work." },
    ],
    faq: [
      { question: { pl: "Czy wykonujecie standardowy serwis olejowy?", en: "Do you provide routine oil service?" }, answer: { pl: "Tak. Wykonujemy wymianę oleju, filtrów i podstawowych materiałów eksploatacyjnych dla aut prywatnych i firmowych.", en: "Yes. We perform oil, filter and essential consumables replacement for private and fleet vehicles." } },
      { question: { pl: "Czy przed naprawą dostanę kosztorys?", en: "Will I get a cost estimate before the repair?" }, answer: { pl: "Tak. Przed rozpoczęciem prac potwierdzamy zakres naprawy oraz szacowany koszt części i robocizny.", en: "Yes. Before starting work, we confirm the repair scope and the estimated cost of parts and labour." } },
      { question: { pl: "Czy naprawiacie auta flotowe?", en: "Do you service fleet vehicles?" }, answer: { pl: "Tak. Obsługujemy także samochody flotowe i dostawcze z regularnym serwisem eksploatacyjnym.", en: "Yes. We also service fleet and commercial vehicles with routine maintenance plans." } },
    ],
    relatedSlugs: ["diagnostyka-komputerowa", "geometria-kol", "wymiana-opon"],
  },
  {
    num: "03",
    slug: "wymiana-opon",
    bookingValue: "tyres",
    title: {
      pl: "Wymiana opon",
      en: "Tyre service",
    },
    shortDescription: {
      pl: "Sezonowa wymiana opon, wyważanie kół i szybka obsługa przed zimą lub latem we Wrocławiu.",
      en: "Seasonal tyre changes, wheel balancing and fast support before winter or summer.",
    },
    metaTitle: "Wymiana opon Wrocław | Serwis opon | Nexar Garage",
    metaDescription:
      "Wymiana opon we Wrocławiu w Nexar Garage. Szybka sezonowa przekładka, wyważanie kół, kontrola ogumienia i termin online bez długiego oczekiwania.",
    heroLabel: {
      pl: "Serwis opon Wrocław",
      en: "Tyre service Wrocław",
    },
    heroSummary: {
      pl: "Dbamy o sprawną sezonową wymianę, wyważenie i kontrolę stanu opon, żeby auto prowadziło się stabilnie i bezpiecznie.",
      en: "We handle seasonal tyre changes, balancing and condition checks for stable and safe driving.",
    },
    price: {
      pl: "160-280 zł",
      en: "PLN 160-280",
    },
    leadTime: {
      pl: "30-60 min",
      en: "30-60 min",
    },
    scopeItems: [
      { pl: "Wymiana kompletu opon lub kół letnich i zimowych.", en: "Replacement of a full set of summer or winter tyres/wheels." },
      { pl: "Wyważanie kół i kontrola ciśnienia roboczego.", en: "Wheel balancing and operating pressure control." },
      { pl: "Ocena stanu bieżnika, wentyli i równomierności zużycia.", en: "Assessment of tread, valves and even wear." },
      { pl: "Przygotowanie auta do dalszej jazdy od razu po wizycie.", en: "The vehicle is ready to drive immediately after the appointment." },
    ],
    benefitItems: [
      { pl: "Krótki czas wizyty i sprawna obsługa w sezonie.", en: "Short appointment times and efficient seasonal service." },
      { pl: "Możliwość połączenia z geometrią i kontrolą zawieszenia.", en: "Can be combined with wheel alignment and suspension checks." },
      { pl: "Jasna informacja, jeśli ogumienie wymaga wymiany.", en: "Clear feedback if the tyres need replacing." },
    ],
    processItems: [
      { pl: "Przyjęcie auta i kontrola stanu obecnego kompletu.", en: "Vehicle intake and condition check of the current set." },
      { pl: "Wymiana, wyważenie i ustawienie właściwego ciśnienia.", en: "Tyre change, balancing and proper pressure adjustment." },
      { pl: "Końcowa kontrola i rekomendacja dalszego serwisu.", en: "Final inspection and recommendation for further service if needed." },
    ],
    faq: [
      { question: { pl: "Ile trwa sezonowa wymiana opon?", en: "How long does a seasonal tyre change take?" }, answer: { pl: "Najczęściej od 30 do 60 minut, zależnie od rozmiaru kół i dodatkowych prac serwisowych.", en: "Usually 30 to 60 minutes depending on wheel size and any extra service work." } },
      { question: { pl: "Czy wyważacie koła przy wymianie?", en: "Do you balance the wheels during the service?" }, answer: { pl: "Tak. Standardowo kontrolujemy wyważenie, aby ograniczyć drgania i nierównomierne zużycie opon.", en: "Yes. We routinely check balancing to reduce vibration and uneven tyre wear." } },
      { question: { pl: "Kiedy warto zrobić geometrię po wymianie opon?", en: "When should wheel alignment be checked after a tyre change?" }, answer: { pl: "Jeśli auto ściąga, kierownica stoi krzywo albo opony zużywają się nierówno, warto od razu sprawdzić geometrię.", en: "If the car pulls to one side, the steering wheel sits off-centre or tyre wear is uneven, wheel alignment should be checked." } },
    ],
    relatedSlugs: ["geometria-kol", "serwis-i-naprawy", "diagnostyka-komputerowa"],
  },
  {
    num: "04",
    slug: "elektryk-samochodowy",
    bookingValue: "electrics",
    title: {
      pl: "Elektryk samochodowy",
      en: "Auto electrics",
    },
    shortDescription: {
      pl: "Diagnostyka i naprawa instalacji elektrycznej, akumulatorów, alternatorów oraz problemów z ładowaniem.",
      en: "Diagnostics and repair of electrical systems, batteries, alternators and charging issues.",
    },
    metaTitle: "Elektryk samochodowy Wrocław | Nexar Garage",
    metaDescription:
      "Elektryk samochodowy we Wrocławiu. Diagnostyka instalacji, akumulatorów, alternatorów, rozruszników i usterek elektrycznych w Nexar Garage.",
    heroLabel: {
      pl: "Elektryk samochodowy Wrocław",
      en: "Auto electrician Wrocław",
    },
    heroSummary: {
      pl: "Szukamy przyczyny problemów z prądem, ładowaniem i osprzętem elektrycznym bez zgadywania i przypadkowej wymiany części.",
      en: "We trace charging, power and electrical faults without guesswork or random parts replacement.",
    },
    price: {
      pl: "od 300 zł",
      en: "from PLN 300",
    },
    leadTime: {
      pl: "od 1 dnia",
      en: "from 1 day",
    },
    scopeItems: [
      { pl: "Diagnostyka akumulatora, alternatora i rozrusznika.", en: "Diagnostics of the battery, alternator and starter motor." },
      { pl: "Naprawa usterek wiązek, bezpieczników i połączeń elektrycznych.", en: "Repair of harness, fuse and electrical connection faults." },
      { pl: "Weryfikacja problemów z oświetleniem, komfortem i zasilaniem modułów.", en: "Verification of lighting, comfort-system and module power issues." },
      { pl: "Analiza poboru prądu i usterek rozładowujących akumulator.", en: "Parasitic drain analysis and faults that discharge the battery." },
    ],
    benefitItems: [
      { pl: "Połączenie diagnostyki komputerowej i pomiarów elektrycznych.", en: "Combination of computer diagnostics and electrical measurements." },
      { pl: "Sprawdzony proces naprawy bez zbędnych kosztów.", en: "A proven repair process without unnecessary cost." },
      { pl: "Obsługa popularnych i bardziej wymagających modeli aut.", en: "Support for popular and more demanding vehicle models." },
    ],
    processItems: [
      { pl: "Wstępna diagnoza objawów i pomiar napięć.", en: "Initial diagnosis of symptoms and voltage measurements." },
      { pl: "Lokalizacja źródła problemu w instalacji lub podzespole.", en: "Pinpointing the issue in the wiring or component." },
      { pl: "Naprawa lub wymiana elementu i kontrola końcowa.", en: "Repair or replacement followed by a final check." },
    ],
    faq: [
      { question: { pl: "Czy sprawdzacie problem z rozładowującym się akumulatorem?", en: "Do you diagnose a battery that keeps discharging?" }, answer: { pl: "Tak. Sprawdzamy pobór prądu, stan akumulatora i ładowanie, aby wskazać rzeczywistą przyczynę problemu.", en: "Yes. We check parasitic drain, battery health and charging performance to find the real cause." } },
      { question: { pl: "Czy naprawiacie alternatory i rozruszniki?", en: "Do you repair alternators and starter motors?" }, answer: { pl: "Diagnozujemy ich stan i w zależności od wyniku proponujemy naprawę, regenerację lub wymianę.", en: "We diagnose their condition and then recommend repair, refurbishment or replacement depending on the result." } },
      { question: { pl: "Czy usterki elektryczne wymagają zostawienia auta?", en: "Do electrical faults require leaving the car at the workshop?" }, answer: { pl: "Przy prostych usterkach nie zawsze, ale bardziej złożona diagnostyka instalacji może wymagać pozostawienia auta na dłużej.", en: "Not always for simple faults, but more complex electrical diagnosis may require the car to stay longer." } },
    ],
    relatedSlugs: ["diagnostyka-komputerowa", "serwis-i-naprawy", "klimatyzacja-samochodowa"],
  },
  {
    num: "05",
    slug: "klimatyzacja-samochodowa",
    bookingValue: "ac",
    title: {
      pl: "Klimatyzacja samochodowa",
      en: "Car air conditioning",
    },
    shortDescription: {
      pl: "Serwis klimatyzacji: napełnianie, odgrzybianie, test szczelności i przywracanie wydajnego chłodzenia.",
      en: "Air conditioning service: recharge, sanitising, leak tests and restoring cooling performance.",
    },
    metaTitle: "Klimatyzacja samochodowa Wrocław | Serwis klimatyzacji | Nexar Garage",
    metaDescription:
      "Klimatyzacja samochodowa we Wrocławiu. Nabijanie klimatyzacji, odgrzybianie, kontrola szczelności i serwis układu chłodzenia w Nexar Garage.",
    heroLabel: {
      pl: "Klimatyzacja samochodowa Wrocław",
      en: "Car air conditioning Wrocław",
    },
    heroSummary: {
      pl: "Przywracamy skuteczne chłodzenie i sprawdzamy szczelność układu, zanim drobny problem stanie się kosztowną awarią.",
      en: "We restore efficient cooling and check the system for leaks before a small issue turns into an expensive failure.",
    },
    price: {
      pl: "150-290 zł",
      en: "PLN 150-290",
    },
    leadTime: {
      pl: "ok. 1 h",
      en: "about 1 h",
    },
    scopeItems: [
      { pl: "Napełnianie czynnikiem, olejem i kontrola parametrów pracy układu.", en: "Recharge of refrigerant, oil and system performance checks." },
      { pl: "Odgrzybianie oraz poprawa komfortu i jakości powietrza w kabinie.", en: "Sanitising for better cabin comfort and air quality." },
      { pl: "Test szczelności i ocena skuteczności chłodzenia.", en: "Leak testing and cooling performance assessment." },
      { pl: "Informacja o koniecznych naprawach, jeśli układ traci wydajność.", en: "Clear guidance on repairs if the system is losing performance." },
    ],
    benefitItems: [
      { pl: "Lepszy komfort jazdy latem i mniejsze ryzyko zaparowanych szyb.", en: "Better summer comfort and less risk of fogged windows." },
      { pl: "Kontrola szczelności przed kolejnym sezonem.", en: "Leak control before the next season." },
      { pl: "Możliwość połączenia z innymi pracami serwisowymi podczas jednej wizyty.", en: "Can be combined with other service jobs in a single visit." },
    ],
    processItems: [
      { pl: "Kontrola stanu układu i wydajności chłodzenia.", en: "Inspection of the system condition and cooling efficiency." },
      { pl: "Serwis czynnika, oleju oraz odgrzybianie układu.", en: "Refrigerant and oil service followed by sanitising." },
      { pl: "Końcowa kontrola temperatury nawiewu i szczelności.", en: "Final vent-temperature and leak check." },
    ],
    faq: [
      { question: { pl: "Jak często serwisować klimatyzację samochodową?", en: "How often should car air conditioning be serviced?" }, answer: { pl: "Najczęściej raz w roku lub przed sezonem letnim, szczególnie jeśli spada wydajność chłodzenia lub pojawia się nieprzyjemny zapach.", en: "Usually once a year or before summer, especially if cooling performance drops or unpleasant smells appear." } },
      { question: { pl: "Czy wykonujecie test szczelności klimatyzacji?", en: "Do you perform air conditioning leak tests?" }, answer: { pl: "Tak. Przy serwisie sprawdzamy szczelność układu, aby uniknąć szybkiej utraty czynnika po napełnieniu.", en: "Yes. We check the system for leaks to prevent rapid refrigerant loss after servicing." } },
      { question: { pl: "Czy odgrzybianie klimatyzacji jest dostępne od ręki?", en: "Is A/C sanitising available right away?" }, answer: { pl: "W większości przypadków tak. Tę usługę można zwykle wykonać podczas jednej wizyty.", en: "In most cases, yes. This service can usually be completed during a single appointment." } },
    ],
    relatedSlugs: ["diagnostyka-komputerowa", "serwis-i-naprawy", "elektryk-samochodowy"],
  },
  {
    num: "06",
    slug: "geometria-kol",
    bookingValue: "alignment",
    title: {
      pl: "Geometria kół",
      en: "Wheel alignment",
    },
    shortDescription: {
      pl: "Precyzyjne ustawienie geometrii 3D dla stabilnej jazdy, prostego toru i równomiernego zużycia opon.",
      en: "Precise 3D wheel alignment for stable driving, straight tracking and even tyre wear.",
    },
    metaTitle: "Geometria kół Wrocław | Ustawienie zbieżności | Nexar Garage",
    metaDescription:
      "Geometria kół we Wrocławiu. Ustawienie zbieżności i kontrola geometrii 3D w Nexar Garage. Popraw prowadzenie auta i ogranicz zużycie opon.",
    heroLabel: {
      pl: "Geometria kół Wrocław",
      en: "Wheel alignment Wrocław",
    },
    heroSummary: {
      pl: "Ustawiamy geometrię po naprawach zawieszenia, wymianie opon albo wtedy, gdy auto nie jedzie prosto.",
      en: "We perform wheel alignment after suspension repairs, tyre changes or whenever the car no longer tracks straight.",
    },
    price: {
      pl: "180-250 zł",
      en: "PLN 180-250",
    },
    leadTime: {
      pl: "ok. 1 h",
      en: "about 1 h",
    },
    scopeItems: [
      { pl: "Pomiar i ustawienie geometrii na nowoczesnym stanowisku 3D.", en: "Measurement and adjustment using a modern 3D alignment rig." },
      { pl: "Kontrola zbieżności oraz podstawowych parametrów prowadzenia.", en: "Toe adjustment and control of essential handling parameters." },
      { pl: "Ocena wpływu zawieszenia i ogumienia na tor jazdy auta.", en: "Assessment of how suspension and tyres affect the car's road tracking." },
      { pl: "Rekomendacja dalszych napraw, jeśli geometria nie daje się ustawić poprawnie.", en: "Recommendations for further repairs if proper alignment cannot be achieved." },
    ],
    benefitItems: [
      { pl: "Lepsza stabilność auta i mniejsze zużycie opon.", en: "Better stability and reduced tyre wear." },
      { pl: "Właściwe ustawienie po serwisie zawieszenia lub kolizji.", en: "Proper adjustment after suspension work or a collision." },
      { pl: "Możliwość połączenia z wymianą opon podczas jednej wizyty.", en: "Can be combined with tyre service in one visit." },
    ],
    processItems: [
      { pl: "Wstępna ocena objawów i kontrola ustawienia kierownicy.", en: "Initial symptom review and steering wheel position check." },
      { pl: "Pomiar geometrii i korekta parametrów na stanowisku 3D.", en: "Alignment measurement and parameter correction on the 3D rig." },
      { pl: "Końcowy wydruk lub omówienie ustawień po zakończeniu prac.", en: "Final printout or review of the alignment settings after completion." },
    ],
    faq: [
      { question: { pl: "Kiedy warto ustawić geometrię kół?", en: "When should wheel alignment be checked?" }, answer: { pl: "Po naprawie zawieszenia, po uderzeniu w krawężnik, przy nierównym zużyciu opon albo gdy auto ściąga podczas jazdy.", en: "After suspension work, after hitting a curb, with uneven tyre wear or when the car pulls while driving." } },
      { question: { pl: "Czy geometria pomaga ograniczyć zużycie opon?", en: "Can wheel alignment reduce tyre wear?" }, answer: { pl: "Tak. Prawidłowa geometria pomaga utrzymać równomierny kontakt opony z nawierzchnią i ogranicza jej szybsze zużycie.", en: "Yes. Proper alignment helps keep even tyre contact with the road and reduces excessive wear." } },
      { question: { pl: "Czy mogę połączyć geometrię z wymianą opon?", en: "Can I combine alignment with a tyre change?" }, answer: { pl: "Tak. To częsty i praktyczny zestaw usług, szczególnie przy sezonowej wymianie opon.", en: "Yes. This is a common and practical combination, especially during seasonal tyre changes." } },
    ],
    relatedSlugs: ["wymiana-opon", "serwis-i-naprawy", "diagnostyka-komputerowa"],
  },
];

export const getServiceBySlug = (slug?: string) =>
  servicePages.find((service) => service.slug === slug);

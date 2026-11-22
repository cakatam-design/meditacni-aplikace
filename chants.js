/* Zpěvy ze zpěvníku Zenové školy Kwan Um: nahrávka + stránky zpěvníku.
   chars = množství textu na stránce (váha pro posun textu podle nahrávky).
   audio může být pole nahrávek přehrávaných za sebou; durations jsou pak jejich délky v sekundách. */

const CHANTS = [
  {
    "id": "ranni-zvon",
    "title": "Zpěv ranního zvonu",
    "audio": "audio/1.mp3",
    "pages": [
      {
        "src": "zpevnik/p06.png",
        "w": 858,
        "h": 1222,
        "chars": 735
      },
      {
        "src": "zpevnik/p07.png",
        "w": 858,
        "h": 1225,
        "chars": 748
      },
      {
        "src": "zpevnik/p08.png",
        "w": 858,
        "h": 1119,
        "chars": 485
      }
    ]
  },
  {
    "id": "vecerni-zvon",
    "title": "Zpěv večerního zvonu",
    "audio": "audio/2.mp3",
    "pages": [
      {
        "src": "zpevnik/p09.png",
        "w": 507,
        "h": 952,
        "chars": 188
      }
    ]
  },
  {
    "id": "tri-klenoty",
    "title": "Pocta třem klenotům",
    "audio": "audio/3.mp3",
    "pages": [
      {
        "src": "zpevnik/p10.png",
        "w": 729,
        "h": 1111,
        "chars": 439
      },
      {
        "src": "zpevnik/p11.png",
        "w": 729,
        "h": 1146,
        "chars": 566
      }
    ]
  },
  {
    "id": "sutra-srdce-kr",
    "title": "Sútra srdce (korejsky)",
    "audio": "audio/4.mp3",
    "pages": [
      {
        "src": "zpevnik/p12.png",
        "w": 837,
        "h": 1135,
        "chars": 567
      },
      {
        "src": "zpevnik/p13.png",
        "w": 837,
        "h": 717,
        "chars": 474
      }
    ]
  },
  {
    "id": "sutra-srdce-en",
    "title": "Sútra srdce (anglicky)",
    "audio": "audio/5.mp3",
    "pages": [
      {
        "src": "zpevnik/p16.png",
        "w": 824,
        "h": 1222,
        "chars": 664
      },
      {
        "src": "zpevnik/p17.png",
        "w": 824,
        "h": 1187,
        "chars": 816
      }
    ]
  },
  {
    "id": "velka-dharani",
    "title": "Velká dháraní",
    "audio": "audio/6.mp3",
    "pages": [
      {
        "src": "zpevnik/p18.png",
        "w": 658,
        "h": 1222,
        "chars": 675
      },
      {
        "src": "zpevnik/p19.png",
        "w": 658,
        "h": 1084,
        "chars": 601
      }
    ]
  },
  {
    "id": "tisic-oci",
    "title": "Sútra tisíce očí a rukou",
    "audio": ["audio/7.mp3", "audio/8.mp3"],
    "durations": [96.87, 732.13],
    "pages": [
      {
        "src": "zpevnik/p20.png",
        "w": 899,
        "h": 1161,
        "chars": 617
      },
      {
        "src": "zpevnik/p21.png",
        "w": 835,
        "h": 1222,
        "chars": 1006
      },
      {
        "src": "zpevnik/p22.png",
        "w": 835,
        "h": 1219,
        "chars": 800
      },
      {
        "src": "zpevnik/p23.png",
        "w": 835,
        "h": 1222,
        "chars": 781
      },
      {
        "src": "zpevnik/p24.png",
        "w": 835,
        "h": 1222,
        "chars": 801
      },
      {
        "src": "zpevnik/p25.png",
        "w": 835,
        "h": 1151,
        "chars": 711
      },
      {
        "src": "zpevnik/p26.png",
        "w": 835,
        "h": 1222,
        "chars": 666
      },
      {
        "src": "zpevnik/p27.png",
        "w": 835,
        "h": 1187,
        "chars": 682
      }
    ]
  },
  {
    "id": "kwanseum-bosal",
    "title": "Kwanseum Bosal",
    "audio": "audio/9.mp3",
    "pages": [
      {
        "src": "zpevnik/p28.png",
        "w": 863,
        "h": 1180,
        "chars": 657
      },
      {
        "src": "zpevnik/p29.png",
        "w": 863,
        "h": 1209,
        "chars": 772
      }
    ]
  }
];

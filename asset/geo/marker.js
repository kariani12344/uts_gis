var markers = [
    {
        'kategori': 'kantor_camat',
        'icon': getIcon('camat.jpg'),
        'data': [
            {
                'name': 'Kantor Camat Lembar',
                'latlang': [-8.716859655478748, 116.08230821751584]
            },
            {
                'name': 'Kantor Camat Sekotong',
                'latlang': [-8.773867297018363, 116.04952089656535]
            },
            {
                'name': 'Kantor Camat Gerung',
                'latlang': [-8.679867898003218, 116.1295150942269]
            },
            {
                'name': 'Kantor Camat Kuripan',
                'latlang': [-8.66815873644333, 116.1695121951856]


            },
        ]
    },
    {
        'kategori': 'keamanan',
        'icon': getIcon('keamanan.png'),
        'data': [
            {
                'name': 'Polsek Labu Api Police Station',
                'latlang': [-8.638691218636277, 116.10234618029631]
            },
            {
                'name': 'Polsek Gerung',
                'latlang': [-8.681541542175244, 116.1248338189941]
            },
            {
                'name': 'Polsek Lembar Resort Lombok Barat',
                'latlang': [-8.729784867941799, 116.08633786481208]
            },
            {
                'name': 'Polsek Narmada',
                'latlang': [-8.593405645689982, 116.19739276333027]


            },

        ]
    },
    {
        'kategori': 'kesehatan',
        'icon': getIcon('kesehatan.png'),
        'data': [
            {
                'name': 'Puskesmas Lingsar',
                'latlang': [-8.60574146822386, 116.1399442107942]
            },
            {
                'name': 'Puskesmas Pembantu Lingsar',
                'latlang': [-8.568169055146022, 116.18222501349781]
            },
            {
                'name': 'Puskesmas Sigerongan',
                'latlang': [-8.563982710588354, 116.15303565597218]
            },
            {
                'name': 'Rumah Sakit Umum Daerah Patut Patuh Patju',
                'latlang': [-8.67699777531967, 116.12852550710969]
            },
        ]
    },
    {
        'kategori': 'pendidikan',
        'icon': getIcon('pendidikan.png'),
        'data': [
            {
                'name': 'SD Negeri 1 Sekotong Tengah',
                'latlang': [-8.77564140007199, 116.04985967374027]
            },
            {
                'name': 'SMPN 1 SEKOTONG',
                'latlang': [-8.77741061281111, 116.04806949469086]
            },
            {
                'name': 'Yayasan Darul Habib Bintaur',
                'latlang': [-8.837205042670412, 116.09640420200277]
            },
            {
                'name': 'SDI TARBIATUL ULUM',
                'latlang': [-8.752110064241315, 116.08387298404018]

            },
        ]
    },
    {
        'kategori': 'pariwisata',
        'icon': getIcon('pariwisata.jpg'),
        'data': [
            {
                'name': 'Ekowisata Mangrove Bagek Kembar',
                'latlang': [-8.76526905347956, 116.05223875907218]
            },
            {
                'name': 'Mangrove Sekotong Tengah',
                'latlang': [-8.76315921595951, 116.0467437196394]

            },
            {
                'name': 'PT. PANTAI DAMAI SEJAHTERA',
                'latlang': [-8.744539129288594, 116.06581267457514]

            },
            {
                'name': 'Bukit Batu Idung (BBI)',
                'latlang': [-8.705325687422361, 116.10615128488384]

            },


        ]
    }
];


function getIcon(icon) {
    var greenIcon = L.icon({
        iconUrl: 'asset/img/' + icon,
        iconSize: [40, 40], // size of the icon
        iconAnchor: [22, 44], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return greenIcon;
}

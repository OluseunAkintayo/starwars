const ships = [
    {
        "id": 1,
        "name": "CR90 corvette", 
        "model": "CR90 corvette", 
        "manufacturer": "Corellian Engineering Corporation", 
        "cost_in_credits": 3500000, 
        "length": "150", 
        "max_atmosphering_speed": "950", 
        "crew": "30-165", 
        "passengers": "600", 
        "cargo_capacity": "3000000", 
        "consumables": "1 year", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "60",
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/swfanon/images/a/ab/CR90_corvette.png",
        "starship_class": "corvette", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/3/", 
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-10T14:20:33.369000Z", 
        "edited": "2014-12-20T21:23:49.867000Z", 
        "url": "http://swapi.dev/api/starships/2/"
    }, 
    {
        "id": 2,
        "name": "Star Destroyer", 
        "model": "Imperial I-class Star Destroyer", 
        "manufacturer": "Kuat Drive Yards", 
        "cost_in_credits": "150000000", 
        "length": "1,600", 
        "max_atmosphering_speed": "975", 
        "crew": "47,060", 
        "passengers": "n/a", 
        "cargo_capacity": "36000000", 
        "consumables": "2 years", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "60",
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://starwarsblog.starwars.com/wp-content/uploads/2019/09/lego-star-destroyer-TALL.jpg",
        "starship_class": "Star Destroyer", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-10T15:08:19.848000Z", 
        "edited": "2014-12-20T21:23:49.870000Z", 
        "url": "http://swapi.dev/api/starships/3/"
    }, 
    {
        "id": 3,
        "name": "Sentinel-class landing craft", 
        "model": "Sentinel-class landing craft", 
        "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks", 
        "cost_in_credits": "240000", 
        "length": "38", 
        "max_atmosphering_speed": "1000", 
        "crew": "5", 
        "passengers": "75", 
        "cargo_capacity": "180000", 
        "consumables": "1 month", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "70",
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://lh3.googleusercontent.com/proxy/f1xRYMApVKYQYdI1C6e296ok7WWOiJzAzymCzmTfwyHPiWU3YLEQApAspPWZHzO7rZVRkuYXORvupTqD6ex--6o055oh2dR6RuDXc_hARqcTbA",
        "starship_class": "landing craft", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/1/"
        ], 
        "created": "2014-12-10T15:48:00.586000Z", 
        "edited": "2014-12-20T21:23:49.873000Z", 
        "url": "http://swapi.dev/api/starships/5/"
    }, 
    {
        "id": 4,
        "name": "Death Star", 
        "model": "DS-1 Orbital Battle Station", 
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems", 
        "cost_in_credits": "1000000000000", 
        "length": "120000", 
        "max_atmosphering_speed": "n/a", 
        "crew": "342,953", 
        "passengers": "843,342", 
        "cargo_capacity": "1000000000000", 
        "consumables": "3 years", 
        "hyperdrive_rating": "4.0", 
        "MGLT": "10",
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/8/87/Imperial_Might_RotE.png",
        "starship_class": "Deep Space Mobile Battlestation", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/1/"
        ], 
        "created": "2014-12-10T16:36:50.509000Z", 
        "edited": "2014-12-20T21:26:24.783000Z", 
        "url": "http://swapi.dev/api/starships/9/"
    }, 
    {
        "id": 5,
        "name": "Millennium Falcon", 
        "model": "YT-1300 light freighter", 
        "manufacturer": "Corellian Engineering Corporation", 
        "cost_in_credits": "100000", 
        "length": "34.37", 
        "max_atmosphering_speed": "1050", 
        "crew": "4", 
        "passengers": "6", 
        "cargo_capacity": "100000", 
        "consumables": "2 months", 
        "hyperdrive_rating": "0.5", 
        "MGLT": "75", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://www.renderhub.com/squir/star-wars-millennium-falcon/star-wars-millennium-falcon-01.jpg",
        "starship_class": "Light freighter", 
        "pilots": [
            "http://swapi.dev/api/people/13/", 
            "http://swapi.dev/api/people/14/", 
            "http://swapi.dev/api/people/25/", 
            "http://swapi.dev/api/people/31/"
        ], 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-10T16:59:45.094000Z", 
        "edited": "2014-12-20T21:23:49.880000Z", 
        "url": "http://swapi.dev/api/starships/10/"
    }, 
    {
        "id": 6,
        "name": "Y-wing", 
        "model": "BTL Y-wing", 
        "manufacturer": "Koensayr Manufacturing", 
        "cost_in_credits": "134999", 
        "length": "14", 
        "max_atmosphering_speed": "1000km", 
        "crew": "2", 
        "passengers": "0", 
        "cargo_capacity": "110", 
        "consumables": "1 week", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "80", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg",
        "starship_class": "assault starfighter", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-12T11:00:39.817000Z", 
        "edited": "2014-12-20T21:23:49.883000Z", 
        "url": "http://swapi.dev/api/starships/11/"
    }, 
    {
        "id": 7,
        "name": "X-wing", 
        "model": "T-65 X-wing", 
        "manufacturer": "Incom Corporation", 
        "cost_in_credits": "149999", 
        "length": "12.5", 
        "max_atmosphering_speed": "1050", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "110", 
        "consumables": "1 week", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "100", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://www.revell.de/out/pictures/master/product/1/06763_smpw_poes_boosted_x_wing_fighter.jpg",
        "starship_class": "Starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/1/", 
            "http://swapi.dev/api/people/9/", 
            "http://swapi.dev/api/people/18/", 
            "http://swapi.dev/api/people/19/"
        ], 
        "films": [
            "http://swapi.dev/api/films/1/", 
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-12T11:19:05.340000Z", 
        "edited": "2014-12-20T21:23:49.886000Z", 
        "url": "http://swapi.dev/api/starships/12/"
    }, 
    {
        "id": 8,
        "name": "TIE Advanced x1", 
        "model": "Twin Ion Engine Advanced x1", 
        "manufacturer": "Sienar Fleet Systems", 
        "cost_in_credits": "unknown", 
        "length": "9.2", 
        "max_atmosphering_speed": "1200", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "150", 
        "consumables": "5 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "105", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://bbts1.azureedge.net/images/p/full/2021/01/0cbfc29f-020e-479d-98f4-18252af8a8fd.jpg",
        "starship_class": "Starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/4/"
        ], 
        "films": [
            "http://swapi.dev/api/films/1/"
        ], 
        "created": "2014-12-12T11:21:32.991000Z", 
        "edited": "2014-12-20T21:23:49.889000Z", 
        "url": "http://swapi.dev/api/starships/13/"
    }, 
    {
        "id": 9,
        "name": "Executor", 
        "model": "Executor-class star dreadnought", 
        "manufacturer": "Kuat Drive Yards, Fondor Shipyards", 
        "cost_in_credits": "1143350000", 
        "length": "19000", 
        "max_atmosphering_speed": "n/a", 
        "crew": "279,144", 
        "passengers": "38000", 
        "cargo_capacity": "250000000", 
        "consumables": "6 years", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "40", 
        "poster": "https://img1.cgtrader.com/items/1881667/5cae49b868/star-wars-executor-class-star-destroyer-3d-model-low-poly-gltf-glb.jpg",
        "inCart": false,
        "count": 0,
        "total": 0,
        "starship_class": "Star dreadnought", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-15T12:31:42.547000Z", 
        "edited": "2014-12-20T21:23:49.893000Z", 
        "url": "http://swapi.dev/api/starships/15/"
    }, 
    {
        "id": 10,
        "name": "Rebel transport", 
        "model": "GR-75 medium transport", 
        "manufacturer": "Gallofree Yards, Inc.", 
        "cost_in_credits": "unknown", 
        "length": "90", 
        "max_atmosphering_speed": "650", 
        "crew": "6", 
        "passengers": "90", 
        "cargo_capacity": "19000000", 
        "consumables": "6 months", 
        "hyperdrive_rating": "4.0", 
        "MGLT": "20", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://i.ytimg.com/vi/S3PcdReHat8/maxresdefault.jpg",
        "starship_class": "Medium transport", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-15T12:34:52.264000Z", 
        "edited": "2014-12-20T21:23:49.895000Z", 
        "url": "http://swapi.dev/api/starships/17/"
    },
    {
        "id": 11,
        "name": "Slave 1", 
        "model": "Firespray-31-class patrol and attack", 
        "manufacturer": "Kuat Systems Engineering", 
        "cost_in_credits": "unknown", 
        "length": "21.5", 
        "max_atmosphering_speed": "1000", 
        "crew": "1", 
        "passengers": "6", 
        "cargo_capacity": "70000", 
        "consumables": "1 month", 
        "hyperdrive_rating": "3.0", 
        "MGLT": "70", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://i.redd.it/tb5y8jk1qby41.jpg",
        "starship_class": "Patrol craft", 
        "pilots": [
            "http://swapi.dev/api/people/22/"
        ], 
        "films": [
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-15T13:00:56.332000Z", 
        "edited": "2014-12-20T21:23:49.897000Z", 
        "url": "http://swapi.dev/api/starships/21/"
    }, 
    {
        "id": 12,
        "name": "Imperial shuttle", 
        "model": "Lambda-class T-4a shuttle", 
        "manufacturer": "Sienar Fleet Systems", 
        "cost_in_credits": "240000", 
        "length": "20", 
        "max_atmosphering_speed": "850", 
        "crew": "6", 
        "passengers": "20", 
        "cargo_capacity": "80000", 
        "consumables": "2 months", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "50", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://www.brickfanatics.com/wp-content/uploads/LEGO-Star-Wars-75302-Imperial-Shuttle-FEATURED-800x445.jpg",
        "starship_class": "Armed government transport", 
        "pilots": [
            "http://swapi.dev/api/people/1/", 
            "http://swapi.dev/api/people/13/", 
            "http://swapi.dev/api/people/14/"
        ], 
        "films": [
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-15T13:04:47.235000Z", 
        "edited": "2014-12-20T21:23:49.900000Z", 
        "url": "http://swapi.dev/api/starships/22/"
    }, 
    {
        "id": 13,
        "name": "EF76 Nebulon-B escort frigate", 
        "model": "EF76 Nebulon-B escort frigate", 
        "manufacturer": "Kuat Drive Yards", 
        "cost_in_credits": "8500000", 
        "length": "300", 
        "max_atmosphering_speed": "800", 
        "crew": "854", 
        "passengers": "75", 
        "cargo_capacity": "6000000", 
        "consumables": "2 years", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "40", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/awakening-of-the-rebellion/images/4/43/AotR_Nebulon-B_%281%29.png",
        "starship_class": "Escort ship", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/2/", 
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-15T13:06:30.813000Z", 
        "edited": "2014-12-20T21:23:49.902000Z", 
        "url": "http://swapi.dev/api/starships/23/"
    }, 
    {
        "id": 14,
        "name": "Calamari Cruiser", 
        "model": "MC80 Liberty type Star Cruiser", 
        "manufacturer": "Mon Calamari shipyards", 
        "cost_in_credits": "104000000", 
        "length": "1200", 
        "max_atmosphering_speed": "n/a", 
        "crew": "5400", 
        "passengers": "1200", 
        "cargo_capacity": "unknown", 
        "consumables": "2 years", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "60", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://i.pinimg.com/originals/26/4b/6b/264b6bf317ce5cfcdf3f749702c293b7.jpg",
        "starship_class": "Star Cruiser", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-18T10:54:57.804000Z", 
        "edited": "2014-12-20T21:23:49.904000Z", 
        "url": "http://swapi.dev/api/starships/27/"
    }, 
    {
        "id": 15,
        "name": "A-wing", 
        "model": "RZ-1 A-wing Interceptor", 
        "manufacturer": "Alliance Underground Engineering, Incom Corporation", 
        "cost_in_credits": "175000", 
        "length": "9.6", 
        "max_atmosphering_speed": "1300", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "40", 
        "consumables": "1 week", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "120", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/e/ec/Resistance_A-wing_SWCT.png",
        "starship_class": "Starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/29/"
        ], 
        "films": [
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-18T11:16:34.542000Z", 
        "edited": "2014-12-20T21:23:49.907000Z", 
        "url": "http://swapi.dev/api/starships/28/"
    }, 
    {
        "id": 16,
        "name": "B-wing", 
        "model": "A/SF-01 B-wing starfighter", 
        "manufacturer": "Slayn & Korpil", 
        "cost_in_credits": "220000", 
        "length": "16.9", 
        "max_atmosphering_speed": "950", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "45", 
        "consumables": "1 week", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "91", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://i.pinimg.com/originals/ac/f6/d1/acf6d1b09276dd35b1be3fe34a051370.jpg",
        "starship_class": "Assault Starfighter", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/3/"
        ], 
        "created": "2014-12-18T11:18:04.763000Z", 
        "edited": "2014-12-20T21:23:49.909000Z", 
        "url": "http://swapi.dev/api/starships/29/"
    }, 
    {
        "id": 17,
        "name": "Republic Cruiser", 
        "model": "Consular-class cruiser", 
        "manufacturer": "Corellian Engineering Corporation", 
        "cost_in_credits": "unknown", 
        "length": "115", 
        "max_atmosphering_speed": "900", 
        "crew": "9", 
        "passengers": "16", 
        "cargo_capacity": "unknown", 
        "consumables": "unknown", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "unknown", 
        "poster": "https://static.wikia.nocookie.net/starwars/images/e/ec/Venator_clonewars.jpg",
        "inCart": false,
        "count": 0,
        "total": 0,
        "starship_class": "Space cruiser", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/4/"
        ], 
        "created": "2014-12-19T17:01:31.488000Z", 
        "edited": "2014-12-20T21:23:49.912000Z", 
        "url": "http://swapi.dev/api/starships/31/"
    }, 
    {
        "id": 18,
        "name": "Droid control ship", 
        "model": "Lucrehulk-class Droid Control Ship", 
        "manufacturer": "Hoersch-Kessel Drive, Inc.", 
        "cost_in_credits": "unknown", 
        "length": "3170", 
        "max_atmosphering_speed": "n/a", 
        "crew": "175", 
        "passengers": "139000", 
        "cargo_capacity": "4000000000", 
        "consumables": "500 days", 
        "hyperdrive_rating": "2.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/5/5e/Droid_Control_Ship.png",
        "starship_class": "Droid control ship", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/4/", 
            "http://swapi.dev/api/films/5/", 
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-19T17:04:06.323000Z", 
        "edited": "2014-12-20T21:23:49.915000Z", 
        "url": "http://swapi.dev/api/starships/32/"
    }, 
    {
        "id": 19,
        "name": "Naboo fighter", 
        "model": "N-1 starfighter", 
        "manufacturer": "Theed Palace Space Vessel Engineering Corps", 
        "cost_in_credits": "200000", 
        "length": "11", 
        "max_atmosphering_speed": "1100", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "65", 
        "consumables": "7 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/0/01/Aaaaaaa.jpg",
        "starship_class": "Starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/11/", 
            "http://swapi.dev/api/people/35/", 
            "http://swapi.dev/api/people/60/"
        ], 
        "films": [
            "http://swapi.dev/api/films/4/", 
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-19T17:39:17.582000Z", 
        "edited": "2014-12-20T21:23:49.917000Z", 
        "url": "http://swapi.dev/api/starships/39/"
    }, 
    {
        "id": 20,
        "name": "Naboo Royal Starship", 
        "model": "J-type 327 Nubian royal starship", 
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
        "cost_in_credits": "unknown", 
        "length": "76", 
        "max_atmosphering_speed": "920", 
        "crew": "8", 
        "passengers": "unknown", 
        "cargo_capacity": "unknown", 
        "consumables": "unknown", 
        "hyperdrive_rating": "1.8", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/9/9e/Naboo_Royal_Starship.png",
        "starship_class": "yacht", 
        "pilots": [
            "http://swapi.dev/api/people/39/"
        ], 
        "films": [
            "http://swapi.dev/api/films/4/"
        ], 
        "created": "2014-12-19T17:45:03.506000Z", 
        "edited": "2014-12-20T21:23:49.919000Z", 
        "url": "http://swapi.dev/api/starships/40/"
    },
    {
        "id": 21,
        "name": "Scimitar", 
        "model": "Star Courier", 
        "manufacturer": "Republic Sienar Systems", 
        "cost_in_credits": "55000000", 
        "length": "26.5", 
        "max_atmosphering_speed": "1180", 
        "crew": "1", 
        "passengers": "6", 
        "cargo_capacity": "2500000", 
        "consumables": "30 days", 
        "hyperdrive_rating": "1.5", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://lumiere-a.akamaihd.net/v1/images/databank_sithinfiltrator_01_169_1bd0a638.jpeg",
        "starship_class": "Space Transport", 
        "pilots": [
            "http://swapi.dev/api/people/44/"
        ], 
        "films": [
            "http://swapi.dev/api/films/4/"
        ], 
        "created": "2014-12-20T09:39:56.116000Z", 
        "edited": "2014-12-20T21:23:49.922000Z", 
        "url": "http://swapi.dev/api/starships/41/"
    }, 
    {
        "id": 22,
        "name": "J-type diplomatic barge", 
        "model": "J-type diplomatic barge", 
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
        "cost_in_credits": "2000000", 
        "length": "39", 
        "max_atmosphering_speed": "2000", 
        "crew": "5", 
        "passengers": "10", 
        "cargo_capacity": "unknown", 
        "consumables": "1 year", 
        "hyperdrive_rating": "0.7", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/2/2b/Royalcruiser.jpg",
        "starship_class": "Diplomatic barge", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-20T11:05:51.237000Z", 
        "edited": "2014-12-20T21:23:49.925000Z", 
        "url": "http://swapi.dev/api/starships/43/"
    }, 
    {
        "id": 23,
        "name": "AA-9 Coruscant freighter", 
        "model": "Botajef AA-9 Freighter-Liner", 
        "manufacturer": "Botajef Shipyards", 
        "cost_in_credits": "unknown", 
        "length": "390", 
        "max_atmosphering_speed": "unknown", 
        "crew": "unknown", 
        "passengers": "30000", 
        "cargo_capacity": "unknown", 
        "consumables": "unknown", 
        "hyperdrive_rating": "unknown", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/c/c7/Aa9coruscantfreighter.jpg",
        "starship_class": "freighter", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-20T17:24:23.509000Z", 
        "edited": "2014-12-20T21:23:49.928000Z", 
        "url": "http://swapi.dev/api/starships/47/"
    }, 
    {
        "id": 24,
        "name": "Jedi starfighter", 
        "model": "Delta-7 Aethersprite-class interceptor", 
        "manufacturer": "Kuat Systems Engineering", 
        "cost_in_credits": "180000", 
        "length": "8", 
        "max_atmosphering_speed": "1150", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "60", 
        "consumables": "7 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://lumiere-a.akamaihd.net/v1/images/delta-7-starfighter_fe9a59bc.jpeg",
        "starship_class": "Starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/10/", 
            "http://swapi.dev/api/people/58/"
        ], 
        "films": [
            "http://swapi.dev/api/films/5/", 
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T17:35:23.906000Z", 
        "edited": "2014-12-20T21:23:49.930000Z", 
        "url": "http://swapi.dev/api/starships/48/"
    }, 
    {
        "id": 25,
        "name": "H-type Nubian yacht", 
        "model": "H-type Nubian yacht", 
        "manufacturer": "Theed Palace Space Vessel Engineering Corps", 
        "cost_in_credits": "unknown", 
        "length": "47.9", 
        "max_atmosphering_speed": "8000", 
        "crew": "4", 
        "passengers": "unknown", 
        "cargo_capacity": "unknown", 
        "consumables": "unknown", 
        "hyperdrive_rating": "0.9", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/1/10/AmidalasYachtRodia-BJ.png",
        "starship_class": "yacht", 
        "pilots": [
            "http://swapi.dev/api/people/35/"
        ], 
        "films": [
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-20T17:46:46.847000Z", 
        "edited": "2014-12-20T21:23:49.932000Z", 
        "url": "http://swapi.dev/api/starships/49/"
    }, 
    {
        "id": 26,
        "name": "Republic Assault ship", 
        "model": "Acclamator I-class assault ship", 
        "manufacturer": "Rothana Heavy Engineering", 
        "cost_in_credits": "unknown", 
        "length": "752", 
        "max_atmosphering_speed": "unknown", 
        "crew": "700", 
        "passengers": "16000", 
        "cargo_capacity": "11250000", 
        "consumables": "2 years", 
        "hyperdrive_rating": "0.6", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/4/4b/Acclamator.jpg",
        "starship_class": "assault ship", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-20T18:08:42.926000Z", 
        "edited": "2014-12-20T21:23:49.935000Z", 
        "url": "http://swapi.dev/api/starships/52/"
    }, 
    {
        "id": 27,
        "name": "Solar Sailer", 
        "model": "Punworcca 116-class interstellar sloop", 
        "manufacturer": "Huppla Pasa Tisc Shipwrights Collective", 
        "cost_in_credits": "35700", 
        "length": "15.2", 
        "max_atmosphering_speed": "1600", 
        "crew": "3", 
        "passengers": "11", 
        "cargo_capacity": "240", 
        "consumables": "7 days", 
        "hyperdrive_rating": "1.5", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/1/10/CountDookusSolarSailer-WotF.png",
        "starship_class": "yacht", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/5/"
        ], 
        "created": "2014-12-20T18:37:56.969000Z", 
        "edited": "2014-12-20T21:23:49.937000Z", 
        "url": "http://swapi.dev/api/starships/58/"
    }, 
    {
        "id": 28,
        "name": "Trade Federation cruiser", 
        "model": "Providence-class carrier/destroyer", 
        "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.", 
        "cost_in_credits": "125000000", 
        "length": "1088", 
        "max_atmosphering_speed": "1050", 
        "crew": "600", 
        "passengers": "48247", 
        "cargo_capacity": "50000000", 
        "consumables": "4 years", 
        "hyperdrive_rating": "1.5", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/5/5e/Droid_Control_Ship.png",
        "starship_class": "capital ship", 
        "pilots": [
            "http://swapi.dev/api/people/10/", 
            "http://swapi.dev/api/people/11/"
        ], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T19:40:21.902000Z", 
        "edited": "2014-12-20T21:23:49.941000Z", 
        "url": "http://swapi.dev/api/starships/59/"
    }, 
    {
        "id": 29,
        "name": "Theta-class T-2c shuttle", 
        "model": "Theta-class T-2c shuttle", 
        "manufacturer": "Cygnus Spaceworks", 
        "cost_in_credits": "1000000", 
        "length": "18.5", 
        "max_atmosphering_speed": "2000", 
        "crew": "5", 
        "passengers": "16", 
        "cargo_capacity": "50000", 
        "consumables": "56 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "poster": "https://i.pinimg.com/originals/e2/ee/f7/e2eef736ae40d407696a5f47ba65ade3.jpg",
        "inCart": false,
        "count": 0,
        "total": 0,
        "starship_class": "transport", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T19:48:40.409000Z", 
        "edited": "2014-12-20T21:23:49.944000Z", 
        "url": "http://swapi.dev/api/starships/61/"
    }, 
    {
        "id": 30,
        "name": "Republic attack cruiser", 
        "model": "Senator-class Star Destroyer", 
        "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards", 
        "cost_in_credits": "59000000", 
        "length": "1137", 
        "max_atmosphering_speed": "975", 
        "crew": "7400", 
        "passengers": "2000", 
        "cargo_capacity": "20000000", 
        "consumables": "2 years", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "poster": "https://images-na.ssl-images-amazon.com/images/I/71oAWe1Ba2L._AC_SL1500_.jpg",
        "inCart": false,
        "count": 0,
        "total": 0,
        "starship_class": "star destroyer", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T19:52:56.232000Z", 
        "edited": "2014-12-20T21:23:49.946000Z", 
        "url": "http://swapi.dev/api/starships/63/"
    },
    {
        "id": 31,
        "name": "Naboo star skiff", 
        "model": "J-type star skiff", 
        "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated", 
        "cost_in_credits": "unknown", 
        "length": "29.2", 
        "max_atmosphering_speed": "1050", 
        "crew": "3", 
        "passengers": "3", 
        "cargo_capacity": "unknown", 
        "consumables": "unknown", 
        "hyperdrive_rating": "0.5", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://i.ebayimg.com/images/g/ingAAOSwm8tejYRs/s-l400.jpg",
        "starship_class": "yacht", 
        "pilots": [
            "http://swapi.dev/api/people/10/", 
            "http://swapi.dev/api/people/35/"
        ], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T19:55:15.396000Z", 
        "edited": "2014-12-20T21:23:49.948000Z", 
        "url": "http://swapi.dev/api/starships/64/"
    }, 
    {
        "id": 32,
        "name": "Jedi Interceptor", 
        "model": "Eta-2 Actis-class light interceptor", 
        "manufacturer": "Kuat Systems Engineering", 
        "cost_in_credits": "320000", 
        "length": "5.47", 
        "max_atmosphering_speed": "1500", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "60", 
        "consumables": "2 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://lumiere-a.akamaihd.net/v1/images/ETA-2-starfighter-main-image_bedd3aaa.jpeg",
        "starship_class": "starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/10/", 
            "http://swapi.dev/api/people/11/"
        ], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T19:56:57.468000Z", 
        "edited": "2014-12-20T21:23:49.951000Z", 
        "url": "http://swapi.dev/api/starships/65/"
    }, 
    {
        "id": 33,
        "name": "arc-170", 
        "model": "Aggressive Reconnaissance-170 starfighte", 
        "manufacturer": "Incom Corporation, Subpro Corporation", 
        "cost_in_credits": "155000", 
        "length": "14.5", 
        "max_atmosphering_speed": "1000", 
        "crew": "3", 
        "passengers": "0", 
        "cargo_capacity": "110", 
        "consumables": "5 days", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "100", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c1eb3e4d-6e25-4781-8945-afb704e7054e/d8ze29z-6097660f-dad4-43e7-ae49-21cedf997de9.png",
        "starship_class": "starfighter", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T20:03:48.603000Z", 
        "edited": "2014-12-20T21:23:49.953000Z", 
        "url": "http://swapi.dev/api/starships/66/"
    }, 
    {
        "id": 34,
        "name": "Banking clan frigte", 
        "model": "Munificent-class star frigate", 
        "manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries", 
        "cost_in_credits": "57000000", 
        "length": "825", 
        "max_atmosphering_speed": "unknown", 
        "crew": "200", 
        "passengers": "unknown", 
        "cargo_capacity": "40000000", 
        "consumables": "2 years", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://media.moddb.com/cache/images/mods/1/13/12901/thumb_620x2000/new_munificent.JPG",
        "starship_class": "cruiser", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T20:07:11.538000Z", 
        "edited": "2014-12-20T21:23:49.956000Z", 
        "url": "http://swapi.dev/api/starships/68/"
    }, 
    {
        "id": 35,
        "name": "Belbullab-22 starfighter", 
        "model": "Belbullab-22 starfighter", 
        "manufacturer": "Feethan Ottraw Scalable Assemblies", 
        "cost_in_credits": "168000", 
        "length": "6.71", 
        "max_atmosphering_speed": "1100", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "140", 
        "consumables": "7 days", 
        "hyperdrive_rating": "6", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be31d98d-9127-40eb-a14c-8b798541459a/dc5whfg-ea7f1975-d7ae-4572-949f-b407a1601fcf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlMzFkOThkLTkxMjctNDBlYi1hMTRjLThiNzk4NTQxNDU5YVwvZGM1d2hmZy1lYTdmMTk3NS1kN2FlLTQ1NzItOTQ5Zi1iNDA3YTE2MDFmY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ter2N-14OK4fhpC6fpIEWf9Rvq7HYAPfGo2kPuQDTzs",
        "starship_class": "starfighter", 
        "pilots": [
            "http://swapi.dev/api/people/10/", 
            "http://swapi.dev/api/people/79/"
        ], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T20:38:05.031000Z", 
        "edited": "2014-12-20T21:23:49.959000Z", 
        "url": "http://swapi.dev/api/starships/74/"
    }, 
    {
        "id": 36,
        "name": "V-wing", 
        "model": "Alpha-3 Nimbus-class V-wing starfighter", 
        "manufacturer": "Kuat Systems Engineering", 
        "cost_in_credits": "102500", 
        "length": "7.9", 
        "max_atmosphering_speed": "1050", 
        "crew": "1", 
        "passengers": "0", 
        "cargo_capacity": "60", 
        "consumables": "15 hours", 
        "hyperdrive_rating": "1.0", 
        "MGLT": "unknown", 
        "inCart": false,
        "count": 0,
        "total": 0,
        "poster": "https://static.wikia.nocookie.net/starwars/images/a/a9/V-wing_BF2.png",
        "starship_class": "starfighter", 
        "pilots": [], 
        "films": [
            "http://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-20T20:43:04.349000Z", 
        "edited": "2014-12-20T21:23:49.961000Z", 
        "url": "http://swapi.dev/api/starships/75/"
    }
];

export default ships;
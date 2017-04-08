module.exports = {
    "ios_current_build_version": 2,
    "android_current_build_version": 2,
    "update_required": true,
    "build_settings": {
        "2": {
            "status": {
                "dev_server": false,
                "maintance": false,
                "online": true,
                "message": "Server is online."
            },
            "UseCDN": "http://c9oeltrn.cloudimg.io/s/cdn/x/",
            "CropCDN": "http://c9oeltrn.cloudimg.io/s/crop/",
            "apis": {
                "root": "https://sportimo.mod.bz/v1/",
                "gamecards": "https://sportimo.mod.bz/v1/gamecards",
                "data": "https://sportimo.mod.bz/v1/data",
                "users": "https://sportimo.mod.bz/v1/users",
                "questions": "https://sportimo.mod.bz/v1/questions",
                "polls": "https://sportimo.mod.bz/v1/polls",
                "leaderpay": "https://sportimo.mod.bz/leaderpay/v1",
                "socket": "wss://socketserverv2-56658.onmodulus.net/"
            },
            "hashtag": "#sportimo",
            "prizes": true,
            "clientdefaults": {
                "gameCards": {
                    "instant": 15,
                    "overall": 15,
                    "specials": 4,
                    "totalcards": 15
                },
                "hashtag": "#sportimo",
                "destroyOnDelete": true
            }
        },
        "3": {
            "status": {
                "dev_server": true,
                "maintance": false,
                "online": true,
                "server_message": {"en":"Server is online."}
            },
            "UseCDN": "http://c9oeltrn.cloudimg.io/s/cdn/x/",
            "CropCDN": "http://c9oeltrn.cloudimg.io/s/crop/",
            "apis": {
                "root": "https://sportimo_dev.mod.bz/v1/",
                "gamecards": "https://sportimo_dev.mod.bz/v1/gamecards",
                "data": "https://sportimo_dev.mod.bz/v1/data",
                "users": "https://sportimo_dev.mod.bz/v1/users",
                "questions": "https://sportimo_dev.mod.bz/v1/questions",
                "polls": "https://sportimo_dev.mod.bz/v1/polls",
                "leaderpay": "https://sportimo_dev.mod.bz/leaderpay/v1",
                "socket": "wss://socketsserverdevelopment-96598.app.xervo.io/"
            },
            "hashtag": "#sportimo",
            "prizes": false,
            "clientdefaults": {
                "gameCards": {
                    "instant": 15,
                    "overall": 15,
                    "specials": 4,
                    "totalcards": 15
                },
                "hashtag": "#sportimo",
                "destroyOnDelete": true
            }
        }
    }
}
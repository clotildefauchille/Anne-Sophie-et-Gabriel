BEGIN;

DROP TABLE IF EXISTS "range", "answer", "place";


-- CREATE TABLE "range" (
--     "id" SERIAL PRIMARY KEY,
--     "google_sheet_range" TEXT NOT NULL DEFAULT '',
--     "email" TEXT NOT NULL DEFAULT '',
--     "range_id" INTEGER NOT NULL REFERENCES "range"("id"),
--     "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--     "updated_at" TIMESTAMPTZ);

CREATE TABLE "answer" (
    "id" SERIAL PRIMARY KEY,
    "sub" TEXT NOT NULL DEFAULT '',
    "firstname" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "google_sheet_range" TEXT DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "present" BOOLEAN DEFAULT 'false',
    "accompanied" BOOLEAN DEFAULT 'false',
    "firstname_partner" TEXT NOT NULL DEFAULT '',
    "children_number" INTEGER DEFAULT 0,
    "allergy" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "place" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "street" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "contact" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL DEFAULT '',
    "google_map_link" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "place" ("name", "street", "city", "image", "latitude", "longitude", "contact", "type", "google_map_link") 
VALUES
('Abbaye des Prémontrés', '9 Rue Saint-Martin', '54700 Pont-à-Mousson', 'https://lh5.googleusercontent.com/p/AF1QipMiiHo0K7yYfHpVipLXx7RbfJzzIPzJ95LnQrId=w426-h240-k-no', 48.90801751045616, 6.055990925673508, '', 'wedding', 'https://goo.gl/maps/qDfQhdk6DhFuMH2d9'),
('Église Saint-Maximim de Thionville', '3 Place de l’Eglise', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipPThqkctiywCJtxNGVPL6tb-JnYV-rHeG_kOuo9=w408-h282-k-no', 49.35687607852845,6.167122811463277,'', 'wedding', 'https://goo.gl/maps/B8sCZf3yKLEFzj8r8'),
('Mairie de Thionville', '2 Cours du Château', '57100 Thionville', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=H4CIgGyff68q8MLX9t5zAQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=21.293295&pitch=0&thumbfov=100', 49.357798172627156, 6.168185114624695, '', 'wedding', 'https://goo.gl/maps/Ajmav14GCYdAVX5b7'),
('Le Bagatelle Hôtel', '49 Rue Gambetta', '54700 Pont-à-Mousson', 'https://lh3.googleusercontent.com/proxy/NxnSgwD69AarTpshFNgNYgQxi7cjW2w4UGSM3yN2h6fxzS8T1qgp_6dQpIlprRuV7iER8AoIvf9yzC1NpbTYHNExiO9yKwXyDamV0qSBacKGVlclLTxQGH4BuUbJwWxf2F09ZaLVY-a4yyzGPhoRcmiRE-FjDA=w408-h306-k-no', 48.90627601119025, 6.060452157364099, '+33383810364', 'accomodation', 'https://goo.gl/maps/zsPMACGJTC54Ttj69'),
('Le Kyriad Hôtel', '210 Allée de Espace Saint-Martin', '54700 Pont-à-Mousson', 'https://lh5.googleusercontent.com/proxy/lLjk58EKknvXu8tN4TjUaoRz67cz28FZGklL3MvTyZUKGrHeXshkrbXyOhyrvbdcJYvmTNfNkhXMh5_T_i6G9P0K9C2kQJRVssgjHVX83VlEh2tJ1I189z_XTYMbd4Mr-bhrfkGmZqbrHE-kd3vTPrn2jrX9JQc=w408-h306-k-no', 48.90075891808869, 6.064737397845906, '+33383810857', 'accomodation', 'https://goo.gl/maps/Gr64PiWpKXrpvcx49'),
('Le Logis des tuileries', 'Route de Cuvry', '57420 Fey', 'https://lh5.googleusercontent.com/proxy/U-Z9Gd5NgZveZahKZxoLtzh5qvkmITSlWBoficxhV-wm_Ud41TBIXQwtWWk-ZFe-niPnJA1Y2vrDE9eLWphEU3LxQTYoPNejG9sMBE1bFrw6sfit24SfYwTCg7n67HS3BiOMsBmCmlV81w1qoEgSrKKvyBVoXQ=w408-h270-k-no', 49.03576722077627, 6.10897092965827, '+33387520303', 'accomodation', 'https://goo.gl/maps/qbUU2y4MbD3PzSpt7'),
('Hôtel Kyriad Prestige', '9 Allée Raymond Poincaré', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipOQt52gPewncMpmfaMQNdWDPD6E_QvMnVejYXZa=w408-h272-k-no', 49.35745038143733, 6.163538632338005, '+33382503467', 'accomodation', 'https://goo.gl/maps/ei9oZiqeZgUppLa77'),
('Le Logis hôtel des Oliviers', '1 Rue du Four Banal', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipMj6tm-HUiuEX7EMWYm4KUIYD04O0jAJaiFUJ0G=w408-h271-k-no', 49.35792587599282, 6.165711924849858, '+33382537027', 'accomodation', 'https://goo.gl/maps/mwEMYoXqFartzpz5A'),
('le mercure', '2 Rue Georges Ditsch', '57100 Thionville', 'https://lh5.googleusercontent.com/proxy/86aqZtqbVRN2AGhuItSdgnvXg-1LbzS_n0EPQTWY5erfm_miKdbiHZw5WmgIrZ0p9lQImum6gofA2hNxrLGKu96eeVrVlV-bgeEBZPeM91aqr7UnLIQ3svOzEPugwRbM1q7hTEkahWq20fVscYN7pmF_JiRaYQ=w408-h306-k-no', 49.357267072493634, 6.167970597861821, '+33382518422', 'accomodation', 'https://g.page/mercurethionvillecentregare?share'),
('Le B&B', '7 Place de la Gare', '57100 Thionville',  'https://lh4.googleusercontent.com/proxy/orPLgUZS7RqkevAtft3Dp1f5ds4JEGwh_sckYJzhwy1CW8ph_WuE1e0XrcAE3OdE-1TztkPVtzxBIDO3bCHrQA_P6DdUZMeqVTaPI0CP2z3LIa2zzF6k7wuR42QgmzLE3Va_yUoqJN1EP_vqo2JMkRkAmlcL4Q8=w408-h306-k-no', 49.35610453226837, 6.169219515032501, '+33892233664', 'accomodation', 'https://g.page/b-b-hotel-thionville?share');


COMMIT;
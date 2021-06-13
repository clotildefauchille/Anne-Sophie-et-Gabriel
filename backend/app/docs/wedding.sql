BEGIN;

DROP TABLE IF EXISTS "admin", "events", "answers", "permissions", "places";

CREATE TABLE "admin" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "permissions" (
    "id" SERIAL PRIMARY KEY,
    "type" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "answers" (
    "id" SERIAL PRIMARY KEY,
    "sub" TEXT NOT NULL DEFAULT '',
    "firstname" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "google_sheet_range" TEXT DEFAULT '',
    "email"  TEXT NOT NULL UNIQUE,
    "present" BOOLEAN DEFAULT 'false',
    "accompanied" BOOLEAN DEFAULT 'false',
    "firstname_partner" TEXT NOT NULL DEFAULT '',
    "children_number" INTEGER DEFAULT 0,
    "allergy" TEXT NOT NULL DEFAULT '',
    "permission_id" INTEGER NOT NULL REFERENCES permissions("id"),
    "last_login" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "places" (
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
    "room_number" TEXT NOT NULL DEFAULT '',
    "price" INTEGER DEFAULT 0,
    "comment" TEXT NOT NULL DEFAULT '',
    "is_in_pont_a_mousson" BOOLEAN DEFAULT 'true',
    "is_an_hostel" BOOLEAN DEFAULT 'true',
    "is_in_nancy" BOOLEAN DEFAULT 'true',
    "place_brunch" BOOLEAN DEFAULT 'true',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "schedule" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL DEFAULT '',
    "places_id" INTEGER NOT NULL REFERENCES places("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "admin" ("username", "password")
VALUES ('appscript@annesophiegabriel.com', 'Toto123!');

INSERT INTO "places" ("name", "street", "city", "image", "latitude", "longitude", "contact", "type", "google_map_link", "room_number", "price", "comment", "is_in_pont_a_mousson", "is_an_hostel", "is_in_nancy", "place_brunch") 
VALUES
('Abbaye des Prémontrés', '9 Rue Saint-Martin', '54700 Pont-à-Mousson', 'https://lh5.googleusercontent.com/p/AF1QipMiiHo0K7yYfHpVipLXx7RbfJzzIPzJ95LnQrId=w426-h240-k-no', 48.90801751045616, 6.055990925673508, '', 'wedding', 'https://goo.gl/maps/qDfQhdk6DhFuMH2d9', 15, 90, 'Cela vous permettra de profiter pleinement des festivités sans risquer de prendre la voiture !', true, true, false, false),
('Église Saint-Maximim', '3 Place de l’Eglise', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipPThqkctiywCJtxNGVPL6tb-JnYV-rHeG_kOuo9=w408-h282-k-no', 49.35687607852845,6.167122811463277,'', 'wedding', 'https://goo.gl/maps/B8sCZf3yKLEFzj8r8', 0, 0, '', false, false, false, false),
('Mairie de Thionville', '2 Cours du Château', '57100 Thionville', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=H4CIgGyff68q8MLX9t5zAQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=21.293295&pitch=0&thumbfov=100', 49.357798172627156, 6.168185114624695, '', 'wedding', 'https://goo.gl/maps/Ajmav14GCYdAVX5b7', 0, 0, '', false, false, false, false),
('Le Bagatelle Hôtel', '49 Rue Gambetta', '54700 Pont-à-Mousson', 'https://lh3.googleusercontent.com/proxy/NxnSgwD69AarTpshFNgNYgQxi7cjW2w4UGSM3yN2h6fxzS8T1qgp_6dQpIlprRuV7iER8AoIvf9yzC1NpbTYHNExiO9yKwXyDamV0qSBacKGVlclLTxQGH4BuUbJwWxf2F09ZaLVY-a4yyzGPhoRcmiRE-FjDA=w408-h306-k-no', 48.90627601119025, 6.060452157364099, '+33383810364', 'accomodation', 'https://goo.gl/maps/zsPMACGJTC54Ttj69', 16, 60, '', true, true, false, false),
('Le Kyriad Hôtel', '210 Allée de Espace Saint-Martin', '54700 Pont-à-Mousson', 'https://lh5.googleusercontent.com/proxy/lLjk58EKknvXu8tN4TjUaoRz67cz28FZGklL3MvTyZUKGrHeXshkrbXyOhyrvbdcJYvmTNfNkhXMh5_T_i6G9P0K9C2kQJRVssgjHVX83VlEh2tJ1I189z_XTYMbd4Mr-bhrfkGmZqbrHE-kd3vTPrn2jrX9JQc=w408-h306-k-no', 48.90075891808869, 6.064737397845906, '+33383810857', 'accomodation', 'https://goo.gl/maps/Gr64PiWpKXrpvcx49', 'plusieurs', 40, '', true, true, false, false),
('L''Hôtel des tuileries', 'Route de Cuvry', '57420 Fey', 'https://lh5.googleusercontent.com/proxy/U-Z9Gd5NgZveZahKZxoLtzh5qvkmITSlWBoficxhV-wm_Ud41TBIXQwtWWk-ZFe-niPnJA1Y2vrDE9eLWphEU3LxQTYoPNejG9sMBE1bFrw6sfit24SfYwTCg7n67HS3BiOMsBmCmlV81w1qoEgSrKKvyBVoXQ=w408-h270-k-no', 49.03576722077627, 6.10897092965827, '+33387520303', 'accomodation', 'https://goo.gl/maps/qbUU2y4MbD3PzSpt7', 40, 70, 'Le Brunch le lendemain se déroulera à l''Hôtel des Tuileries à Fey (15 minutes de route de l''Abbaye), exclusivement pour la famille. Nous vous conseillons vivement de réserver votre chambre dans cet hôtel. Il est composé de 40 chambres à 70€ en précisant lors de la réservation que vous faites partie des heureux convives de notre mariage !', true, true, false, true),
('L''Hôtel Kyriad Prestige', '9 Allée Raymond Poincaré', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipOQt52gPewncMpmfaMQNdWDPD6E_QvMnVejYXZa=w408-h272-k-no', 49.35745038143733, 6.163538632338005, '+33382503467', 'accomodation', 'https://goo.gl/maps/ei9oZiqeZgUppLa77', 60, 70, '', false, true, false, false),
('Le Logis hôtel des Oliviers', '1 Rue du Four Banal', '57100 Thionville', 'https://lh5.googleusercontent.com/p/AF1QipMj6tm-HUiuEX7EMWYm4KUIYD04O0jAJaiFUJ0G=w408-h271-k-no', 49.35792587599282, 6.165711924849858, '+33382537027', 'accomodation', 'https://goo.gl/maps/mwEMYoXqFartzpz5A', 26, 60, '', false, true, false, false),
('le mercure', '2 Rue Georges Ditsch', '57100 Thionville', 'https://lh5.googleusercontent.com/proxy/86aqZtqbVRN2AGhuItSdgnvXg-1LbzS_n0EPQTWY5erfm_miKdbiHZw5WmgIrZ0p9lQImum6gofA2hNxrLGKu96eeVrVlV-bgeEBZPeM91aqr7UnLIQ3svOzEPugwRbM1q7hTEkahWq20fVscYN7pmF_JiRaYQ=w408-h306-k-no', 49.357267072493634, 6.167970597861821, '+33382518422', 'accomodation', 'https://g.page/mercurethionvillecentregare?share', 53, 70, '', false, true, false, false),
('Le B&B', '7 Place de la Gare', '57100 Thionville', 'https://lh4.googleusercontent.com/proxy/orPLgUZS7RqkevAtft3Dp1f5ds4JEGwh_sckYJzhwy1CW8ph_WuE1e0XrcAE3OdE-1TztkPVtzxBIDO3bCHrQA_P6DdUZMeqVTaPI0CP2z3LIa2zzF6k7wuR42QgmzLE3Va_yUoqJN1EP_vqo2JMkRkAmlcL4Q8=w408-h306-k-no', 49.35610453226837, 6.169219515032501, '+33892233664', 'accomodation', 'https://g.page/b-b-hotel-thionville?share', 76, 60, '', false, true, false, false),
('L''Hôtel de Guise - Vieille Ville', '18 Rue de Guise', '54000 Nancy', 'https://lh3.googleusercontent.com/proxy/qRRCAWBfveWVvRdWgMFPrBJJsiDubBBraD0gUAdbuNkMxEa38Vd3c2qmk4F7tOvEnOxrt2bbjsa4ySIfCEUJPotUfEEGH1clMRripgOQHlFCugOnh2kWWPZ28BA0q80ZigCmmYKIEKhFwOgojZsV0yxX5wbW1w=w408-h467-k-no', 48.697753532356806, 6.1772273, '+33383322468', 'accomodation', 'https://goo.gl/maps/LxHThnGdqXk7xQ3A6', 49, 75, '', false, true, true, false),
('L''Hôtel Mercure Place Stanislas', '5 Rue Des Carmes','54000 Nancy', 'https://lh5.googleusercontent.com/p/AF1QipMffRixePMxwmx-n9Eidq2M8HlJiqrXJPjJYxQU=w408-h271-k-no', 48.692108381807586, 6.180342967515929, '+33383309260', 'accomodation', 'https://g.page/mercurestanislas?share', 'plusieurs', 95, '', false, true, true, false);

INSERT INTO "events" ("schedule", "type", "icon", "places_id") 
VALUES
('Voeux à la Mairie à 14h00', 'Rendez-vous à la', 'cityHall', 3),
('Cérémonie religieuse à 15h00', 'Rendez-vous à l''', 'bell', 2),
('Vin d''honneur à 17H00', 'Rendez-vous à l''', 'coktail', 1),
('Dîner à 20H00', 'Soirée à l''', 'diner', 1),
('Brunch à 11H00', 'Brunch à l''', 'brunch', 1);

INSERT INTO "permissions" ("type") 
VALUES
('guest:cocktail'), ('guest:diner'), ('guest:brunch');


-- INSERT INTO "answers" ("sub", "firstname", "lastname", "google_sheet_range", "email", "present", "accompanied", "firstname_partner", "children_number", "allergy", "permission_id")
-- VALUES
-- ('123', 'clo', 'fauchille', 'guest!E2:I3', 'clo@gmail.com', 'true', 'true', 'rod', '2', 'non', 3),
-- ('143', 'gab', 'fauchille', 'guest!E2:I3', 'gab@gmail.com', 'false', 'true', 'ann', '0', 'non', 2);

COMMIT;
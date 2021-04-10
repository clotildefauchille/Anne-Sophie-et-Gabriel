BEGIN;

DROP TABLE IF EXISTS "guest", "place";

CREATE TABLE "guest" (
    "id" SERIAL PRIMARY KEY,
    "sub" TEXT NOT NULL DEFAULT '',
    "firstname" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "present" BOOLEAN DEFAULT 'false',
    "accompanied" BOOLEAN DEFAULT 'false',
    "firstname_partner" TEXT NOT NULL DEFAULT '',
    "children_number" INTEGER DEFAULT 0,
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
('Mairie de Thionville', '2 Cours du Château', '57100 Thionville', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=H4CIgGyff68q8MLX9t5zAQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=21.293295&pitch=0&thumbfov=100', 49.357798172627156, 6.168185114624695, '', 'wedding', 'https://goo.gl/maps/Ajmav14GCYdAVX5b7');

COMMIT;
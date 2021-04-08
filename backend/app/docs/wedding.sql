BEGIN;

DROP TABLE IF EXISTS "guest";

CREATE TABLE "guest" (
    "id" SERIAL PRIMARY KEY,
    "sub" TEXT NOT NULL DEFAULT '',
    "present" BOOLEAN DEFAULT 'false',
    "accompanied" BOOLEAN DEFAULT 'false',
    "firstname_partner" TEXT NOT NULL DEFAULT '',
    "children_number" INTEGER DEFAULT 0,
    "babysiter" BOOLEAN DEFAULT 'false',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- INSERT INTO "guest" ("sub", "present", "accompanied", "number-children", "babysiter") VALUES
-- ('google-oauth2|101666571097616652218', true, true, 2, true);

COMMIT;
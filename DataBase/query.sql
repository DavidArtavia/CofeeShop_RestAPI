CREATE DATABASE CofeeShop;

CREATE TABLE IF NOT EXISTS public."Orders"
(
    id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "user" character varying COLLATE pg_catalog."default",
    "createdAt" character varying COLLATE pg_catalog."default",
    "updatedAt" character varying COLLATE pg_catalog."default",
    state character varying COLLATE pg_catalog."default",
    CONSTRAINT "Orders_pkey" PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public."Products"
(
    id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    image character varying(1000) COLLATE pg_catalog."default",
    name character varying(60) COLLATE pg_catalog."default",
    price character varying(100) COLLATE pg_catalog."default",
    "Created" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Products_pkey" PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public."Items"
(
    id integer NOT NULL DEFAULT nextval('"Items_id_seq"'::regclass),
    "idProducts" character varying COLLATE pg_catalog."default",
    qty integer,
    id_orders character varying COLLATE pg_catalog."default",
    CONSTRAINT items_pk PRIMARY KEY (id),
    CONSTRAINT items_orders_id_fk FOREIGN KEY (id_orders)
        REFERENCES public."Orders" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT items_products_id_fk FOREIGN KEY ("idProducts")
        REFERENCES public."Products" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
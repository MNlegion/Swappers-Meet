ALTER TABLE bid ADD UNIQUE INDEX unidx_bid(user_id, product_id);
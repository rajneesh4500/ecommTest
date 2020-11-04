package org.ecomm.src.service;

import org.ecomm.src.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InitialRecommendation {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Product> getInitialRecommendation(){


        List<Product> tt = mongoTemplate.find(new Query(Criteria.where("product_category_tree").regex(".*Footwear.*")),Product.class);
        return tt;
    }
}

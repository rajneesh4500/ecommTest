package org.ecomm.src.service;


import org.ecomm.src.model.Product;
import org.ecomm.src.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodaysDealHandler {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getDeals() {
        List<Product> totalProducts = productRepository.findAll();
        List<Product> finalProducts = totalProducts.parallelStream().filter((k) -> {
            float value = (k.getRetail_price()-k.getDiscounted_price())/k.getRetail_price() * 100;
            if( value > 75){
                return true;
            }

            return false;
        }).limit(20).collect(Collectors.toList());

        return finalProducts;
    }
}

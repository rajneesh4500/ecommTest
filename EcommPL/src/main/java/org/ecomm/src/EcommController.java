package org.ecomm.src;

import org.ecomm.src.model.Product;
import org.ecomm.src.model.ProductsResponseModel;
import org.ecomm.src.repository.ProductRepository;
import org.ecomm.src.service.InitialRecommendation;
import org.ecomm.src.service.TodaysDealHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/v1")
public class EcommController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private InitialRecommendation initialRecommendation;

    @Autowired
    private TodaysDealHandler todaysDealHandler;

    @RequestMapping("/test")
    public ResponseEntity<String> test(){
        List<Product> pp = productRepository.findAll();
        System.out.println(pp.size());
        return new ResponseEntity<String>("aa",HttpStatus.OK);
    }

    @RequestMapping(value = "/getRecommendation")
    public ResponseEntity<ProductsResponseModel> getInitialRecommendation(){
        List<Product> recommendedProducts = initialRecommendation.getInitialRecommendation();
        ProductsResponseModel productsResponseModel = new ProductsResponseModel();
        if(recommendedProducts.size()>10)
            productsResponseModel.setProduct(recommendedProducts.subList(0,10));
        else
            productsResponseModel.setProduct(recommendedProducts);
        productsResponseModel.setMethod("initialCall");
        return new ResponseEntity<>(productsResponseModel,HttpStatus.OK);
    }


    //TODO: implement caching
    @RequestMapping(value="/getTodaysDeals")
    public ResponseEntity<ProductsResponseModel> getTodaysDeal(){
        List<Product> todaysDeal = todaysDealHandler.getDeals();
        ProductsResponseModel productsResponseModel = new ProductsResponseModel();
        productsResponseModel.setProduct(todaysDeal);
        productsResponseModel.setMethod("todaysDeal");
        System.out.println("Values");


        return new ResponseEntity<>(productsResponseModel,HttpStatus.OK);
    }

}

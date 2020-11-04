package org.ecomm.src.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {
    @Id
    private String uniq_id;
    private String product_url;
    private String product_name;
    private String product_category_tree;
    private String pid;
    private Float retail_price;
    private Float discounted_price;
    private String image;
    private String description;
    private String product_rating;
    private String brand;
    private String product_specifications;


    public String getUniq_id() {
        return uniq_id;
    }

    public void setUniq_id(String uniq_id) {
        this.uniq_id = uniq_id;
    }

    public String getProduct_url() {
        return product_url;
    }

    public void setProduct_url(String product_url) {
        this.product_url = product_url;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public Float getRetail_price() {
        return retail_price;
    }

    public void setRetail_price(Float retail_price) {
        this.retail_price = retail_price;
    }

    public Float getDiscounted_price() {
        return discounted_price;
    }

    public void setDiscounted_price(Float discounted_price) {
        this.discounted_price = discounted_price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProduct_rating() {
        return product_rating;
    }

    public void setProduct_rating(String product_rating) {
        this.product_rating = product_rating;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getProduct_category_tree() {
        return product_category_tree;
    }

    public void setProduct_category_tree(String product_category_tree) {
        this.product_category_tree = product_category_tree;
    }

    public String getProduct_specifications() {
        return product_specifications;
    }

    public void setProduct_specifications(String product_specifications) {
        this.product_specifications = product_specifications;
    }
}

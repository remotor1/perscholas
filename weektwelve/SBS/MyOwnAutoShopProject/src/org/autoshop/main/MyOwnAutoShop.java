package org.autoshop.main;

import org.autoshop.classes.*;

class MyOwnAutoShop {
    public static void main(String[] args) {
        Sedan sedan = new Sedan(60, 10000, "blue", 15);
        Ford ford1 = new Ford(70, 20000, "red", 2019, 5000);
        Ford ford2 = new Ford(80, 25000, "black", 2022, 6000);
        Car car = new Car(50, 15000, "green");
        
        System.out.println("Sale price of sedan: " + sedan.getSalePrice());
        System.out.println("Sale price of ford1: " + ford1.getSalePrice());
        System.out.println("Sale price of ford2: " + ford2.getSalePrice());
        System.out.println("Sale price of car: " + car.getSalePrice());
    }
}

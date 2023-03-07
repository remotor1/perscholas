package org.autoshop.classes;

public class Sedan extends Car {
    private int length;

    public Sedan(int speed, double regularPrice, String color, int length) {
        super(speed, regularPrice, color);
        this.length = length;
    }

    public double getSalePrice() {
        return super.getSalePrice() * (length > 20 ? 0.95 : 0.9);
    }
}

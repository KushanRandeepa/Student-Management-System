import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})
export class UserData {
  private id: number;
  private username: string;
  private email: string;
  private password: string;
  private name: string;
  private phoneNumber: string;
  private address: string;
  private grade: string;
  private birthday: Date;
  private imageUrl?: string;

    constructor(
        id: number,
        username: string,
        email: string,
        password: string,
        name: string,
        phoneNumber: string,
        address: string,
        grade: string,
        birthday: Date,
        imageUrl?: string
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.grade = grade;
        this.birthday = birthday;
        this.imageUrl = imageUrl;
    }   

    getId(): number {
        return this.id;
    }   
    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email;
    }
    getPassword(): string {
        return this.password;
    }
    getName(): string {
        return this.name;
    }
    getPhoneNumber(): string {
        return this.phoneNumber;
    }
    getAddress(): string {
        return this.address;
    }
    getGrade(): string {
        return this.grade;
    }
    getBirthday(): Date {
        return this.birthday;
    }
    getImageUrl(): string | undefined {
        return this.imageUrl;
    }
    setId(id: number): void {
        this.id = id;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    setEmail(email: string): void {
        this.email = email;
    }
    setPassword(password: string): void {
        this.password = password;
    }

    setName(name: string): void {
        this.name = name;
    }
    setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }
    setAddress(address: string): void {
        this.address = address;
    }
    setGrade(grade: string): void {
        this.grade = grade;
    }
    setBirthday(birthday: Date): void {
        this.birthday = birthday;
    }
    setImageUrl(imageUrl: string | undefined): void {
        this.imageUrl = imageUrl;
    }
    toJSON(): any {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password,
            name: this.name,
            phoneNumber: this.phoneNumber,
            address: this.address,
            grade: this.grade,
            birthday: this.birthday,
            imageUrl: this.imageUrl
        };
    }
}

